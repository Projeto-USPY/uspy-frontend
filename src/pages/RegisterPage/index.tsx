import React, { useEffect, useState } from 'react'
import Navbar from 'components/Navbar'
import Container from '@material-ui/core/Container'
import Footer from 'components/Footer'
import './style.css'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Grid from '@material-ui/core/Grid'
import InputBase from '@material-ui/core/InputBase'
import Box from '@material-ui/core/Box'
import InputPassword from 'components/PasswordInput'
import Divider from '@material-ui/core/Divider'
import BreadCrumb from 'components/Breadcrumb'
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/InfoOutlined'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import { makeStyles, useTheme } from '@material-ui/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { register, getRegistrationCaptcha } from 'API'
import ImageBlock from 'components/ImageBlock'
import CloseIcon from '@material-ui/icons/CloseOutlined'

// Redux
import { connect } from 'react-redux'
import { ActionCreator, Dispatch, bindActionCreators } from 'redux'
import { setUser } from 'actions'

/* Types */
import { User } from 'types/User'
import { ReduxAction } from 'types/redux'

/* Modal Stuff */
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'

// Images
import CheckboxesImage from 'checkboxes.png'
import AuthenticityCodeImage from 'authenticityCode.png'
import { useHistory } from 'react-router'

const useStyles = makeStyles((theme) => ({
	input: {
		fontFamily: 'Courier',
		[theme.breakpoints.up('sm')]: {
			fontSize: '18pt',
			margin: theme.spacing(1)
		},
		[theme.breakpoints.down('sm')]: {
			fontSize: '12pt',
			margin: '2px'
		}

	}
}))

interface PartialInputProps {
	id: number
	initialValue?: string
	handlePaste: Function
}
const PartialInput: React.FC<PartialInputProps> = ({ id, initialValue = '', handlePaste }) => {
	const classes = useStyles()
	const [focused, setFocused] = useState(false)
	const [value, setValue] = useState(initialValue)

	useEffect(() => {
		setValue(initialValue)
	}, [initialValue])
	const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		let str = evt.target.value
		str = str.replace(/-/g, '')
		if (/^\w*$/.test(str)) {
			if (evt.nativeEvent.inputType === 'insertFromPaste') { // allow to paste input
				handlePaste(id, str)
			} else {
				if (str.length <= 4) setValue(str.toUpperCase())
				if (str.length === 4) {
					const next = document.querySelector(`#auth-code-${id + 1}`)
					if (next) {
						next.focus()
					}
				}
			}
		}
	}

	const inputProps = {
		size: '4',
		style: {
			backgroundColor: '#F7F7F7',
			borderRadius: '2px 2px',
			boxShadow: focused ? 'inset 0 0 2px blue' : 'inset 0 0 2px #000000',
			padding: '5pt'
		}
	}
	return <InputBase
		type='text'
		className={classes.input}
		onFocus={(evt: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			evt.target.select()
			setFocused(true)
		}}
		onBlur={() => setFocused(false)}
		inputProps= {inputProps}
		value={value}
		id={`auth-code-${id}`}
		onChange={evt => handleChange(evt)}

	/>
}

const textFieldCommonProps = {
	variant: 'outlined',
	color: 'secondary',
	size: 'small',
	fullWidth: true
}

interface InfoModalProps {
	open: boolean
	handleClose: ()=>void
}

const InfoModal: React.FC<InfoModalProps> = ({ open, handleClose }) => {
	// Style stuff
	const theme = useTheme()
	const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))

	return <Modal
		aria-labelledby="transition-modal-title"
		aria-describedby="transition-modal-description"
		open={open}
		onClose={handleClose}
		closeAfterTransition
		BackdropComponent={Backdrop}
		style={{
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			margin: 0,
			borderWidth: '0px'
		}}
		BackdropProps={{
			timeout: 500
		}}>
		<Fade in={open}>
			<div style={{
				width: isDesktop ? '60%' : '90%',
				maxHeight: '90vh',
				background: 'white',
				overflow: 'auto',
				position: 'relative'
			}}>
				<Grid container justify='flex-end' style={{ position: 'fixed', top: '0px', left: '0px' }}>
					<Grid item>
						<IconButton onClick={handleClose} size='medium' aria-label="close" disableRipple>
							<CloseIcon fontSize='large' style={{ color: isDesktop ? 'white' : 'black', padding: '2rem' }} />
						</IconButton>
					</Grid>
				</Grid>
				<Box m={3}>

					<Typography variant='h4'> Como obter o código de autenticidade? </Typography>
					<p><span style={{ fontSize: '1.2rem' }}>1.</span> Entre em <Link color='secondary' href='https://uspdigital.usp.br/jupiterweb/historicoEscolar' target='_blank'> JupiterWeb </Link>, escolha seu menu e curso, e marque as caixas conforme a imagem: </p>
					<ImageBlock imageSource={CheckboxesImage} size='small' title='Marcação das caixas' caption='Marque a caixa "Com Autenticação"'/>
					<p> <span style={{ fontSize: '1.2rem' }}>2.</span> Clique em {'"Buscar"'}, e o seu resumo escolar será gerado com um código de autenticidade no topo do documento, como na imagem: </p>
					<ImageBlock imageSource={AuthenticityCodeImage} size='medium' title='código de autenticidade' caption='Código de 16 dígitos gerado'/>

					<p><span style={{ fontSize: '1.2rem' }}>3.</span> É este código de 16 dígitos que será usado para verificar que você está atrelado à USP e pode se cadastrar.</p>

					<Divider/>
					<p> <strong> O que fazemos com o seu resumo escolar? </strong><br/>Seu resumo escolar é usado para extrair seus dados e informações sobre: disciplinas que cursou, médias que obteve e status de aprovação. Antes de irem para o banco de dados, eles são anonimizados e criptografados.
						Nós garantimos total transparência, e você pode ler mais sobre isso no nosso documento de <Link color='secondary' href='/Termos' target='_blank'> termos e condições</Link>. </p>
					<p> O <span className="uspy">USPY</span> funciona graças à colaboração dos usuários em oferecer seus dados para alimentar as estatísticas de aprovações, médias e reviews de disciplinas. </p>

					<Button
						fullWidth
						color="primary"
						size="medium"
						variant='outlined'
						onClick={handleClose}
					>
					Ok
					</Button>
				</Box>
			</div>
		</Fade>
	</Modal>
}

// Returns true if pwd has 8+ characters with at least one number and one special character
function goodPassword (pwd: string) {
	return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(pwd)
}

interface RegisterPageProps {
	setUser: ActionCreator<ReduxAction>
}

const RegisterPage: React.FC<RegisterPageProps> = () => {
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
			register(authCode, password[0], captcha).then((user: User) => {
				setUser(user)
				alert('Cadastro realizado com sucesso')
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
			onClick={registerClick}
		>
			Cadastrar
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
				Cadastrar
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

					<Typography> Para registrar, copie o código de autenticidade do seu resumo escolar mais atual no campo abaixo. <InfoIcon fontSize='inherit' style={{ cursor: 'pointer' }} onClick={() => setIsModalOpen(true)} /> </Typography>
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
