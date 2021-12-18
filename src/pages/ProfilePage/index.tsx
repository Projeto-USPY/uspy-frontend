import React from 'react'

import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined'

// import api from 'API'
import BreadCrumb from 'components/Breadcrumb'
import Navbar from 'components/Navbar'

import TranscriptTable from './TranscriptTable'

export function buildURI (): string {
	return '/perfil'
}

const ProfilePage = () => {
	const updateProfile = () => {
		// do nothing for now
		alert('updating profile')
	}

	return <div className='main'>
		<main>
			<Navbar/>
			<div style={{ height: '94px' }}></div>
			<Container>
				<Grid container alignItems='center' style={{ height: '50px' }}>
					<BreadCrumb links={[{
						url: '/',
						text: 'Home'
					}, {
						url: '/Perfil',
						text: 'Perfil'
					}]}/>
				</Grid>

				<br/><br/>

				<Card elevation={3}>
					<CardContent>
						<Container>
							<Grid
								container
								spacing={2}
								justify='space-between'
								alignItems='center'
							>
								<Grid item>
									<Typography variant='h5'>
										<b>
                                            Meu histórico
										</b>
									</Typography>
								</Grid>
								<Grid item>
									<Grid
										container
										direction='column'
										alignItems='flex-end'
										spacing={1}
									>
										<Grid item>
											<Button
												size='large'
												variant='outlined'
												color='secondary'
												onClick={updateProfile}
											>
                                                Atualizar
                                                &nbsp;&nbsp;
												<CloudUploadOutlinedIcon fontSize='small'/>
											</Button>
										</Grid>
										<Grid item>
											<Typography variant='caption'> Última atualização: 22/10/2021 às 13:48 </Typography>
										</Grid>
									</Grid>
								</Grid>
							</Grid>

							<TranscriptTable courses={['BCC', 'BSI']} />
						</Container>
					</CardContent>
				</Card>
			</Container>
		</main>
	</div>
}

export default ProfilePage
