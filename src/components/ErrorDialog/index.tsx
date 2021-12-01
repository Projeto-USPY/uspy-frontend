import React, { useEffect, useState } from 'react'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

interface PropsType {
    message: string
    open: boolean
    title?: string
    close: () => void
}

const ErrorDialog: React.FC<PropsType> = ({ message, open, title, close }) => {
	// next useStates and useEffect are a hack
	// so that message and title freeze during exit transition
	const [mmessage, setMessage] = useState<string>(message)
	const [ttitle, setTitle] = useState<string | undefined>(title)

	useEffect(() => {
		if (open) {
			setMessage(message)
			setTitle(title)
		}
	}, [open])

	return <Dialog onClose={close} open={open}>
		<DialogTitle> {ttitle || 'Ops!'} </DialogTitle>
		<DialogContent>
			<DialogContentText>
				{mmessage}
			</DialogContentText>
		</DialogContent>
		<DialogActions>
			<Button id='dismiss-error-dialog' onClick={close} color="secondary">
                Ok
			</Button>
		</DialogActions>
	</Dialog>
}

export default ErrorDialog
