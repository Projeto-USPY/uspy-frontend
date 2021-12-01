import React, { useState, useEffect } from 'react'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Modal from '@material-ui/core/Modal'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import CloseIcon from '@material-ui/icons/CloseOutlined'
import { useTheme } from '@material-ui/styles'

import api from 'API'
import { useErrorDialog, useMySnackbar } from 'hooks'
import { validateEmail } from 'utils'

interface PasswordRedefinitionModalProps {
    open: boolean
    handleClose: () => void
}

const PasswordRedefinitionModal: React.FC<PasswordRedefinitionModalProps> = ({ open, handleClose }) => {
	const theme = useTheme()
	const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))

	const [email, setEmail] = useState<string>('')
	const [showEmailError, setShowEmailError] = useState<boolean>(false)
	const emailOk = !showEmailError || validateEmail(email)
	const notify = useMySnackbar()
	const uspyAlert = useErrorDialog()

	useEffect(() => {
		if (!open) setShowEmailError(false)
	}, [open])
	const sendEmail = () => {
		// send activation email
		api.sendPasswordRedefinitionEmail(email).then(() => {
			notify('Email enviado com sucesso', 'success')
			handleClose()
		}).catch(err => {
			console.error(err)
			uspyAlert(`Algo deu errado (${err.message}). Tente novamente mais tarde.`, 'Falha na redefinição')
		})
	}

	return <Modal
		open={open}
		onClose={handleClose}
		style={{
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			margin: 0,
			borderWidth: '0px'
		}}>
		<div >
			<Grid container justify='flex-end' style={{ position: 'fixed', top: '0px', left: '0px' }}>
				<Grid item>
					<IconButton onClick={handleClose} size='medium' aria-label="close" disableRipple>
						<CloseIcon fontSize='large' style={{ color: isDesktop ? 'white' : 'black', padding: '2rem' }} />
					</IconButton>
				</Grid>
			</Grid>
			<Grid
				container
				style={{
					width: isDesktop ? '500px' : '90%',
					maxHeight: '750px',
					background: 'white',
					overflow: 'auto',
					position: 'relative'
				}}
				direction="column"
				spacing={3}
			>

				<Grid item>
					<Typography variant="body1">
                            Insira seu email USP cadastrado para que enviemos um link de redefinição de senha!
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

				<Grid item>
					<Button
						fullWidth
						color="primary"
						size="medium"
						variant='outlined'
						onClick={sendEmail}
						disabled={!validateEmail(email)}
					>
                        Enviar
					</Button>
				</Grid>
			</Grid>
		</div>
	</Modal>
}

export default PasswordRedefinitionModal
