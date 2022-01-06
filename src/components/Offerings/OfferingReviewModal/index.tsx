import React, { useState } from 'react'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { SubjectKey } from 'types/Subject'

import OfferingReviewInput from 'components/Offerings/OfferingReviewBox/OfferingReviewInput'

import OfferingEmotesSelector from '../OfferingEmotesSelector'

interface PropsType {
    subject: SubjectKey
    open: boolean
    close: () => void
}

// const COMMENT_THRESHOLD = 10
const COMMENT_LIMIT = 300

const OfferingReviewModal: React.FC<PropsType> = ({ subject, close, open }) => {
	const [comment, setComment] = useState<string>('')
	const [rate, setRate] = useState<number | null>(null)

	if (!open) return null
	const { code } = subject

	const handleCommentChange = (s: string) => {
		console.log(s)
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

	return <Dialog onClose={close} open={open}>
		<DialogTitle> Avaliar {code} </DialogTitle>
		<DialogContent>
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
						disabled={false /* isLocked */}
					/>
					{/* review
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
                    */}
				</Grid>
				<Grid item container justify='space-around' wrap='wrap'>
					<OfferingEmotesSelector rate={rate} setRate={handleRateChange} isLocked={false} />
				</Grid>
			</Grid>
		</DialogContent>
		<DialogActions>
			<Button onClick={close} color="primary">
                Cancelar
			</Button>
			<Button onClick={close} color="primary">
                Confirmar
			</Button>
		</DialogActions>
	</Dialog>
}

export default OfferingReviewModal
