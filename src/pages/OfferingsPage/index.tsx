import React, { useEffect, useState } from 'react'
import { /* useHistory, */ useParams } from 'react-router-dom'

import Card from '@material-ui/core/Card'
import CircularProgress from '@material-ui/core/CircularProgress'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import { Offering } from 'types/Offering'
import { Subject } from 'types/Subject'

import api from 'API'
import BreadCrumb from 'components/Breadcrumb'
import ErrorScreen from 'components/ErrorScreen'
import Navbar from 'components/Navbar'
import OfferingsList from 'components/OfferingsList'
import { buildURI as buildSubjectPageURI } from 'pages/SubjectPage'
import { buildURI as buildSubjectsPageURI } from 'pages/SubjectsPage'

const GrayCard = withStyles({
	root: {
		backgroundColor: '#FAFAFA'
	}
})(Card)

export interface URLParameter {
	course: string
	specialization: string
	code: string
}

export function buildURI (courseCode: string, courseSpecialization: string, subjectCode: string): string {
	return `/oferecimentos/${courseCode}/${courseSpecialization}/${subjectCode}`
}

function getBreadcrumbLinks (course: string, specialization: string, code: string) {
	return [
		{
			url: buildSubjectsPageURI(),
			text: 'Disciplinas'
		},
		{
			url: buildSubjectPageURI(course, specialization, code),
			text: code
		},
		{
			url: buildURI(course, specialization, code),
			text: 'Oferecimentos'
		}
	]
}

const offeringss = [
	{
		professor: 'Kalinka Castelo Branco',
		code: 'fjdsalfjdksljfkldsa',
		years: ['2020', '2017', '2016'],
		approval: 0.4,
		neutral: 0.1,
		disapproval: 0.5
	},
	{
		professor: 'João do Espírito Santo Batista De Mattos',
		code: 'fjdsalfjdksljfkldsadfs',
		years: ['2020', '2021', '2019', '2015', '2014', '2013'],
		approval: 0.6,
		neutral: 0.1,
		disapproval: 0.3
	},
	{
		professor: 'Abacaxi',
		code: 'fjdsalxdsjdksljfkldsadfs',
		years: ['2020', '2019', '2018'],
		approval: 0.6,
		neutral: 0.1,
		disapproval: 0.3
	}
]

const OfferingsPage = () => {
	const { course, specialization, code } = useParams<URLParameter>()
	const [selectedOffering, setSelectedOffering] = useState<string>('fjdsalfjdksljfkldsa')
	const [subject, setSubject] = useState<Subject | null>(null)
	const [errorMessage, setErrorMessage] = useState<string>('')
	const [offerings, setOfferings] = useState<Offering[] | null>(null)
	// const history = useHistory()

	useEffect(() => {
		api.getSubjectWithCourseAndCode(course, specialization, code).then(data => {
			setSubject(data)
		}).catch((err: number) => {
			if (err === 404) {
				setErrorMessage('Não foi possível encontrar essa disciplina')
			} else if (err !== 200) {
				setErrorMessage(`Algo de errado aconteceu e essa página retornou com status ${err}`)
			} else {
				setErrorMessage('')
			}
		})

		api.getSubjectOfferings(course, specialization, code).then(data => {
			setOfferings(data)
		}).catch((err: number) => {
			if (err === 404) {
				setErrorMessage('Não foi possível encontrar essa disciplina')
			} else if (err === 401) {
				setErrorMessage('Você deve estar logado para ver esta página (401)')
			} else if (err !== 200) {
				setErrorMessage(`Algo de errado aconteceu e essa página retornou com status ${err}`)
			} else {
				setErrorMessage('')
			}
		})
	}, [])

	const isLoading = (subject === null || offerings == null) && errorMessage === ''

	const content = errorMessage
		? <ErrorScreen message={errorMessage} breadcrumbs={getBreadcrumbLinks(course, specialization, code)}/>
		: <Container maxWidth='xl' className='full-height'>
			<Grid container direction="column" className='full-height'>
				<Grid item container alignItems='center' xs="auto" style={{ height: '50px' }}>
					<BreadCrumb links={getBreadcrumbLinks(course, specialization, code)}/>
				</Grid>
				{isLoading
					? <Grid container justify='center'> <CircularProgress/> </Grid>
					: <Grid item xs container direction="column">
						<Grid item xs="auto">
							<Typography variant="h4"> Oferecimentos de {subject.name} </Typography>
						</Grid>
						<Grid item spacing={2} xs container alignItems='stretch'>
							<Grid item xs={3}>
								<GrayCard elevation={3} raised className='full-height not-so-gray'>
									<OfferingsList list={offeringss} selected={selectedOffering} setSelected={setSelectedOffering}/>
								</GrayCard>
							</Grid>
							<Grid item xs={9}>
								<GrayCard elevation={3} raised className='full-height not-so-gray'>
									Hello World!
								</GrayCard>
							</Grid>
						</Grid>
					</Grid>
				}
			</Grid>
		</Container>

	return <div className="main">
		<main>
			<Navbar/>
			<Grid container direction='column' className='full-height'>
				<Grid item xs="auto" style={{ height: '64px' }}/>
				<Grid item xs>
					{content}
				</Grid>
			</Grid>
		</main>
	</div>
}

export default OfferingsPage
