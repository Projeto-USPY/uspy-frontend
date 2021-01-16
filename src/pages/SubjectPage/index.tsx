import React, { useState, useEffect, ReactElement } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Radio from '@material-ui/core/Radio'
import Typography from '@material-ui/core/Typography'
import { useParams } from 'react-router-dom'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import { Subject } from 'types/Subject'
import { getSubjectWithCourseAndCode } from 'API'
import BreadCrumb from 'components/Breadcrumb'
import CollapsibleText from 'components/CollapsibleText'
import CreditsIndicator from './CreditsIndicator'

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

interface SubjectEvaluationRadioProps {
	chosen: string
	clickCallback: Function
}

const SubjectEvaluationRadio: React.FC<SubjectEvaluationRadioProps> = ({ chosen, clickCallback }) => {
	const options = ['S', 'N']

	return <Grid container justify='space-between' alignItems='center'>
		<p> Vale a pena? </p>
		{options.map(c => <div key={c}>
			<Radio

				checked={c === chosen}
				onChange={() => clickCallback(c)}
				value={c}
			/>
			<span>{c}</span>
		</div>
		)}

	</Grid>
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

	/* Data about subject reviews */
	const evaluateSubject = false // if the user can review or (re-review) the subject
	const recommendationRate = 58 // percentage of the reviews that recommend the subject
	const totalOfReviews = 12345 // total number of reviews

	const content = <>
		<Typography variant='h4'>{`${subject?.code} - ${subject?.name}`}</Typography>

		<br></br>

		<CollapsibleText text={subject?.description} maxCharacters={200} Child={Typography as ReactElement} childrenProps={{}}/>

		<br></br>
		<br></br>

		<Grid container spacing={5}>
			<Grid item xs={12} sm={3}>
				<Grid container spacing={5}>
					<Grid item xs={12}>
						<Card elevation={3} className='prompt'>
							<div className='graybg'>
								<CardContent>

									<Grid container spacing={0}>
										<Grid item xs={6}>
											<CreditsIndicator value={subject?.class} title={'CA'}/>
										</Grid>
										<Grid item xs={6}>
											<CreditsIndicator value={subject?.assign} title={'CT'}/>
										</Grid>
									</Grid>
								</CardContent>
							</div>
							<CardContent>
								Tipo: {subject?.optional ? 'Optativa' : 'Obrigatória'}<br/>
								Curso: {course}<br/>
								Requisitos: {subject?.requirements ? subject?.requirements.join(', ') : 'Nenhum'}<br/>
								Carga horária: {subject?.hours}<br/>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12}>
						<Card elevation={3} className='prompt'>
							<CardContent>
								<p className="roboto-condensed"> {evaluateSubject ? 'AVALIE A DISCIPLINA' : 'SOBRE A DISCIPLINA'} </p>

								{evaluateSubject
									? <SubjectEvaluationRadio chosen=''/>
									: <></>}
								<p> {recommendationRate}% dos alunos dizem que essa disciplina vale a pena! </p>
								<p> Total de reviews: {totalOfReviews}</p>

							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Grid>

			<Grid item xs={12} sm={9}>
				<Paper>
					Ola
				</Paper>
			</Grid>
		</Grid>
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
