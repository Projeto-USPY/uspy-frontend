import React from 'react'
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
const LoginPage = () => {
	return <>
		<div className='main'>
			<main>
				<Navbar buttons={['Login', 'Cadastrar']}/>
				<div style={{ height: '150px' }}></div>
				<Container style={{ backgroundColor: 'secondary' }}>
					<Grid container justify='center'>
						<Grid item xs={6}>
							<Paper variant='outlined'>
								<Box p={2}>
									<Grid container spacing={2} alignItems='stretch' direction='column'>
										<Grid item>
											<TextField
												fullWidth
												label="Número USP"
												name="NUSP"
												size="small"
												type="text"
												variant="outlined"
											/>
										</Grid>
										<Grid item>
											<TextField
												fullWidth
												label="Senha"
												name="senha"
												size="small"
												type="password"
												variant="outlined"
											/>
										</Grid>
										<Grid item>
											<Button
												fullWidth
												color='primary'
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
											<Link variant='caption' color='secondary' href='#'>
											Esqueci a senha
											</Link>
											<Link variant='caption' color='secondary' href='#'>
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

export default LoginPage
