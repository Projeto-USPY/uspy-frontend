import React, { useState } from 'react'
import Navbar from 'components/Navbar'
import Container from '@material-ui/core/Container'
import Footer from 'components/Footer'
import './style.css'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Link from '@material-ui/core/Link'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

interface ForgotPasswordDialogProps {
	open: boolean
	setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const ForgotPasswordDialog: React.FC<ForgotPasswordDialogProps> = ({ open, setOpen }) => {
	return <Dialog
		open={open}
		onClose={() => setOpen(false)}
		aria-labelledby="alert-dialog-title"
		aria-describedby="alert-dialog-description"
	>
		<DialogTitle id="alert-dialog-title">{'Esqueceu a senha?'}</DialogTitle>
		<DialogContent>
			<DialogContentText id="alert-dialog-description">
            Caso tenha esquecido a senha, é preciso fornecer novamente o código de autenticação do seu resumo escolar, seguindo os mesmos passos do <Link color='secondary' href='/Cadastro'>cadastro</Link>. Ao fazer isso, a sua conta será reconhecida e você poderá escolher uma nova senha.
			</DialogContentText>
		</DialogContent>
		<DialogActions>
			<Button onClick={() => setOpen(false)} color="secondary" autoFocus>
            Ok
			</Button>
		</DialogActions>
	</Dialog>
}
const LoginPage = () => {
	const [nusp, setNusp] = useState('')
	const [isDialogOpen, setDialogOpen] = useState(false)

	console.log(open)
	const handleNUSPInputChange = evt => {
		const val = evt.target.value
		if (/^[0-9]*$/.test(val)) setNusp(val)
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
												color='secondary'
												name="senha"
												size="small"
												type="password"
												variant="outlined"
											/>
										</Grid>
										<Grid item>
											<Button
												fullWidth
												color='secondary'
												size="medium"
												variant="outlined"
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
											<Link variant='caption' color='secondary' onClick={() => setDialogOpen(true)} style={{ cursor: 'pointer' }}>
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

		<ForgotPasswordDialog open={isDialogOpen} setOpen={setDialogOpen}/>
	</>
}

export default LoginPage
