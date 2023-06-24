import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'

import { ActionCreator, Dispatch, bindActionCreators } from 'redux'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import CircularProgress from '@material-ui/core/CircularProgress'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import InfoIcon from '@material-ui/icons/InfoOutlined'
import { useTheme } from '@material-ui/styles'

import { ReduxAction } from 'types/redux'
import { User } from 'types/User'

import { setUser } from 'actions'
import api from 'API'
import BreadCrumb from 'components/Breadcrumb'
import InfoModal from 'components/InfoModal'
import Navbar from 'components/Navbar'
import PartialInput from 'components/PartialInput'
import InputPassword from 'components/PasswordInput'
import { useErrorDialog, useMySnackbar } from 'hooks'
import { buildURI as buildHomePageURI } from 'pages/HomePage'
import { buildURI as buildLoginPageURI } from 'pages/LoginPage'
import { buildURI as buildUseTermsPageURI } from 'pages/UseTermsPage'
import { validateEmail, validatePassword } from 'utils'

import './style.css'
import { Auth } from 'types/Auth'


const textFieldCommonProps = {
	variant: 'outlined',
	color: 'secondary',
	size: 'small',
	fullWidth: true
}

interface RegisterPageProps {
	setUser: ActionCreator<ReduxAction>
}

export function buildURI (): string {
	return '/cadastro'
}

const RegisterPage: React.FC<RegisterPageProps> = ({ setUser }) => {
	const notify = useMySnackbar()
	const uspyAlert = useErrorDialog()

	const history = useHistory()

	// Elements of the first input
	const inputs = [0, 1, 2, 3]
	const [authCodeValues, setAuthCodeValues] = useState(['', '', '', ''])
	const handleAuthCodePaste = (id: number, str: string) => {
		const values = authCodeValues.slice()
		for (let i = id; i < 4; ++i) values[i] = ''
		for (let i = 0; i < str.length; ++i) {
			if (id + Math.floor(i / 4) >= 4) break
			values[id + Math.floor(i / 4)] += str[i]
		}
		setAuthCodeValues(values)
	}

	const handleAuthCodeChange = (id: number, str: string) => {
		const values = authCodeValues.slice()
		values[id] = str
		setAuthCodeValues(values)
	}

	// text field values
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string[]>(['', ''])

	// is Modal Open
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

	// if you already can say that field is invalid. Activated on blur or when you send form
	const [showPwd0Error, setShowPwd0Error] = useState<boolean>(false)
	const [showPwd1Error, setShowPwd1Error] = useState<boolean>(false)
	const [showEmailError, setShowEmailError] = useState<boolean>(false)

	// is registration pending
	const [pendingSignup, setPendingSignup] = useState<boolean>(false)

	// is validation pending
	const [pendingValidation, setPendingValidation] = useState<boolean>(false)

	// if auth code is valid
	const [authOk, setAuthOk] = useState<boolean>(false)

	const [auth, setAuth] = useState<Auth | null>(null)

	const validateClick = () => {
		const authCode = authCodeValues.reduce((prev, cur) => prev + '-' + cur, '').substring(1)

		if (!/^[\w\d]{4}-[\w\d]{4}-[\w\d]{4}-[\w\d]{4}/.test(authCode)) {
			uspyAlert('O código de autenticidade está incompleto')
		} else {
			setPendingValidation(true) // validation is pending

			api.sendAuthCode(authCode).then((auth: Auth) => {
				setAuthOk(true) // auth code is valid
				setAuth(auth)
				setPendingValidation(false) // validation is not pending anymore
			}).catch(err => {
				uspyAlert(`Algo deu errado (${err.message}). Tente novamente mais tarde`, 'Certifique-se de esse código é válido e não está expirado')
				setPendingValidation(false) // validation is not pending anymore
			})
		}
	}

	// callback function to when some form field is changed
	const handleChange = (value: string, id: string) => {
		if (id === 'pwd1') {
			setPassword([value, password[1]])
		} else if (id === 'pwd2') {
			setPassword([password[0], value])
		} else if (id === 'email') {
			setEmail(value)
		}
	}

	// if fields are valid
	const pwdOk = validatePassword(password[0]) || !showPwd0Error
	const emailOk = !showEmailError || validateEmail(email)

	const registerClick = () => {
		const acceptedTerms = document.querySelector('#accept').checked

		if (!validatePassword(password[0])) {
			uspyAlert('A senha está inválida')
		} else if (password[0] !== password[1]) {
			uspyAlert('As senhas diferem')
		} else if (!acceptedTerms) {
			uspyAlert('Você deve aceitar os termos e condições')
		} else if(!auth) {
			uspyAlert('Você deve validar seu código de autenticidade antes de realizar o cadastro')
		} else {
			setPendingSignup(true) // registrating is pending
			api.register(auth, password[0], email).then((user: User) => {
				notify('Sucesso! Agora, procure por um email para verificar sua conta!', 'success')
				setPendingSignup(false)
				history.push(buildLoginPageURI())
			}).catch(err => {
				if (err.code === 'bad_request') {
					uspyAlert('Email, código de autenticidade ou captcha inválidos. Lembre-se que o código de autenticidade usado deve ter sido gerado na última hora!')
				} else if (err.code === 'forbidden') {
					uspyAlert('Usuário já registrado')
				} else {
					uspyAlert(`Algo deu errado (${err.message}). Tente novamente mais tarde`, 'Falha no cadastro')
				}
				setPendingSignup(false)
			})
		}
		setShowPwd0Error(true)
		setShowPwd1Error(true)
		setShowEmailError(true)
	}

	// Style stuff
	const theme = useTheme()
	const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))

	// bottom is the row with "Terms and conditions" checkbox and the register button
	const bottomDesktop = <Grid item container justify='center'>
		<FormGroup row>
			<FormControlLabel
				control={<Checkbox id="accept" disableRipple color='secondary'/>}
				label={<>Aceito os <Link color='secondary' href={buildUseTermsPageURI()} target='_blank'> termos e condições </Link></>}
			/>
		</FormGroup>
		<Button
			color="secondary"
			size="medium"
			id="submit"
			variant="outlined"
			disabled={pendingSignup}
			onClick={registerClick}
		>
			{pendingSignup ? <CircularProgress color='secondary' size='1rem'/> : 'Cadastrar'}
		</Button>
	</Grid>

	const bottomMobile = <Grid item container direction='column' spacing={2}>
		<Grid item>
			<FormGroup row>
				<FormControlLabel
					control={<Checkbox id="accept" disableRipple color='secondary'/>}
					label={<>Aceito os <Link color='secondary' href={buildUseTermsPageURI()} target='_blank'> termos e condições </Link></>}
				/>
			</FormGroup>
		</Grid>
		<Grid item>
			<Button
				fullWidth
				color="secondary"
				size="medium"
				id="submit"
				variant="outlined"
				onClick={registerClick}
			>
				{pendingSignup ? <CircularProgress color='secondary' size='1rem'/> : 'Cadastrar'}
			</Button>
		</Grid>
	</Grid>

	return <>
		<div className='main'>
			<main>
				<Navbar/>
				<div style={{ height: '94px' }}></div>
				<Container style={{ width: '100% !important' }}>
					<BreadCrumb links={[{ text: 'Home', url: buildHomePageURI() }, { text: 'Cadastrar', url: buildURI() }]}/>
					<div style={{ height: `${isDesktop ? '50' : '30'}px` }}></div> {/* Separa 50 verticalmente, ou 30 verticalmente se for mobile */}

					<Typography> Para se registrar, gere um código de autenticidade do seu resumo escolar. <InfoIcon fontSize='inherit' style={{ cursor: 'pointer' }} onClick={() => setIsModalOpen(true)} /> </Typography>
					<br/>
					<Box my={2}>

						<Grid container direction='row' justify='center' alignItems='center' spacing={2}>
							<Grid item justify={isDesktop ? 'center' : 'space-around'} alignItems='center' wrap='wrap' >
								{inputs.map(val => <React.Fragment key={val}><PartialInput disabled={authOk || pendingValidation} id={val} value={authCodeValues[val]} handlePaste={handleAuthCodePaste} handleChange={handleAuthCodeChange}/> {val < 3 ? '-' : <span>&nbsp;</span>}</React.Fragment>)}
							</Grid>
							<Grid item>
								{authOk ? 
									<CheckCircleIcon style={{ color: theme.palette.primary.main }}/> :
								 pendingValidation ? <CircularProgress color='secondary' size='1rem'/> :
										<Button
											color="secondary"
											size="medium"
											id="submit"
											variant="outlined"
											disabled={pendingValidation}
											onClick={validateClick}
										>Validar</Button> }
							</Grid>
						</Grid>
					</Box>

					{isDesktop ? <> <Divider/> <br/><br/> </> : <br/> }
					<Grid container spacing={6} direction={isDesktop ? 'row' : 'column'} justify='center'>
						<Grid item container xs={12} sm={6} direction='column' justify='center'> {/* Email and password fields */}
							<Grid item>
								<Typography> Seu email USP (@usp.br). Vamos te enviar um email de ativação da conta. </Typography>
								<br/>
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
									onChange={evt => handleChange(evt.target.value, 'email')}
									{...textFieldCommonProps}
								/>
								<br/>
								<br/>
							</Grid>
							<Grid item>
								<Typography> A senha deve conter no mínimo 8 caracteres, com pelo menos um símbolo e um número. </Typography>
								<br/>
							</Grid>
							<Grid item>
								<InputPassword
									label="Senha"
									id="pwd1"
									value={password[0]}
									error={!pwdOk}
									helperText={!pwdOk ? 'Senha não satisfaz os requisitos' : ''}
									onBlur={() => setShowPwd0Error(true)}
									onChange={(evt: any) => handleChange(evt.target.value, 'pwd1')}
									{...textFieldCommonProps}
								/>
								<div style={{ width: '100%', height: '1rem' }}/>
							</Grid>
							<Grid item>
								<InputPassword
									label="Confirme a senha"
									id="pwd2"
									value={password[1]}
									error={password[0] !== password[1] && showPwd1Error}
									helperText={password[0] !== password[1] && showPwd1Error ? 'Senhas diferem' : ''}
									onBlur={() => setShowPwd1Error(true)}
									onChange={(evt: any) => handleChange(evt.target.value, 'pwd2')}
									{...textFieldCommonProps}
								/>
							</Grid>
						</Grid>
						{isDesktop ? bottomDesktop : bottomMobile}

					</Grid>
				</Container>
				<InfoModal open={isModalOpen} handleClose={() => setIsModalOpen(false)}/>
			</main>
		</div>
	</>
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ setUser }, dispatch)

export default connect(null, mapDispatchToProps)(RegisterPage)
