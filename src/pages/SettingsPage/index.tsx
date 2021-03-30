import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'

import { Dispatch, bindActionCreators, ActionCreator } from 'redux'

import Button from '@material-ui/core/Button'
import red from '@material-ui/core/colors/red'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import { createMuiTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme, ThemeProvider } from '@material-ui/styles'

import { ReduxAction } from 'types/redux'

import { setUserNone } from 'actions'
import { changePassword as changePasswordRequest, removeAccount as removeAccountRequest } from 'API'
import BreadCrumb from 'components/Breadcrumb'
import Navbar from 'components/Navbar'
import InputPassword from 'components/PasswordInput'
import SimpleConfirmationDialog from 'components/SimpleConfirmationDialog'

const textFieldCommonProps = {
	variant: 'outlined',
	color: 'secondary',
	size: 'medium',
	fullWidth: true,
	style: {
		height: '50px'
	}
}

// Returns true if pwd has 8+ characters with at least one number and one special character
function goodPassword (pwd: string) {
	return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(pwd)
}

const dangerTheme = createMuiTheme({
	palette: {
		primary: red
	}
})

interface SettingsPageProps {
	setUserNone: ActionCreator<ReduxAction>
}

const SettingsPage: React.FC<SettingsPageProps> = ({ setUserNone }) => {
	const [newPwd, setNewPwd] = useState<string>('')
	const [showPwdError, setShowPwdError] = useState<boolean>(false)

	const history = useHistory()
	// Remove account feature
	const [confirmationDialogOpen, setConfirmationDialogOpen] = useState<boolean>(false)
	const removeAccount = () => {
		removeAccountRequest().then(() => {
			setUserNone()
			history.push('/') // redirect to home page
		}).catch((err: number) => {
			alert(`Erro: algo aconteceu e o status (${err}) foi recebido.`)
		})
	}

	const changePassword = () => {
		const old = document.querySelector('#old_pwd').value
		if (old === newPwd) alert('Senhas nova e antiga não podem ser as mesmas')
		else if (!goodPassword(newPwd)) alert('Senha inválida')
		else {
			changePasswordRequest(old, newPwd).then(() => alert('Senha alterada com sucesso!')).catch(statusCode => {
				if (statusCode === 400) {
					alert(`Erro: algo aconteceu e o status (${statusCode}) foi recebido.`)
				} else if (statusCode === 401) {
					alert('Erro: você não está autenticado')
				} else if (statusCode === 403) {
					alert('Erro: senha antiga incorreta.')
				}
			})
		}
	}

	const theme = useTheme()
	const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))

	const pwdOk = goodPassword(newPwd) || !showPwdError
	return <div className='main'>
		<main>
			<Navbar/>
			<div style={{ height: '94px' }}></div>
			<Container>
				<Grid container alignItems='center' style={{ height: '50px' }}>
					<BreadCrumb links={[{
						url: '/',
						text: 'Home'
					}, {
						url: '/Perfil',
						text: 'Perfil'
					}]}/>
				</Grid>

				<br/><br/>
				<Typography variant='h5'> <b>Alterar Senha</b> </Typography>
				<Divider/>
				<br/>
				<Typography> A senha deve conter no mínimo 8 caracteres, com pelo menos um símbolo e um número. </Typography>
				<br/>
				<br/>
				<Grid container direction={isDesktop ? 'row' : 'column'} spacing={2}>
					<Grid item>
						<InputPassword
							label="Senha Antiga"
							id="old_pwd"
							{...textFieldCommonProps}
						/>
					</Grid>
					<Grid item>
						<InputPassword
							label="Senha Nova"
							id="new_pwd"
							value={newPwd}
							error={!pwdOk}
							helperText={!pwdOk ? 'Senha não satisfaz os requisitos' : ''}
							onBlur={() => setShowPwdError(true)}
							onChange={(evt: any) => setNewPwd(evt.target.value)}
							{...textFieldCommonProps}
						/>
					</Grid>
					<Grid item>
						{/* Gap to be occupied by helperText of the button above */}
					</Grid>

					<Grid item>
						<Button
							color="secondary"
							size="medium"
							variant='outlined'
							style={{ height: '55px' }}
							fullWidth={!isDesktop}
							onClick={changePassword}
						>
							Alterar
						</Button>
					</Grid>
				</Grid>
				<div style={{ height: '70px' }}></div>

				<Grid container direction='row-reverse' style={{ display: 'none' }}>
					<Grid item xs={!isDesktop ? 12 : 2}>
						<ThemeProvider theme={dangerTheme}>
							<Button
								color='primary'
								size="medium"
								variant='outlined'
								style={{ height: '55px' }}
								fullWidth={!isDesktop}
								onClick={() => setConfirmationDialogOpen(true)}
							>
								Deletar conta
							</Button>
						</ThemeProvider>
					</Grid>
				</Grid>
			</Container>
			<SimpleConfirmationDialog
				title="Sua conta será apagada!"
				body="Você tem certeza que deseja apagar sua conta?"
				cancelText="Cancelar"
				confirmText="Deletar"
				open={confirmationDialogOpen}
				cancelCallback={() => setConfirmationDialogOpen(false)}
				confirmCallback={removeAccount}
			/>
		</main>
	</div>
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ setUserNone }, dispatch)

export default connect(null, mapDispatchToProps)(SettingsPage)
