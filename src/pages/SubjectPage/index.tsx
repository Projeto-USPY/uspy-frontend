import React, { useState, useEffect } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { useParams } from 'react-router-dom'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import { Subject } from 'types/Subject'
import { getSubjectWithCourseAndCode } from 'API'

interface URLParameter {
	course: string
	code: string
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

	const object =
		isLoading ? <Grid container justify='center'><Grid item><CircularProgress/></Grid></Grid>
			: (
				errorMessage ? <Typography variant='h2'>{errorMessage}</Typography>
					: <Typography variant='h2'>Achou {subject?.name}!!!</Typography>
			)
	return <div className='main'>
		<main>
			<Navbar/>
			<div style={{ height: '150px' }}></div>

			{object}
		</main>
		<Footer text='Made with love by Preischadt and Turci'/>
	</div>
}

export default SubjectPage
