import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'

import { Dispatch, bindActionCreators, ActionCreator } from 'redux'

import Box from '@material-ui/core/Box'
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
import api from 'API'
import Navbar from 'components/Navbar'
import PasswordRedefinitionModal from 'components/PasswordRedefinitionModal'
import SendActivationEmailModal from 'components/SendActivationEmailModal'
import { useMySnackbar, useErrorDialog } from 'hooks'

import './style.css'

import { buildURI as buildRegisterPageURI } from 'pages/RegisterPage'

interface LoginPageProps {
	setUser: ActionCreator<ReduxAction>
}

export function buildURI(): string {
	return '/login'
}

const LoginPage: React.FC<LoginPageProps> = ({ setUser }) => {
	const [nusp, setNusp] = useState('')
	const [passwordRedefinitionModalOpen, setPasswordRedefinitionModalOpen] =
		useState<boolean>(false)
	const [sendActivationEmailModalOpen, setSendActivationEmailModalOpen] =
		useState<boolean>(false)
	const [showSendActivationEmailButton, setShowSendActivationEmailButton] =
		useState<boolean>(false)
	const history = useHistory()
	const notify = useMySnackbar()
	const uspyAlert = useErrorDialog()
	const location = useLocation()

	const handleNUSPInputChange = (
		evt: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
	) => {
		const val = evt.target.value
		if (/^[0-9]*$/.test(val)) setNusp(val)
	}
	const handleLogin = () => {
		const pwd = document.querySelector<HTMLInputElement>('#senha').value
		const remember =
			document.querySelector<HTMLInputElement>('#remember').checked
		api.login(nusp, pwd, remember)
			.then((user) => {
				// Success!! Redirects for home page
				setUser(user)
				notify(`Bem vindo, ${user.name}!`, 'success')

				// Redirect cases
				const { from } =
					location.state || ({ from: { pathname: '/' } } as any)
				history.replace(from)
			})
			.catch((err) => {
				if (err.code === 'bad_request' || err.code === 'unauthorized') {
					uspyAlert('Número USP ou senha incorretos')
				} else if (err.code === 'unverified_user') {
					uspyAlert(
						'Sua conta ainda não foi verificada. Cheque seu inbox ou clique em "Reenviar email de ativação" se você não recebeu nenhuma mensagem',
					)
					setShowSendActivationEmailButton(true)
				} else {
					uspyAlert(
						`Algo deu errado (${err.message}). Tente novamente mais tarde.`,
					)
					console.error(err)
				}
			})
	}
	return (
		<>
			<div className="main">
				<main>
					<Navbar />
					<div style={{ height: '150px' }}></div>
					<Container style={{ backgroundColor: 'secondary' }}>
						<Grid container justify="center">
							<Grid item md={6} xs={10}>
								<Grid
									container
									justify="center"
									direction="column"
									spacing={1}
								>
									<Grid item>
										<Paper variant="outlined">
											<Box p={2}>
												<Grid
													container
													spacing={2}
													alignItems="stretch"
													direction="column"
												>
													<Grid item>
														<TextField
															fullWidth
															autoFocus
															color="secondary"
															label="Número USP"
															name="NUSP"
															size="small"
															type="text"
															variant="outlined"
															value={nusp}
															onChange={(evt) =>
																handleNUSPInputChange(
																	evt,
																)
															}
														/>
													</Grid>
													<Grid item>
														<TextField
															fullWidth
															label="Senha"
															id="senha"
															color="secondary"
															name="senha"
															size="small"
															type="password"
															variant="outlined"
															onKeyPress={(evt) =>
																evt.key ===
																'Enter'
																	? handleLogin()
																	: null
															}
														/>
													</Grid>
													<Grid
														item
														style={{
															marginTop: '-1rem',
															marginBottom:
																'-1rem',
														}}
													>
														<FormControlLabel
															control={
																<Checkbox
																	id="remember"
																	disableRipple
																	size="small"
																	color="secondary"
																/>
															}
															label={
																<Typography variant="caption">
																	Lembrar de
																	mim por um
																	mês
																</Typography>
															}
														/>
													</Grid>
													<Grid item>
														<Button
															fullWidth
															color="secondary"
															size="medium"
															variant="outlined"
															onClick={
																handleLogin
															}
														>
															Entrar
														</Button>
													</Grid>
												</Grid>
											</Box>
										</Paper>
									</Grid>
									<Grid
										item
										container
										spacing={1}
										justify="center"
										wrap="wrap"
									>
										<Grid item>
											<Link
												variant="caption"
												color="secondary"
												style={{ cursor: 'pointer' }}
												onClick={() =>
													setPasswordRedefinitionModalOpen(
														true,
													)
												}
											>
												Esqueci a senha
											</Link>
										</Grid>
										<Grid item>
											<Link
												variant="caption"
												color="secondary"
												href={buildRegisterPageURI()}
											>
												Cadastrar
											</Link>
										</Grid>
										{showSendActivationEmailButton ? (
											<Grid item>
												<Link
													variant="caption"
													color="secondary"
													style={{
														cursor: 'pointer',
													}}
													onClick={() =>
														setSendActivationEmailModalOpen(
															true,
														)
													}
												>
													Reenviar email de ativação
												</Link>
											</Grid>
										) : null}
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Container>
					<PasswordRedefinitionModal
						open={passwordRedefinitionModalOpen}
						handleClose={() =>
							setPasswordRedefinitionModalOpen(false)
						}
					/>
					<SendActivationEmailModal
						open={sendActivationEmailModalOpen}
						handleClose={() =>
							setSendActivationEmailModalOpen(false)
						}
					/>
				</main>
			</div>
		</>
	)
}

const mapDispatchToProps = (dispatch: Dispatch) =>
	bindActionCreators({ setUser }, dispatch)

export default connect(null, mapDispatchToProps)(LoginPage)
