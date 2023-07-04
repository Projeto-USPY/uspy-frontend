import React, { useState, useMemo, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'

import Box from '@material-ui/core/Box'
import CircularProgress from '@material-ui/core/CircularProgress'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { useTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import { SubjectInfo } from 'types/Subject'

import Navbar from 'components/Navbar'
import WithSubjectsData, { CourseDataContext } from 'HOCs/WithSubjectsData'
import { buildURI as buildSubjectPageURI } from 'pages/SubjectPage'
import { CourseComplete } from 'types/Course'
import LoadingEllipsis from 'components/LoadingEllipsis'

export function buildURI(course: string, specialization: string): string {
	return `/disciplinas/${course}/${specialization}`
}

export function getMeta(): any {
	return {
		title: 'USPY - Disciplinas',
		description: 'Explore os cursos e disciplinas disponíveis no USPY',
		robots: ['index', 'follow'],
	}
}

function transformResult(course: CourseComplete): SubjectInfo[] {
	return Object.entries(course.subjects).map(([code, name]) => ({
		code,
		name,
	}))
}

function renderRow(
	course: string,
	specialization: string,
	subject: SubjectInfo,
) {
	return (
		<ListItem
			button
			key={subject.code}
			style={{ borderBottom: '1px solid #adadad' }}
			component={Link}
			to={buildSubjectPageURI(course, specialization, subject.code)}>
			<ListItemText
				primary={subject.code + ' - ' + subject.name}
				disableTypography
			/>
		</ListItem>
	)
}
interface URLParameter {
	course: string
	specialization: string
}
interface SubjectListProps extends URLParameter {
	sortByCode: boolean
}

const SubjectList: React.FC<SubjectListProps> = ({
	course,
	specialization,
	sortByCode,
}) => {
	const courseData = useContext(CourseDataContext)

	const subjects = useMemo(() => transformResult(courseData), [courseData])

	const getList = (subjects: SubjectInfo[], sortByCode: boolean) => {
		subjects.sort((s1: SubjectInfo, s2: SubjectInfo) => {
			if (sortByCode) {
				return s1.code < s2.code ? -1 : s1.code === s2.code ? 0 : 1
			} else {
				return s1.name < s2.name ? -1 : s1.name === s2.name ? 0 : 1
			}
		})
		return subjects.map(s => renderRow(course, specialization, s))
	}

	const listByCode = useMemo(() => getList(subjects, true), [])
	const listByName = useMemo(() => getList(subjects, false), [])

	return (
		<List
			style={{ width: '100%', fontFamily: 'Raleway, sans-serif' }}
			disablePadding>
			<div hidden={sortByCode}> {listByName} </div>{' '}
			{/* for otimization, make two */}
			<div hidden={!sortByCode}> {listByCode} </div>
		</List>
	)
}

type SubjectsPageContentProps = URLParameter

const SubjectsPageContent = ({
	course,
	specialization,
}: SubjectsPageContentProps) => {
	const [sortByCode, setSortByCode] = useState<boolean>(true)
	const courseData = useContext(CourseDataContext)

	const theme = useTheme()
	const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))

	if (courseData === null)
		return (
			<Grid container justifyContent="center" alignItems="center">
				<Grid item>
					<CircularProgress />
				</Grid>
			</Grid>
		)
	else {
		return (
			<Grid container spacing={3} direction="column">
				<Grid
					container
					item
					direction="row"
					justifyContent={isDesktop ? 'flex-end' : 'center'}>
					<Grid item>
						<input
							type="radio"
							name="order"
							id="code"
							onChange={() => setSortByCode(true)}
							checked={sortByCode}
						/>
						<label htmlFor="code"> Ordenar por código </label>
					</Grid>
					<Grid item>
						<input
							type="radio"
							name="order"
							id="name"
							onChange={() => setSortByCode(false)}
							checked={!sortByCode}
						/>
						<label htmlFor="name"> Ordenar por nome </label>
					</Grid>
				</Grid>
				<Grid item>
					<SubjectList
						course={course}
						specialization={specialization}
						sortByCode={sortByCode}
					/>
				</Grid>
			</Grid>
		)
	}
}

type SubjectPageProps = URLParameter

const SubjectsPage = ({ course, specialization }: SubjectPageProps) => {
	const courseData = useContext(CourseDataContext)

	return (
		<div className="main">
			<main>
				<Navbar key="navbar" />
				<div style={{ height: '150px' }}></div>

				<Container>
					<Typography variant="h4">
						Disciplinas de{' '}
						{courseData?.name ?? <LoadingEllipsis interval={200} />}
					</Typography>
					<br></br>
					<Box>
						<SubjectsPageContent
							course={course}
							specialization={specialization}
						/>
					</Box>
				</Container>
			</main>
		</div>
	)
}

const SubjectsPageWrapper = () => {
	const { course, specialization } = useParams<URLParameter>()
	console.log(course, specialization)

	return (
		<WithSubjectsData course={course} specialization={specialization}>
			<SubjectsPage course={course} specialization={specialization} />,
		</WithSubjectsData>
	)
}

export default SubjectsPageWrapper
