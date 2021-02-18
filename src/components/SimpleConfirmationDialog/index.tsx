import React from 'react'

import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'
import PaperComponent from '@material-ui/core/Paper'

interface SimpleConfirmationDialogProps {
	title: string
	body?: string
	cancelText: string
	confirmText: string
	open: boolean
	confirmCallback?: () => void
	cancelCallback?: () => void
}

const SimpleConfirmationDialog: React.FC<SimpleConfirmationDialogProps> = ({
	title,
	body,
	cancelText,
	confirmText,
	open,
	confirmCallback,
	cancelCallback
}) => {
	return <Dialog
		open={open}
		onClose={cancelCallback}
		PaperComponent={PaperComponent}
	>
		<DialogTitle>
			{title}
		</DialogTitle>
		{body ? <DialogContent>
			<DialogContentText>
				{body}
			</DialogContentText>
		</DialogContent> : null}
		<DialogActions>
			<Button autoFocus onClick={cancelCallback} color="secondary">
				{cancelText}
			</Button>
			<Button onClick={confirmCallback} color="secondary">
				{confirmText}
			</Button>
		</DialogActions>
	</Dialog>
}

export default SimpleConfirmationDialog
