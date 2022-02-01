import React, { useCallback, useContext, useState } from 'react'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

import api from 'API'
import OfferingContext from 'contexts/OfferingContext'
import { useMySnackbar } from 'hooks'

interface PropsType {
    review: string
    isOpen: boolean,
    close: () => void
}

const ReportField = withStyles(theme => ({
	root: {
		border: '1px solid #e2e2e1',
		overflow: 'hidden',
		borderRadius: 10,
		backgroundColor: '#fcfcfb',
		transition: theme.transitions.create(['border-color', 'box-shadow']),
		padding: '.5rem',
		boxSizing: 'border-box',
		'&:hover': {
			backgroundColor: '#fff'
		}
	}
}))(TextField)

const COMMENT_THRESHOLD = 10
const COMMENT_LIMIT = 300

const OfferingReviewReportDialog: React.FC<PropsType> = ({ review, isOpen, close }) => {
	const [comment, setComment] = useState<string>('')
	const { course, specialization, code, professor } = useContext(OfferingContext)
	const notify = useMySnackbar()

	const handleSubmit = useCallback(() => {
		// fazer alguma coisa com api
		api.reportOfferingReview(course, specialization, code, professor, review, comment).then(() => {
			notify('Sua denúncia foi enviada', 'success')
			close()
		}).catch(err => {
			notify('Algo deu errado, tente novamente mais tarde', 'error')
			console.error(err)
		})
	}, [comment])

	const handleCommentChange = (s: string) => {
		if (s.length <= COMMENT_LIMIT) {
			setComment(s)
		}
	}

	return <Dialog open={isOpen} onClose={close}>
		<DialogTitle> Reportar comentário </DialogTitle>
		<DialogContent>
			<DialogContentText>
                Por favor, descreva por que esse comentário deve ser reportado.
                Caso ele seja ofensivo, preconceituoso, calunioso, irrelevante ao oferecimento ou, por qualquer
                outra razão, não deva estar aqui, nós tomaremos providências deletando o comentário e possivelmente
                banindo a conta do autor(a).
			</DialogContentText>
			<ReportField
				autoFocus
				onChange={evt => handleCommentChange(evt.target.value)}
				fullWidth
				multiline
				InputProps={{ disableUnderline: true }}
				helperText={`${comment.length}/300`}
				rows={3}
			/>
		</DialogContent>
		<DialogActions>
			<Button onClick={close} color="primary">
        Cancelar
			</Button>
			<Button disabled={comment.length < COMMENT_THRESHOLD} onClick={handleSubmit} color="primary">
        Enviar
			</Button>
		</DialogActions>
	</Dialog>
}

export default OfferingReviewReportDialog
