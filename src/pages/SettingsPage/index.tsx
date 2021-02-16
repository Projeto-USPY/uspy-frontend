import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Navbar from 'components/Navbar'
import BreadCrumb from 'components/Breadcrumb'
import InputPassword from 'components/PasswordInput'
import SimpleConfirmationDialog from 'components/SimpleConfirmationDialog'
import red from '@material-ui/core/colors/red'
import { createMuiTheme } from '@material-ui/core/styles'

import { useTheme, ThemeProvider } from '@material-ui/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

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

const SettingsPage = () => {
	const [newPwd, setNewPwd] = useState<string>('')
	const [showPwdError, setShowPwdError] = useState<boolean>(false)

	// Remove account feature
	const [confirmationDialogOpen, setConfirmationDialogOpen] = useState<boolean>(false)
	const removeAccount = () => {
		alert('TODO: remove account')
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
						>
							Alterar
						</Button>
					</Grid>
				</Grid>
				<div style={{ height: '70px' }}></div>

				<Grid container direction='row-reverse'>
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
				<br/>
				<br/>
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

export default SettingsPage
