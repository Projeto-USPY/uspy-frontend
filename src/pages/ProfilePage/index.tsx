import React, { useEffect, useState } from 'react'

import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import useTheme from '@material-ui/core/styles/useTheme'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined'

import { Course } from 'types/Course'

import api from 'API'
import BreadCrumb from 'components/Breadcrumb'
import MessagePanel from 'components/MessagePanel'
import Navbar from 'components/Navbar'
import TranscriptView from 'pages/ProfilePage/TranscriptView'

export function buildURI (): string {
	return '/perfil'
}

const ProfilePage = () => {
	const [courses, setCourses] = useState<Course[]>([])
	const [errorMessage, setErrorMessage] = useState<string>('')
	// get courses
	useEffect(() => {
		api.getMajors().then(majors => {
			setCourses(majors)
		}).catch(err => {
			setErrorMessage(`Algo deu errado (${err.message}). Tente novamente mais tarde`)
		})
	}, [])

	const theme = useTheme()
	const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))

	const updateProfile = () => {
		// do nothing for now
		alert('updating profile')
	}

	return <div className='main'>
		<main>
			<Navbar/>
			<div style={{ height: isDesktop ? '94px' : '64px' }}></div>
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
					<CardHeader
						title={isDesktop ? 'Meu histórico' : 'MEU HISTÓRICO'}
						titleTypographyProps={{
							variant: isDesktop ? 'h5' : 'body1',
							style: {
								fontWeight: isDesktop ? 'bold' : 'normal',
								fontFamily: isDesktop
									? ''
									: 'Roboto Condensed, sans-serif'
							}
						}}
						action={
							<Grid
								container
								direction='column'
								alignItems='flex-end'
								spacing={1}
							>
								<Grid item>
									<Button
										size={isDesktop ? 'large' : 'small'}
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
									<Typography variant='caption'> Última atualização: 22/10/2021 { isDesktop ? 'às 13:48' : ''} </Typography>
								</Grid>
							</Grid>
						}
					/>
					<CardContent style={{ padding: isDesktop ? '16px 32px' : '0 0' }}>
						{
							!errorMessage
								? courses.length
									? <TranscriptView courses={courses} />
									: null
								: <MessagePanel message={errorMessage} height={300}/>
						}
					</CardContent>
				</Card>
			</Container>
		</main>
	</div>
}

export default ProfilePage
