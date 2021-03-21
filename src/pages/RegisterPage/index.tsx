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
import InfoIcon from '@material-ui/icons/InfoOutlined'
import { useTheme } from '@material-ui/styles'

import { ReduxAction } from 'types/redux'
import { User } from 'types/User'

import { setUser } from 'actions'
import { register, getRegistrationCaptcha } from 'API'
import BreadCrumb from 'components/Breadcrumb'
import Footer from 'components/Footer'
import InfoModal from 'components/InfoModal'
import Navbar from 'components/Navbar'
import PartialInput from 'components/PartialInput'
import InputPassword from 'components/PasswordInput'

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

interface RegisterPageProps {
	setUser: ActionCreator<ReduxAction>
}

const RegisterPage: React.FC<RegisterPageProps> = ({ setUser }) => {
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
	const [password, setPassword] = useState<string[]>(['', ''])
	const [captcha, setCaptcha] = useState<string>('')

	// is Modal Open
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

	// if you already can say that field is invalid. Activated on blur or when you send form
	const [showPwd0Error, setShowPwd0Error] = useState<boolean>(false)
	const [showPwd1Error, setShowPwd1Error] = useState<boolean>(false)
	const [showCaptchaError, setShowCaptchaError] = useState<boolean>(false)

	// is registration pending
	const [pending, setPending] = useState<boolean>(false)

	// callback function to when some form field is changed
	const handleChange = (value: string, id: string) => {
		if (id === 'pwd1') {
			setPassword([value, password[1]])
		} else if (id === 'pwd2') {
			setPassword([password[0], value])
		} else if (id === 'captcha') {
			setCaptcha(value.toLowerCase())
		}
	}

	// if fields are valid
	const pwdOk = goodPassword(password[0]) || !showPwd0Error
	const captchaOk = !showCaptchaError || /^[\w\d]{4}$/.test(captcha)

	const registerClick = () => {
		const acceptedTerms = document.querySelector('#accept').checked
		const authCode = ['0', '1', '2', '3'].reduce((prev, cur) => prev + '-' + document.querySelector(`#auth-code-${cur}`).value, '').substr(1)

		if (!/^[\w\d]{4}-[\w\d]{4}-[\w\d]{4}-[\w\d]{4}/.test(authCode)) {
			alert('O código de autenticidade está incompleto')
		} else if (!goodPassword(password[0])) {
			alert('A senha está inválida')
		} else if (!/^[\w\d]{4}$/.test(captcha)) {
			alert('O captcha deve ter exatamente 4 caracteres com letras ou números')
		} else if (password[0] !== password[1]) {
			alert('As senhas diferem')
		} else if (!acceptedTerms) {
			alert('Você deve aceitar os termos e condições')
		} else {
			setPending(true) // registrating is pending
			register(authCode, password[0], captcha).then((user: User) => {
				setUser(user)
				alert('Cadastro realizado com sucesso')
				setPending(false)
				history.push('/')
			}).catch(err => {
				if (err === 400) {
					alert('Código de autenticidade ou captcha inválidos. Lembre-se que o código de autenticidade usado deve ter sido gerado na última hora!')
				} else if (err === 403) {
					alert('Usuário já registrado')
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
		setShowPwd0Error(true)
		setShowPwd1Error(true)
	}

	// Style stuff
	const theme = useTheme()
	const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))

	// bottom is the row with "Terms and conditions" checkbox and the register button
	const bottomDesktop = <Grid item container justify='space-between'>
		<FormGroup row>
			<FormControlLabel
				control={<Checkbox id="accept" disableRipple color='secondary'/>}
				label={<>Aceito os <Link color='secondary' href='/Termos' target='_blank'> termos e condições </Link></>}
			/>
		</FormGroup>
		<Button
			color="secondary"
			size="medium"
			variant="outlined"
			disabled={pending}
			onClick={registerClick}
		>
			{pending ? <CircularProgress color='secondary' size='1rem'/> : 'Cadastrar'}
		</Button>
	</Grid>
	const bottomMobile = <Grid item container direction='column' spacing={5}>
		<Grid item>
			<FormGroup row>
				<FormControlLabel
					control={<Checkbox id="accept" disableRipple color='secondary'/>}
					label={<>Aceito os <Link color='secondary' href='/Termos' target='_blank'> termos e condições </Link></>}
				/>
			</FormGroup>
		</Grid>
		<Grid item>
			<Button
				fullWidth
				color="secondary"
				size="medium"
				variant="outlined"
				onClick={registerClick}
			>
				{pending ? <CircularProgress color='secondary' size='1rem'/> : 'Cadastrar'}
			</Button>
		</Grid>
	</Grid>

	return <>
		<div className='main'>
			<main>
				<Navbar/>
				<div style={{ height: '94px' }}></div>
				<Container style={{ width: '100% !important' }}>
					<BreadCrumb links={[{ text: 'Home', url: '/' }, { text: 'Cadastrar', url: '/Cadastro' }]}/>
					<div style={{ height: `${isDesktop ? '50' : '30'}px` }}></div> {/* Separa 50 verticalmente, ou 30 verticalmente se for mobile */}

					<Typography> Para se registrar, gere um código de autenticidade do seu resumo escolar. <InfoIcon fontSize='inherit' style={{ cursor: 'pointer' }} onClick={() => setIsModalOpen(true)} /> </Typography>
					<br/>
					<Box m={2} style={{ marginTop: '2rem', marginBottom: '2rem' }}>
						<Grid container justify={isDesktop ? 'center' : 'space-around'} alignItems='center' wrap='wrap' >
							{inputs.map(val => <React.Fragment key={val}><PartialInput id={val} initialValue={initialValues[val]} handlePaste={handlePaste}/> {val < 3 ? '-' : <span>&nbsp;</span>}</React.Fragment>)}
						</Grid>
					</Box>

					{isDesktop ? <> <Divider/> <br/><br/> </> : <br/> }
					<Grid container spacing={6} direction={isDesktop ? 'row' : 'column'}>
						<Grid item container xs={12} sm={6} direction='column' justify='center'>
							<Grid item>
								<Typography> A senha deve conter no mínimo 8 caracteres, com pelo menos um símbolo e um número. </Typography>
								<br/>
								<br/>
							</Grid>
							<Grid item>
								<InputPassword
									label="Senha"
									id="pwd1"
									type="password"
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
									type="password"
									value={password[1]}
									error={password[0] !== password[1] && showPwd1Error}
									helperText={password[0] !== password[1] && showPwd1Error ? 'Senhas diferem' : ''}
									onBlur={() => setShowPwd1Error(true)}
									onChange={(evt: any) => handleChange(evt.target.value, 'pwd2')}
									{...textFieldCommonProps}
								/>
							</Grid>
						</Grid>
						<Grid item container xs={12} sm={6} justify='center' alignItems='center'>
							<div style={{ maxWidth: '400px', width: '100%' }}> <img src={captchaImg} style={{ width: '100%' }}/> </div>
							<div style={{ width: '100%', height: '1rem' }}/>
							<TextField
								label="Captcha"
								id="captcha"
								type="text"
								error={!captchaOk}
								helperText={!captchaOk ? 'Somente 4 caracteres com letras ou números' : ''}
								value={captcha}
								onBlur={() => setShowCaptchaError(true)}
								onChange={(evt: any) => handleChange(evt.target.value, 'captcha')}
								style={{ maxWidth: '400px' }}
								{...textFieldCommonProps}
							/>
						</Grid>
						{isDesktop ? bottomDesktop : bottomMobile}

					</Grid>
				</Container>
				<InfoModal open={isModalOpen} handleClose={() => setIsModalOpen(false)}/>
			</main>
			<Footer text='Made with love by Preischadt and Turci'/>
		</div>
	</>
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ setUser }, dispatch)

export default connect(null, mapDispatchToProps)(RegisterPage)
