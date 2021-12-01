import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import api from 'API'
import Navbar from 'components/Navbar'
import PasswordInput from 'components/PasswordInput'
import { useErrorDialog, useMySnackbar } from 'hooks'
import { buildURI as buildLoginPageURI } from 'pages/LoginPage'
import { validatePassword } from 'utils'

export function buildURI (): string {
	return '/account/password_reset'
}

const textFieldCommonProps = {
	variant: 'outlined',
	color: 'secondary',
	size: 'small',
	fullWidth: true
}

const PasswordResetPage: React.FC = () => {
	const [password, setPassword] = useState<string[]>(['', ''])
	const [editedPasswordField, setEditedPasswordField] = useState<boolean[]>([false, false])
	const [pending, setPending] = useState<boolean>(false)

	// get token from URL params
	const token = new URLSearchParams(window.location.search).get('token')

	const notify = useMySnackbar()
	const uspyAlert = useErrorDialog()

	const history = useHistory()

	const passwordValid = validatePassword(password[0])
	const passwordsMatch = password[0] === password[1]

	const resetPassword = () => {
		console.log('token', token)
		setPending(true)
		api.resetPassword(token, password[0]).then(() => {
			setPending(false)
			setTimeout(() => {
				history.replace(buildLoginPageURI())
			}, 1500)
			notify('Senha redefinida com sucesso!', 'success')
		}).catch(err => {
			setPending(false)
			if (err.status === 400) {
				uspyAlert('Token inválido!')
			} else if (err.status === 404) {
				uspyAlert('O usuário não existe!')
			} else {
				uspyAlert('Algo de errado aconteceu :(. Tente novamente mais tarde!')
			}
		})
	}

	return <div className="main">
		<main>
			<Navbar/>
			<div style={{ height: '150px' }}></div>
			<Container>
				<Grid container spacing={2} justify='center' alignItems='center' direction='column'>
					<Grid item>
						<Typography> A sua nova senha deve conter no mínimo 8 caracteres, com pelo menos um símbolo e um número. </Typography>
						<br/>
					</Grid>
					<Grid item>
						<PasswordInput
							label="Nova Senha"
							id="pwd1"
							value={password[0]}
							error={editedPasswordField[0] && !passwordValid}
							helperText={editedPasswordField[0] && !passwordValid ? 'Senha não satisfaz os requisitos' : ''}
							onBlur={() => setEditedPasswordField([true, editedPasswordField[1]])}
							onChange={(evt: any) => setPassword([evt.target.value, password[1]])}
							{...textFieldCommonProps}
						/>
					</Grid>
					<Grid item>
						<PasswordInput
							label="Confirmar senha"
							id="pwd2"
							value={password[1]}
							error={editedPasswordField[1] && !passwordsMatch}
							helperText={editedPasswordField[1] && !passwordsMatch ? 'Senhas diferem' : ''}
							onBlur={() => setEditedPasswordField([editedPasswordField[1], true])}
							onChange={(evt: any) => setPassword([password[0], evt.target.value])}
							{...textFieldCommonProps}
						/>
					</Grid>
					<Grid item>
						<Button
							fullWidth
							color="secondary"
							size="medium"
							id="submit"
							variant="outlined"
							onClick={resetPassword}
							disabled={!passwordValid || !passwordsMatch}
						>
							{pending ? <CircularProgress color='secondary' size='1rem'/> : 'Redefinir senha'}
						</Button>
					</Grid>
				</Grid>
			</Container>
		</main>
	</div>
}

export default PasswordResetPage
