import React, { useState } from 'react'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

import api from 'API'
import { useMySnackbar, useErrorDialog } from 'hooks'
import { validateEmail } from 'utils'

interface SendActivationEmailModalProps {
	open: boolean
	handleClose: () => void
}

const SendActivationEmailModal: React.FC<SendActivationEmailModalProps> = ({
	open,
	handleClose,
}) => {
	const [email, setEmail] = useState<string>('')
	const [showEmailError, setShowEmailError] = useState<boolean>(false)
	const emailOk = !showEmailError || validateEmail(email) || !open
	const notify = useMySnackbar()
	const uspyAlert = useErrorDialog()

	const sendEmail = () => {
		// send activation email
		api.sendActivationEmail(email)
			.then(() => {
				notify('Email enviado com sucesso', 'success')
				handleClose()
			})
			.catch(err => {
				console.error(err)
				uspyAlert(
					`Algo deu errado ${err.message}. Tente novamente mais tarde.`,
					'Falha na ativação',
				)
			})
	}

	return (
		<Dialog onClose={handleClose} open={open}>
			<DialogTitle> Verificar conta </DialogTitle>
			<DialogContent style={{ overflow: 'hidden' }}>
				<Grid container direction="column" spacing={3}>
					<Grid item>
						<Typography variant="body1">
							Insira seu email USP para que reenviemos um link de
							verificação da conta!
						</Typography>
					</Grid>
					<Grid item>
						<TextField
							label="Email USP"
							name="email"
							id="email"
							type="text"
							value={email}
							error={!emailOk}
							helperText={emailOk ? '' : 'Email inválido'}
							onBlur={() => setShowEmailError(true)}
							onChange={(evt: any) => setEmail(evt.target.value)}
							variant="outlined"
							color="secondary"
							size="small"
							fullWidth
						/>
					</Grid>
				</Grid>
			</DialogContent>
			<DialogActions>
				<Button
					fullWidth
					color="secondary"
					size="medium"
					variant="outlined"
					onClick={sendEmail}
					disabled={!validateEmail(email)}>
					Enviar
				</Button>
			</DialogActions>
		</Dialog>
	)
}

export default SendActivationEmailModal
