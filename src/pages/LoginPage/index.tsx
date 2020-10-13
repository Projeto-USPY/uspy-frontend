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
const LoginPage = () => {
	const [nusp, setNusp] = useState('')
	const handleNUSPInputChange = evt => {
		const val = evt.target.value
		if (/^[0-9]*$/.test(val)) setNusp(val)
	}
	return <>
		<div className='main'>
			<main>
				<Navbar buttons={[{ title: 'Login', route: '/Login' }, { title: 'Cadastrar', route: '/Cadastro' }]} />
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
