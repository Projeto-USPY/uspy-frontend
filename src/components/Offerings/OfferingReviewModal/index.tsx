import React, { useCallback, useEffect, useState } from 'react'

import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import InputLabel from '@material-ui/core/InputLabel'
import NativeSelect from '@material-ui/core/NativeSelect'
import useTheme from '@material-ui/core/styles/useTheme'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import LockIcon from '@material-ui/icons/Lock'
import LockOpenIcon from '@material-ui/icons/LockOpen'

import { OfferingInfo, OfferingReview } from 'types/Offering'
import { SubjectKey } from 'types/Subject'

import api from 'API'
import OfferingEmotesSelector from 'components/Offerings/OfferingEmotesSelector'
import OfferingReviewInput from 'components/Offerings/OfferingReviewBox/OfferingReviewInput'
import { useMySnackbar, useErrorDialog } from 'hooks'

interface PropsType {
    subject: SubjectKey
    close: () => void
}

const COMMENT_THRESHOLD = 10
const COMMENT_LIMIT = 300

const OfferingReviewModal: React.FC<PropsType> = ({ subject, close }) => {
	const [loadingReview, setLoadingReview] = useState<boolean>(false)
	const [userReview, setUserReview] = useState<OfferingReview | null>(null)
	const [pending, setPending] = useState<boolean>(false)
	const [editing, setEditing] = useState<boolean>(false)
	const [offerings, setOfferings] = useState<OfferingInfo[]>([{ code: '', professor: 'Carregando...' }])
	const [selectedOffering, setSelectedOffering] = useState<string>('')
	const [comment, setComment] = useState<string>('')
	const [rate, setRate] = useState<number | null>(null)

	const uspyAlert = useErrorDialog()

	const theme = useTheme()
	const { course, specialization, code } = subject
	const notify = useMySnackbar()

	// Loaded review
	useEffect(() => {
		setComment(userReview?.body || '')
		setRate(userReview?.rating || null)
		setEditing(false)
	}, [userReview])

	// Reset component when selected professor changes
	useEffect(() => {
		setComment('')
		setRate(null)
		setPending(false)
		setEditing(false)
	}, [selectedOffering])

	useEffect(() => {
		api.getSubjectOfferings(course, specialization, code).then(data => {
			setOfferings(data)
			setSelectedOffering(data[0].code)
		}).catch(err => {
			if (err.code === 'not_found') {
				notify('Não foi possível encontrar oferecimentos para esta disciplina', 'error')
			} else if (err.code === 'unauthorized') {
				notify('Você deve estar logado para ver esta página!', 'error')
			} else {
				notify(`Algo deu errado (${err.message}). Tente novamente mais tarde`, 'error')
				console.error(err)
			}
			close()
		})
	}, [course, specialization, code])

	useEffect(() => {
		if (selectedOffering) {
			setLoadingReview(true)
			api.getUserOfferingReview(course, specialization, code, selectedOffering).then(review => {
				setUserReview(review)
				setLoadingReview(false)
			}).catch(err => {
				if (err.code === 'not_found') {
					setUserReview(null)
				} else {
					console.error(err)
				}
				setLoadingReview(false)
			})
		}
	}, [course, specialization, code, selectedOffering])

	const handleCommentChange = (s: string) => {
		if (s.length <= COMMENT_LIMIT) {
			setComment(s)
		}
	}

	const handleRateChange = (x: number) => {
		if (x === rate) {
			setRate(null)
		} else {
			setRate(x)
		}
	}

	const handleReviewSubmit = useCallback(() => {
		setPending(true)
		api.submitOfferingReview(
			course,
			specialization,
			code,
			selectedOffering,
			comment,
			rate
		).then(() => {
			notify('Sua avaliação foi enviada!', 'success')
			close()
		}).catch(err => {
			if (err.code === 'forbidden') {
				notify('Você precisa ter feito a matéria para avaliar', 'info')
			} else {
				uspyAlert(`Algo de errado aconteceu (${err.message}). Tente novamente mais tarde!`)
			}
			setPending(false)
		})
	}, [comment, rate])

	const isLocked = editing === false && userReview !== null

	return <Dialog onClose={close} open>
		<DialogTitle style={{ backgroundColor: theme.palette.primary.main, color: 'white' }}> Avaliar {code} </DialogTitle>
		<DialogContent className='pad1'>
			<Grid
				container
				direction='column'
				justify='space-evenly'
				alignItems='stretch'
				spacing={2}
			>
				<Grid item xs='auto'>
					<FormControl>
						<InputLabel shrink htmlFor='professor-modal-selector'>
						Professor
						</InputLabel>
						<NativeSelect
							name="professor"
							value={selectedOffering}
							onChange={evt => setSelectedOffering(evt.target.value)}
							inputProps={{ id: 'professor-modal-selector' }}
						>
							{offerings.map(o =>
								<option key={o.code} value={o.code}> {o.professor} </option>
							)}
						</NativeSelect>
						<FormHelperText>Escolha o professor que lhe ministrou a disciplina</FormHelperText>
					</FormControl>
				</Grid>
				<Grid container item justify='center' xs='auto'>
					<Typography variant='caption' color='textSecondary'> Lembre-se:
                        O USPY não se responsabiliza pelas avaliações feitas por você,
                        porém desrespeitar ou ofender docentes podem resultar na
                        remoção do seu comentário e banimento da sua conta.
					</Typography>
				</Grid>
				<Grid item xs>
					<OfferingReviewInput
						InputProps={{ disableUnderline: true }}
						multiline
						value={comment}
						onChange={evt => handleCommentChange(evt.target.value)}
						rows={5}
						fullWidth
						placeholder='Escreva seu comentário aqui...'
						helperText={`${comment.length}/300`}
						disabled={isLocked || loadingReview}
					/>
					{ userReview
						? <Grid container alignItems='center' direction='row-reverse'>
							<IconButton onClick={() => setEditing(!editing)}>
								<Tooltip title={editing ? 'Travar avaliação' : 'Editar avaliação' }>
									{
										editing
											? <LockOpenIcon color='primary'/>
											: <LockIcon color='primary'/>
									}
								</Tooltip>
							</IconButton>
							<Typography variant='body2' color='textSecondary'>
								{editing ? '' : 'Destrave para editar '} &nbsp;
							</Typography>
						</Grid>
						: null
					}
				</Grid>
				<Grid item container justify='space-around' wrap='wrap'>
					<OfferingEmotesSelector rate={rate} setRate={handleRateChange} isLocked={isLocked} />
				</Grid>
			</Grid>
		</DialogContent>
		<DialogActions>
			<Button onClick={close}>
                Cancelar
			</Button>
			<Button
				onClick={handleReviewSubmit}
				disabled={rate === null || comment.length < COMMENT_THRESHOLD || (comment === userReview?.body && rate === userReview?.rating)}
				endIcon={pending ? <CircularProgress size={20} /> : null}
			>
				{userReview === null ? 'ENVIAR' : 'EDITAR'}
			</Button>
		</DialogActions>
	</Dialog>
}

export default OfferingReviewModal
