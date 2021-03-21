import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'

import { Dispatch, bindActionCreators, ActionCreator } from 'redux'

import Box from '@material-ui/core/Box'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import Container from '@material-ui/core/Container'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

import { ReduxAction } from 'types/redux'

import { setUser } from 'actions'
import { login } from 'API'
import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import './style.css'

interface LoginPageProps {
	setUser: ActionCreator<ReduxAction>
}

const LoginPage: React.FC<LoginPageProps> = ({ setUser }) => {
	const [nusp, setNusp] = useState('')
	const history = useHistory()
	const location = useLocation()

	const handleNUSPInputChange = (evt: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		const val = evt.target.value
		if (/^[0-9]*$/.test(val)) setNusp(val)
	}
	const handleLogin = () => {
		const pwd = document.querySelector<HTMLInputElement>('#senha').value
		const remember = document.querySelector<HTMLInputElement>('#remember').checked
		login(nusp, pwd, remember).then((user) => {
			// Success!! Redirects for home page
			setUser(user)

			// Redirect cases
			const { from } = location.state || { from: { pathname: '/' } } as any
			history.replace(from)
		}).catch((statusCode: number) => {
			if (statusCode === 400) {
				alert('Bad Request (400). Tente novamente mais tarde.')
			} else if (statusCode === 401) {
				alert('Número USP ou senha incorretos')
			} else {
				alert('Algo de errado aconteceu :(. Tente novamente mais tarde.')
			}
		})
	}
	return <>
		<div className='main'>
			<main>
				<Navbar/>
				<div style={{ height: '150px' }}></div>
				<Container style={{ backgroundColor: 'secondary' }}>
					<Grid container justify='center'>
						<Grid item md={6} xs={10}>
							<Paper variant='outlined'>
								<Box p={2}>
									<Grid container spacing={2} alignItems='stretch' direction='column'>
										<Grid item>
											<TextField
												fullWidth
												autoFocus
												color='secondary'
												label="Número USP"
												name="NUSP"
												size="small"
												type="text"
												variant="outlined"
												value={nusp}
												onChange={evt => handleNUSPInputChange(evt)}
											/>
										</Grid>
										<Grid item>
											<TextField
												fullWidth
												label="Senha"
												id="senha"
												color='secondary'
												name="senha"
												size="small"
												type="password"
												variant="outlined"
												onKeyPress={(evt) => (evt.key === 'Enter' ? handleLogin() : null)}
											/>
										</Grid>
										<Grid item style={{ marginTop: '-1rem', marginBottom: '-1rem' }}>
											<FormControlLabel
												control={<Checkbox id="remember" disableRipple size='small' color='secondary'/>}
												label={<Typography variant='caption'>Lembrar de mim por um mês</Typography>}
											/>
										</Grid>
										<Grid item>
											<Button
												fullWidth
												color='secondary'
												size="medium"
												variant="outlined"
												onClick={handleLogin}
											>
												Entrar
											</Button>
										</Grid>

									</Grid>
								</Box>
							</Paper>
							<Grid item>
								<Grid container justify='center'>
									<Grid item>
										<Breadcrumbs separator=' '>
											<Link variant='caption' color='secondary' href='/RedefinicaoSenha'>
											Esqueci a senha
											</Link>
											<Link variant='caption' color='secondary' href='/Cadastro'>
											Cadastrar
											</Link>
										</Breadcrumbs>
									</Grid>
								</Grid>
							</Grid>
						</Grid>

					</Grid>
				</Container>
			</main>
			<Footer text='Made with love by Preischadt and Turci'/>
		</div>

	</>
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ setUser }, dispatch)

export default connect(null, mapDispatchToProps)(LoginPage)
