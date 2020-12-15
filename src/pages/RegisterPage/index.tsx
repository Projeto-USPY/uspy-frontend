import React, { useEffect, useState } from 'react'
import Navbar from 'components/Navbar'
import Container from '@material-ui/core/Container'
import Footer from 'components/Footer'
import './style.css'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme, makeStyles } from '@material-ui/core/styles'
import CheckboxesImage from 'checkboxes.png'
import AuthenticityCodeImage from 'authenticityCode.png'
import InputBase from '@material-ui/core/InputBase'
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'

interface ImageBlockProps {
	imageSource: string
	title: string
	size: 'small' | 'medium' | 'large'
	caption?: string
	center?: boolean
}
const ImageBlock: React.FC<ImageBlockProps> = ({ imageSource, title, size, caption, center = false }) => {
	const fullWidth = {
		width: '100%'
	}

	const theme = useTheme()
	const isMD = useMediaQuery(theme.breakpoints.up('md'))

	// number of cols for each size
	let colsXS = 10
	let colsMD = 10
	let colsLG = 10
	if (size === 'small') {
		colsXS = 12
		colsMD = 8
		colsLG = 4
	} else if (size === 'medium') {
		colsXS = 12
		colsMD = 10
		colsLG = 8
	} else {
		colsXS = 12
		colsMD = 10
		colsLG = 10
	}

	const margin = {
		marginLeft: isMD ? '0 1rem' : '0',
		marginRight: isMD ? '0 1rem' : '0',
		marginTop: '2rem',
		marginBottom: '2rem'
	}

	return <Grid style={margin} container justify={center ? 'center' : 'flex-start'}>
		<Grid item xs={colsXS} md={colsMD} lg={colsLG}>
			<div className='figure' style={fullWidth}>
				<div><img src={imageSource} alt={title} style={fullWidth}/></div>
				<figcaption> <Typography variant='caption'> {caption} </Typography></figcaption>
			</div>
		</Grid>
	</Grid>
}
const useStyles = makeStyles((theme) => ({
	input: {
		fontFamily: 'Courier',
		fontSize: '18pt',
		margin: theme.spacing(1)
	}
}))

interface PartialInputProps {
	id: number
	initialValue?: string
	handlePaste: Function
}

const PartialInput: React.FC<PartialInputProps> = ({ id, initialValue = '', handlePaste }) => {
	const classes = useStyles()
	console.log(initialValue)
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
const RegisterPage = () => {
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
	return <>
		<div className='main'>
			<main>
				<Navbar/>
				<div style={{ height: '150px' }}></div>
				<Container>
					<Typography> Para registrar, use o código de autenticidade do seu resumo escolar mais atual. </Typography>
					<br/>
					<Box m={2} style={{ marginTop: '5rem', marginBottom: '5rem' }}>
						<Grid container justify='center' alignItems='center' wrap='wrap'>

							<Grid item container xs={8} justify='center' alignItems='center' wrap='wrap' >
								{inputs.map(val => <React.Fragment key={val}><PartialInput id={val} initialValue={initialValues[val]} handlePaste={handlePaste}/> {val < 3 ? '-' : <span>&nbsp;</span>}</React.Fragment>)}
							</Grid>
						</Grid>
					</Box>
					<Grid container justify='flex-end'>
						<Button variant='outlined' size='small' color='secondary'> Prosseguir </Button>
					</Grid>
					<br/>
					<br/>
					<Divider/>
					<Card>
						<CardHeader title='Como obter o código de autenticidade?' />
						<CardContent>
							<p>Entre no <Link color='secondary' href='https://uspdigital.usp.br/jupiterweb/' target='_blank'> JupiterWeb </Link> com sua conta, e clique em {'"Histórico Escolar"'} no menu. </p>
							<p> Escolhe seu menu e curso, e marque as caixas conforme a imagem: </p>
							<ImageBlock imageSource={CheckboxesImage} size='small' title='Marcação das caixas' caption='Marque a caixa "Com Autenticação"'/>
							<p> Clique em {'"Buscar"'}, e o seu resumo escolar será gerado com um código de autenticidade no topo do documento, como na imagem: </p>
							<ImageBlock imageSource={AuthenticityCodeImage} size='medium' title='código de autenticidade' caption='Código de 16 dígitos gerado'/>

							É este código de 16 dígitos que será usado para verificar que você está atrelado à USP e pode se cadastrar.
						</CardContent>

					</Card>

				</Container>
			</main>
			<Footer text='Made with love by Preischadt and Turci'/>
		</div>
	</>
}

export default RegisterPage
