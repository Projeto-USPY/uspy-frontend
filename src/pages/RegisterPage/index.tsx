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
import InputBase from '@material-ui/core/InputBase'
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import ImageBlock from 'components/ImageBlock'
import { makeStyles } from '@material-ui/styles'

// Images
import CheckboxesImage from 'checkboxes.png'
import AuthenticityCodeImage from 'authenticityCode.png'

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
