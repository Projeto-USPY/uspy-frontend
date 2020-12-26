import React, { useState, useEffect, ReactElement } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { useParams } from 'react-router-dom'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import { Subject } from 'types/Subject'
import { getSubjectWithCourseAndCode } from 'API'
import BreadCrumb from 'components/Breadcrumb'
import CollapsibleText from 'components/CollapsibleText'

interface URLParameter {
	course: string
	code: string
}

function getBreadcrumbLinks (course: string, code: string) {
	return [
		{
			url: '/Disciplinas',
			text: 'Disciplinas'
		},
		{
			url: `/Disciplinas/${course}/${code}`,
			text: code
		}

	]
}

const SubjectPage = () => {
	const { course, code } = useParams<URLParameter>()

	const [subject, setSubject] = useState<Subject | null>(null)
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [errorMessage, setErrorMessage] = useState<string>('')
	// query for the subject with code 'code'
	useEffect(() => {
		getSubjectWithCourseAndCode(course, code).then(([data, status]) => {
			if (status === 404) {
				setErrorMessage('Não foi possível encontrar essa disciplina')
			} else if (status !== 200) {
				setErrorMessage(`Algo de errado aconteceu e essa página retornou com status ${status}`)
			} else {
				setErrorMessage('')
			}
			setSubject(data)
			setIsLoading(false)
		})
	}, [])

	const content = <>
		<Typography variant='h4'>{`${subject?.code} - ${subject?.name}`}</Typography>
		<br></br>
		<CollapsibleText text={subject?.description} maxCharacters={200} Child={Typography as ReactElement} childrenProps={{}}/>
	</>

	const object =
		isLoading ? <Grid container justify='center'><Grid item><CircularProgress/></Grid></Grid>
			: (
				errorMessage ? <Typography variant='h4'>{errorMessage}</Typography>
					: content
			)
	return <div className='main'>
		<main>
			<Navbar/>
			<div style={{ height: '64px' }}></div>
			<Container>
				<Grid container alignItems='center' style={{ height: '50px' }}>
					<BreadCrumb links={getBreadcrumbLinks(course, code)}/>
				</Grid>

				{object}
			</Container>
		</main>
		<Footer text='Made with love by Preischadt and Turci'/>
	</div>
}

export default SubjectPage
