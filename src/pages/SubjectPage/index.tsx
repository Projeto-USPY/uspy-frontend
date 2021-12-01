import React, { useState, useEffect, useCallback, ReactElement } from 'react'
import { connect } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'

import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CircularProgress from '@material-ui/core/CircularProgress'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Radio from '@material-ui/core/Radio'
import Typography from '@material-ui/core/Typography'

import { Offering } from 'types/Offering'
import { AppState } from 'types/redux'
import { Subject, SubjectGradeStats, SubjectReview } from 'types/Subject'
import { User, unknownUser, guestUser } from 'types/User'

import api from 'API'
import BreadCrumb from 'components/Breadcrumb'
import CollapsibleText from 'components/CollapsibleText'
import ErrorScreen from 'components/ErrorScreen'
import MessagePanel from 'components/MessagePanel'
import Navbar from 'components/Navbar'
import OfferingsList from 'components/Offerings/OfferingsList'
import RequirementsGraph from 'components/RequirementsGraph'
import { buildURI as buildLoginPageURI } from 'pages/LoginPage'
import { buildURI as buildOfferingsPageURI } from 'pages/OfferingsPage'
import { buildURI as buildSubjectPageURI } from 'pages/SubjectPage'
import { buildURI as buildSubjectsPageURI } from 'pages/SubjectsPage'
import { copyObj, getCourseAlias } from 'utils'

import CreditsIndicator from './CreditsIndicator'
import GradeDistributionChart from './GradeDistributionChart'

export interface URLParameter {
	course: string
	specialization: string
	code: string
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
		}

	]
}

interface SubjectEvaluationRadioProps {
	chosen: 'S' | 'N' | null
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

function getSubjectRequirementsList (sub: Subject) {
	if (!sub.requirements.length || !sub.requirements[0].length) throw new Error("Subject requirement list is empty when it shouldn't be")
	return sub.requirements[0].map(req => req.code).join(', ')
}

function getRecommendationRate (recommend: number, total: number) {
	if (isNaN(recommend) || isNaN(total)) return 0
	if (total === 0) return 0
	return (100 * recommend / total).toFixed(0)
}

export function buildURI (courseCode: string, courseSpecialization: string, subjectCode: string): string {
	return `/disciplinas/${courseCode}/${courseSpecialization}/${subjectCode}`
}

interface PropsType {
	user: User
}

const SubjectPage: React.FC<PropsType> = ({ user }) => {
	const { course, specialization, code } = useParams<URLParameter>()

	const history = useHistory()

	const [subject, setSubject] = useState<Subject | null>(null)
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [errorMessage, setErrorMessage] = useState<string>('')
	const [evaluateSubject, setEvaluateSubject] = useState<boolean>(false) // if the user can review (or re-review) the subject
	const [subjectReview, setSubjectReview] = useState<SubjectReview | null>(null)
	const [canSeeChart, setCanSeeChart] = useState<boolean>(false)
	const [gradeStats, setGradeStats] = useState<SubjectGradeStats | null>(null)
	const [yourGrade, setYourGrade] = useState<number | null>(null)
	const [offerings, setOfferings] = useState<Offering[] | null>(null)
	// query for the subject with code 'code'
	useEffect(() => {
		setSubject(null)
		setIsLoading(true)
		setErrorMessage('')

		api.getSubjectWithCourseAndCode(course, specialization, code).then((data) => {
			setSubject(data)
			setIsLoading(false)
		}).catch(err => {
			setIsLoading(false)
			if (err.code === 'not_found') {
				setErrorMessage('Não foi possível encontrar essa disciplina')
			} else {
				setErrorMessage(`Algo deu errado (${err.message}). Tente novamente mais tarde`)
			}
		})
	}, [course, specialization, code])

	useEffect(() => {
		setEvaluateSubject(false)
		setCanSeeChart(false)
		setSubjectReview(null)
		setYourGrade(null)
		setOfferings(null)

		api.getSubjectReview(course, specialization, code).then((rev) => {
			setSubjectReview(rev)
			setEvaluateSubject(true)
		}).catch(err => {
			if (err.code === 'not_found') {
				setEvaluateSubject(true)
			} else { // either user is not logged in or user was not enrolled in subject
				setEvaluateSubject(false)
			}
		})

		api.getSubjectGrades(course, specialization, code).then((gradeStats) => {
			setCanSeeChart(true)
			setGradeStats(gradeStats)
		}).catch(() => {
			setCanSeeChart(false)
			setGradeStats(null)
		})

		if (user === unknownUser || user === guestUser) {
			api.getSubjectOfferingsSummary(course, specialization, code).then(o => {
				setOfferings(o)
			}).catch(err => {
				if (err.code !== 'not_found') {
					console.error(err)
				}
			})
		} else {
			api.getSubjectOfferings(course, specialization, code, 3).then(o => {
				setOfferings(o)
			}).catch(err => {
				if (err.code === 'not_found') {
					setOfferings([])
				} else {
					console.error(err)
				}
			})
		}

		api.getGrade(course, specialization, code).then((grade) => {
			setYourGrade(grade.grade)
		}).catch(err => {
			if (err.code !== 'not_found') {
				console.error(err)
			}
		})
	}, [course, specialization, code, user])

	const handleReviewSubject = (c: 'S' | 'N') => {
		const review: SubjectReview = {
			categories: {
				worth_it: c === 'S'
			}
		}

		// remove subjectReview, se ja existir
		const newSubject = JSON.parse(JSON.stringify(subject))
		if (subjectReview !== null) {
			newSubject.stats.total--
			newSubject.stats.worth_it -= subjectReview.categories.worth_it ? 1 : 0
		}

		newSubject.stats.total++
		newSubject.stats.worth_it += c === 'S' ? 1 : 0
		setSubject(newSubject)
		setSubjectReview(review)
		api.makeSubjectReview(course, specialization, code, review)
	}

	// Chart Content
	let chartContent = <></>
	if (canSeeChart && gradeStats) {
		if (gradeStats.grades && Object.keys(gradeStats.grades).length > 0) {
			chartContent = <GradeDistributionChart grades={copyObj(gradeStats.grades)} averageGrade={gradeStats.average} yourGrade={yourGrade}/>
		} else {
			chartContent = <MessagePanel height={200} message="Não há dados suficientes para mostrar esse recurso"/>
		}
	} else {
		const redirectLogin = () => {
			history.push(buildLoginPageURI(), { from: history.location })
		}
		chartContent = <MessagePanel height={200} action={redirectLogin} actionTitle="Entrar" message="Você precisa estar logado para ter acesso a esse recurso"/>
	}

	const goToOfferingsPage = useCallback((offeringCode?: string) => {
		history.push(buildOfferingsPageURI(course, specialization, code, offeringCode))
	}, [course, specialization, code])

	const content = subject ? <>
		<Typography variant='h4'>{`${subject.code} - ${subject.name}`}</Typography>

		<br></br>

		<CollapsibleText text={subject.description} maxCharacters={200} Child={Typography as ReactElement} childrenProps={{}}/>

		<br></br>
		<br></br>

		<Grid container spacing={5}>
			<Grid container item xs={12} sm={3} direction="column">
				<Grid container spacing={4}>
					<Grid item xs={12}>
						<Card elevation={3} className='prompt'>
							<div className='graybg'>
								<CardContent>

									<Grid container spacing={0}>
										<Grid item xs={6}>
											<CreditsIndicator value={subject.class} title={'CA'}/>
										</Grid>
										<Grid item xs={6}>
											<CreditsIndicator value={subject.assign} title={'CT'}/>
										</Grid>
									</Grid>
								</CardContent>
							</div>
							<CardContent>
								Tipo: {subject.optional ? 'Optativa' : 'Obrigatória'}<br/>
								Curso: {getCourseAlias(course, specialization)}<br/>
								Semestre: {subject.semester + '°'} <br/>
								Requisitos: {subject.requirements.length ? getSubjectRequirementsList(subject) : 'Nenhum'}<br/>
								Carga horária: {subject.hours}<br/>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12}>
						<Card elevation={3} className='prompt'>
							<CardContent>
								<p className="roboto-condensed"> PROFESSORES DA DISCIPLINA </p>
								<Grid container justify='center' alignItems='center'>
									{
										offerings === null
											? <CircularProgress />
											: offerings.length === 0
												? 'Não foram encontrados oferecimentos para esta disciplina'
												: <>
													<OfferingsList
														list={offerings}
														selected={null}
														setSelected={(o: Offering) => {
															goToOfferingsPage(o.code)
														}}
														secondary={'Ver avaliações'}
														noStatsMessage={
															user === unknownUser || user === guestUser
																? 'Registre-se ou faça login para ter acesso às estatísticas do professor'
																: 'Não há avaliações para este professor'
														}
													/>
													<Button
														fullWidth
														color='secondary'
														size='medium'
														variant="outlined"
														onClick={goToOfferingsPage}
													>
														Ver Tudo
													</Button>
												</>
									}
								</Grid>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12}>
						<Card elevation={3} className='prompt'>
							<CardContent>
								<p className="roboto-condensed"> {evaluateSubject ? 'AVALIE A DISCIPLINA' : 'SOBRE A DISCIPLINA'} </p>

								{evaluateSubject
									? <SubjectEvaluationRadio chosen={subjectReview ? subjectReview.categories ? (subjectReview.categories.worth_it ? 'S' : 'N') : null : null} clickCallback={handleReviewSubject}/>
									: <></>}

								{
									subject.stats
										? <>
											<p> {getRecommendationRate(subject?.stats?.worth_it, subject?.stats?.total)}% dos alunos dizem que essa disciplina vale a pena! </p>
											<p> Total de reviews: {subject?.stats?.total}</p>
										</>
										: 'Ainda não existem avaliações para esta disciplina'
								}

							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Grid>

			<Grid container item xs={12} sm={9} direction='column'>

				<Grid container item spacing={4}>
					<Grid item xs={12}>
						<Card elevation={3} className="overflow">
							<CardContent>
								<Typography variant="h6"> Distribuição de Notas </Typography>
								{chartContent}

								{canSeeChart && gradeStats && gradeStats.grades && Object.keys(gradeStats.grades).length > 0
									? <>
										<Typography variant='body1'> Taxa de Aprovação: {(gradeStats.approval * 100).toFixed(1)}% </Typography>
										<Typography variant='body1'> Média: {gradeStats.average.toFixed(1)} </Typography>
										{yourGrade ? <Typography variant='body1'> Sua nota: {yourGrade.toFixed(1)} </Typography> : null}
									</> : null
								}
							</CardContent>
						</Card>
					</Grid>

					<Grid item xs={12}>
						<Card elevation={3}>
							<CardContent>
								<Typography variant="h6"> Requisitos e Trancamentos </Typography>
								<RequirementsGraph name={subject?.name} course={course} specialization={specialization} code={code} />
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	</> : <></>

	const object =
		isLoading ? <Grid container justify='center'><Grid item><CircularProgress/></Grid></Grid>
			: content
	return <div className='main'>
		<main>
			<Navbar/>
			<div style={{ height: '64px' }}></div>
			{
				errorMessage
					? <ErrorScreen message={errorMessage} breadcrumbs={getBreadcrumbLinks(course, specialization, code)} />
					:	<Container>
						<Grid container alignItems='center' style={{ height: '50px' }}>
							<BreadCrumb links={getBreadcrumbLinks(course, specialization, code)}/>
						</Grid>

						{object}
					</Container>
			}
		</main>
	</div>
}
const mapStateToProps = (st: AppState) => ({ user: st.user })
export default connect(mapStateToProps)(SubjectPage)
