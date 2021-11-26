import React, { useCallback, useContext, useEffect, useState } from 'react'

import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import Collapse from '@material-ui/core/Collapse'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import { withStyles, useTheme/* , withStyles */ } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import LockIcon from '@material-ui/icons/Lock'
import LockOpenIcon from '@material-ui/icons/LockOpen'

import { OfferingReview } from 'types/Offering'

import api from 'API'
import OfferingContext from 'contexts/OfferingContext'
import { useMySnackbar } from 'hooks'
import EmoteHated from 'images/hated.svg'
import EmoteIndifferent from 'images/indifferent.svg'
import EmoteLiked from 'images/liked.svg'
import EmoteLoved from 'images/loved.svg'
import EmoteUnliked from 'images/unliked.svg'

const emotes = [
	{
		emote: EmoteHated,
		caption: 'Odiei'
	},
	{
		emote: EmoteUnliked,
		caption: 'Não gostei'
	},
	{
		emote: EmoteIndifferent,
		caption: 'Indiferente'
	},
	{
		emote: EmoteLiked,
		caption: 'Gostei'
	},
	{
		emote: EmoteLoved,
		caption: 'Amei'
	}
]

const OfferingReviewInput = withStyles(theme => ({
	root: {
		border: '1px solid #e2e2e1',
		overflow: 'hidden',
		borderRadius: 10,
		backgroundColor: '#fcfcfb',
		transition: theme.transitions.create(['border-color', 'box-shadow']),
		padding: '1rem',
		boxSizing: 'border-box',
		'&:hover': {
			backgroundColor: '#fff'
		}
	}
}))(TextField)

const COMMENT_THRESHOLD = 10
const COMMENT_LIMIT = 300

interface PropTypes {
    review: OfferingReview
    setReview: (r: OfferingReview) => void
}

const OfferingReviewBox: React.FC<PropTypes> = ({ review, setReview }) => {
	const theme = useTheme()
	const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))

	const [isReviewFormOpen, setIsReviewFormOpen] = useState<boolean>(false)
	const [comment, setComment] = useState<string>('')
	const [rate, setRate] = useState<number | null>(null)
	const [pending, setPending] = useState<boolean>(false)
	const [editing, setEditing] = useState<boolean>(false)
	const notify = useMySnackbar()
	const { professor, course, specialization, code } = useContext(OfferingContext)

	// Loaded review
	useEffect(() => {
		setComment(review?.body || '')
		setRate(review?.rating || null)
		setEditing(false)
	}, [review])

	// Reset component when selected professor changes
	useEffect(() => {
		setComment('')
		setRate(null)
		setPending(false)
		setEditing(false)
	}, [professor])

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
			professor,
			comment,
			rate
		).then(review => {
			notify('Sua avaliação foi enviada!', 'success')
			setReview(review)
			setPending(false)
		}).catch(err => {
			if (err.status === 403) {
				notify('Você precisa ter feito a matéria para avaliar', 'info')
			} else {
				alert(`Algo de errado aconteceu (${err.message}). Tente novamente mais tarde!`)
			}
			setPending(false)
		})
	}, [comment, rate])

	const isLocked = editing === false && review !== null

	return <div className='full-width offering-review-form-accordion'>
		<Grid container
			className='offering-review-form-accordion-button'
			direction='row-reverse'
			alignItems='center'
			onClick={() => setIsReviewFormOpen(!isReviewFormOpen) }
		>
			<Grid item>
				{isReviewFormOpen
					? <ExpandLessIcon fontSize='large' />
					: <ExpandMoreIcon fontSize='large' />
				}
			</Grid>
		</Grid>
		<Collapse in={isReviewFormOpen}>
			<Container>
				<Grid
					container
					direction='column'
					justify='space-evenly'
					alignItems='stretch'
					spacing={2}
					className='offering-review-form-accordion-content'
				>
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
							helperText={`${comment.length}/300`}
							disabled={isLocked}
						/>
						{ review
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
						<Grid
							item xs container
							direction='row'
							justify='center'
							spacing={2}
							style={{ minWidth: 400, maxWidth: 400 }}
						>
							{emotes.map((emote, idx) => (
								<Grid
									xs="auto"
									item
									key={idx}
								>
									<Grid container
										direction='column'
										justify='center'
										alignItems='center'
									>
										<div tabIndex={idx} className={`
                                        move-up-hover-parent 
                                        move-down-on-click-parent 
                                        ${rate === idx + 1 ? 'img-popped' : ''}
                                    `}>
											<img
												src={emote.emote}
												height={isDesktop ? 36 : 24}
												className={isLocked ? '' : `cursor-pointer ${rate !== idx + 1 ? 'move-up-hover-child' : ''}`}
												onClick={isLocked ? null : () => handleRateChange(idx + 1)}
											/>
										</div>
										<Typography variant='caption' color={idx + 1 === rate ? 'textPrimary' : 'textSecondary'}>
											{emote.caption}
										</Typography>
									</Grid>
								</Grid>
							))}
						</Grid>
						{isDesktop
							? <Grid item style={{ maxWidth: 400 }} xs>
								<Button
									fullWidth
									color="primary"
									size="large"
									variant="contained"
									disabled={rate === null || comment.length < COMMENT_THRESHOLD || isLocked || (comment === review?.body && rate === review?.rating)}
									onClick={handleReviewSubmit}
								>
									{
										pending
											? <CircularProgress color='secondary'/>
											: review === null
												? 'ENVIAR'
												: 'EDITAR'
									}
								</Button>
							</Grid>
							: null
						}
					</Grid>
				</Grid>
			</Container>
			{!isDesktop
				? <Button
					fullWidth
					color="primary"
					size="large"
					variant="contained"
					disabled={rate === null || comment.length < COMMENT_THRESHOLD || isLocked || (comment === review?.body && rate === review?.rating)}
					onClick={handleReviewSubmit}
					style={{ height: 40 }}
				>
					{
						pending
							? <CircularProgress color='secondary' size={20}/>
							: review === null
								? 'ENVIAR'
								: 'EDITAR'
					}
				</Button>
				: null
			}
		</Collapse>

	</div>
}

export default OfferingReviewBox
