import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import InfoIcon from '@material-ui/icons/InfoOutlined'
import { useTheme } from '@material-ui/styles'

import { getRegistrationCaptcha, resetPassword } from 'API'
import InfoModal from 'components/InfoModal'
import Navbar from 'components/Navbar'
import PartialInput from 'components/PartialInput'
import InputPassword from 'components/PasswordInput'
import { useMySnackbar } from 'hooks'

import './style.css'

const textFieldCommonProps = {
	variant: 'outlined',
	color: 'secondary',
	size: 'small',
	fullWidth: true
}

// Returns true if pwd has 8+ characters with at least one number and one special character
function goodPassword (pwd: string) {
	return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(pwd)
}

const PasswordResetPage: React.FC = () => {
	const notify = useMySnackbar()

	const [captchaImg, setCaptchaImg] = useState<string>('')
	useEffect(() => {
		getRegistrationCaptcha().then(captchaImg => {
			setCaptchaImg(captchaImg)
		})
	}, [])

	const history = useHistory()

	// Elements of the first input
	const inputs = [0, 1, 2, 3]
	const [initialValues, setInitialValues] = useState(['', '', '', ''])
	const handlePaste = (id: number, str: string) => {
		const values = initialValues.slice()
		for (let i = id; i < 4; ++i) values[i] = ''
		for (let i = 0; i < str.length; ++i) {
			if (id + Math.floor(i / 4) >= 4) break
			values[id + Math.floor(i / 4)] += str[i]
		}
		setInitialValues(values)
	}

	// text field values
	const [password, setPassword] = useState<string>('')
	const [captcha, setCaptcha] = useState<string>('')

	// is Modal Open
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

	// if you already can say that field is invalid. Activated on blur or when you send form
	const [showPwdError, setShowPwdError] = useState<boolean>(false)
	const [showCaptchaError, setShowCaptchaError] = useState<boolean>(false)

	// is password reset pending
	const [pending, setPending] = useState<boolean>(false)

	// callback function to when some form field is changed
	const handleChange = (value: string, id: string) => {
		if (id === 'pwd') {
			setPassword(value)
		} else if (id === 'captcha') {
			setCaptcha(value.toLowerCase())
		}
	}

	// if fields are valid
	const pwdOk = goodPassword(password) || !showPwdError
	const captchaOk = !showCaptchaError || /^[\w\d]{4}$/.test(captcha)

	const passwordResetClick = () => {
		const authCode = ['0', '1', '2', '3'].reduce((prev, cur) => prev + '-' + document.querySelector(`#auth-code-${cur}`).value, '').substr(1)

		if (!/^[\w\d]{4}-[\w\d]{4}-[\w\d]{4}-[\w\d]{4}/.test(authCode)) {
			alert('O código de autenticidade está incompleto')
		} else if (!goodPassword(password)) {
			alert('A senha está inválida')
		} else if (!/^[\w\d]{4}$/.test(captcha)) {
			alert('O captcha deve ter exatamente 4 caracteres com letras ou números')
		} else {
			setPending(true) // password reset is pending

			// TO CHANGE
			resetPassword(authCode, password, captcha).then(() => {
				notify('Senha redefinida com sucesso!', 'success')
				setPending(false)
				history.push('/')
			}).catch(err => {
				if (err === 400) {
					alert('Código de autenticidade ou captcha inválidos. Lembre-se que o código de autenticidade usado deve ter sido gerado na última hora!')
				} else {
					alert(`Esta página retornou com status (${err})`)
				}
				setCaptcha('')
				setShowCaptchaError(false)
				getRegistrationCaptcha().then(captchaImg => {
					setCaptchaImg(captchaImg)
				})
				setPending(false)
			})
		}
		setShowPwdError(true)
	}

	// Style stuff
	const theme = useTheme()
	const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))

	return <>
		<div className='main'>
			<main>
				<Navbar/>
				<div style={{ height: '94px' }}></div>
				<Container style={{ width: '100% !important' }}>

					<Grid container justify='center'>

						<Grid item>
							<h2>Esqueci minha senha</h2>
							<Paper variant='outlined'>
								<Box m={2}>
									<Grid container direction='column' alignItems='stretch' wrap={'nowrap'} spacing={2} style={{ maxWidth: '500px' }}>

										<Grid item>
											<Typography> Para redefinir sua senha, gere novamente um código de autenticidade do seu resumo escolar. <InfoIcon fontSize='inherit' style={{ cursor: 'pointer' }} onClick={() => setIsModalOpen(true)} /> </Typography>
										</Grid>
										<Grid item>
											<Box m={2} style={{ marginTop: '2rem', marginBottom: '2rem' }}>
												<Grid container justify={isDesktop ? 'center' : 'space-around'} alignItems='center' wrap='wrap' >
													{inputs.map(val => <React.Fragment key={val}><PartialInput id={val} initialValue={initialValues[val]} handlePaste={handlePaste}/> {val < 3 ? '-' : <span>&nbsp;</span>}</React.Fragment>)}
												</Grid>
											</Box>
										</Grid>
										<Grid item>
											<Typography> A senha deve conter no mínimo 8 caracteres, com pelo menos um símbolo e um número. </Typography>
										</Grid>
										<Grid item>
											<InputPassword
												label="Nova Senha"
												id="pwd"
												type="password"
												value={password}
												error={!pwdOk}
												helperText={!pwdOk ? 'Senha não satisfaz os requisitos' : ''}
												onBlur={() => setShowPwdError(true)}
												onChange={(evt: any) => handleChange(evt.target.value, 'pwd')}
												{...textFieldCommonProps}
											/>
											<div style={{ width: '100%', height: '1rem' }}/>
										</Grid>
										<Grid item>
											<img src={captchaImg} style={{ width: '100%' }}/>
										</Grid>
										<Grid item>
											<TextField
												label="Captcha"
												id="captcha"
												type="text"
												error={!captchaOk}
												helperText={!captchaOk ? 'Somente 4 caracteres com letras ou números' : ''}
												value={captcha}
												onBlur={() => setShowCaptchaError(true)}
												onChange={(evt: any) => handleChange(evt.target.value, 'captcha')}
												{...textFieldCommonProps}
											/>
										</Grid>

										<Grid item container justify='flex-end'>
											<Grid item>
												<Button
													fullWidth
													color="secondary"
													size="medium"
													variant="outlined"
													onClick={passwordResetClick}
												>
													{pending ? <CircularProgress color='secondary' size='1rem'/> : 'Confirmar'}
												</Button>
											</Grid>
										</Grid>

									</Grid>
								</Box>
							</Paper>
						</Grid>

					</Grid>

				</Container>
				<InfoModal open={isModalOpen} handleClose={() => setIsModalOpen(false)}/>
			</main>
		</div>
	</>
}

export default PasswordResetPage
