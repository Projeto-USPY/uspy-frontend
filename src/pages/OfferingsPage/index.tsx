import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// import Button from '@material-ui/core/Button'
// import Card from '@material-ui/core/Card'
// import CircularProgress from '@material-ui/core/CircularProgress'
// import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { useTheme/* , withStyles */ } from '@material-ui/core/styles'
// import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import { Offering } from 'types/Offering'
import { Subject } from 'types/Subject'

import api from 'API'
// import BreadCrumb from 'components/Breadcrumb'
import ErrorScreen from 'components/ErrorScreen'
import Navbar from 'components/Navbar'
// import OfferingReviewsPanel from 'components/Offerings/OfferingReviewsPanel'
// import OfferingsList from 'components/Offerings/OfferingsList'
// import OfferingContext from 'contexts/OfferingContext'
import { buildURI as buildSubjectPageURI } from 'pages/SubjectPage'
import { buildURI as buildSubjectsPageURI } from 'pages/SubjectsPage'

import Desktop from './Desktop'
import Mobile from './Mobile'

// import MobileOfferingSelector from './MobileOfferingSelector'

// const GrayCard = withStyles({
// 	root: {
// 		backgroundColor: '#FAFAFA'
// 	}
// })(Card)

export interface URLParameter {
	course: string
	specialization: string
	code: string
}

export function buildURI (courseCode: string, courseSpecialization: string, subjectCode: string): string {
	return `/oferecimentos/${courseCode}/${courseSpecialization}/${subjectCode}`
}

export function getBreadcrumbLinks (course: string, specialization: string, code: string) {
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

const OfferingsPage = () => {
	const theme = useTheme()
	const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))

	const { course, specialization, code } = useParams<URLParameter>()
	// const [selectedOffering, setSelectedOffering] = useState<Offering | null>(null)
	const [subject, setSubject] = useState<Subject | null>(null)
	const [errorMessage, setErrorMessage] = useState<string>('')
	const [offerings, setOfferings] = useState<Offering[] | null>(null)
	// eslint-disable-next-line no-unused-vars
	// const [mobileOfferingSelectorOpen, setMobileOfferingSelectorOpen] = useState<boolean>(false)

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
			// if (data.length) {
			// 	setSelectedOffering(data[0])
			// }
		}).catch((err: number) => {
			if (err === 404) {
				setErrorMessage('Não foi possível encontrar oferecimentos para esta disciplina')
			} else if (err === 401) {
				setErrorMessage('Você deve estar logado para ver esta página (401)')
			} else if (err !== 200) {
				setErrorMessage(`Algo de errado aconteceu e essa página retornou com status ${err}`)
			} else {
				setErrorMessage('')
			}
		})
	}, [])

	/* const isLoading = (subject === null || offerings == null) && errorMessage === ''

	const desktopArrangement =
		<Grid spacing={2} container className='full-height' alignItems='stretch'>
			<Grid item xs={3}>
				<GrayCard elevation={3} raised className='full-height not-so-gray'>
					<OfferingsList list={offerings} selected={selectedOffering} setSelected={setSelectedOffering}/>
				</GrayCard>
			</Grid>
			<Grid item xs={9}>
				<GrayCard elevation={3} raised className='full-height not-so-gray'>
					<OfferingContext.Provider value={{
						professor: selectedOffering?.code,
						course,
						specialization,
						code
					}}>
						<OfferingReviewsPanel />
					</OfferingContext.Provider>
				</GrayCard>
			</Grid>
		</Grid>

	const mobileArrangement = <Grid container direction='column' className='full-height'>
		<Grid item xs="auto">
			<Typography variant='body2' >
				Avaliações de
			</Typography>
			<br/>
		</Grid>
		<Grid item xs="auto" container>
			<Grid item xs={8}>
				<Typography variant='subtitle1'>
					<b>
						{selectedOffering?.professor}
					</b>
				</Typography>
			</Grid>
			<Grid item xs={4}>
				<Button
					size='small'
					color='secondary'
					fullWidth
					onClick={() => setMobileOfferingSelectorOpen(true)}
				>
					<b>TROCAR</b>
				</Button>
			</Grid>
		</Grid>
		<Grid item xs style={{ position: 'relative' }}>

			<OfferingContext.Provider value={{
				professor: selectedOffering?.code,
				course,
				specialization,
				code
			}}>
				<OfferingReviewsPanel />
			</OfferingContext.Provider>
			// {<MobileOfferingSelector
			// 	open={mobileOfferingSelectorOpen}
			// 	close={() => setMobileOfferingSelectorOpen(false)}
			// >
			// 	<OfferingsList list={offerings} selected={selectedOffering} setSelected={x => { setSelectedOffering(x); setMobileOfferingSelectorOpen(false) }}/>
			// </MobileOfferingSelector>}
		</Grid>
	</Grid> */

	/* const content = errorMessage
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
							<Typography variant="h4"> Oferecimentos de {subject?.name} </Typography>
							<br/>
						</Grid>
						<Grid item xs>
							{
								isDesktop
									? desktopArrangement
									: mobileArrangement
							}
						</Grid>
					</Grid>
				}
			</Grid>
		</Container> */

	return <div className="main">
		<Navbar/>
		<Grid container direction='column' className='full-height' wrap='nowrap'>
			<Grid item xs="auto" style={{ minHeight: '64px' }}/>
			<Grid item xs>
				{
					errorMessage
						? <ErrorScreen
							message={errorMessage}
							breadcrumbs={getBreadcrumbLinks(course, specialization, code)}
						/>
						: isDesktop
							? <Desktop
								offerings={offerings}
								subject={subject}
							/>
							: <Mobile
								offerings={offerings}
								subject={subject}
							/>

				}
			</Grid>
		</Grid>
	</div>
}

export default OfferingsPage
