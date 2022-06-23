import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Institute, Course } from 'types/Course'

import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { useTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import api from 'API'

import Footer from 'components/Footer'
import GeneralSearch from 'components/GeneralSearch'
import Navbar from 'components/Navbar'
import logo from 'images/logo.svg'
import './style.css'

import { buildURI as buildSubjectPageURI } from 'pages/SubjectPage'
import { buildURI as buildSubjectsPageURI } from 'pages/SubjectsPage'

export function buildURI(): string {
	return '/'
}

export function getMeta(): any {
	return {
		title: 'USPY',
		description: `Procure por disciplinas e veja seus oferecimentos, requisitos, distribuição de médias, e muito mais.
Avalie professores, veja seu histórico escolar, tudo em uma plataforma centralizada e fácil de usar!`,
		robots: ['index', 'follow']
	}
}

const HomePage = () => {
	const theme = useTheme()
	const isLarge = useMediaQuery(theme.breakpoints.up('sm'))

	const history = useHistory()
	const clickItem = (courseCode: string, courseSpecialization: string, code: string) => {
		history.push(buildSubjectPageURI(courseCode, courseSpecialization, code))
	}

	const [instituteOptions, setInstituteOptions] = useState([])
	useEffect(() => {
		api.getInstitutes().then(res => {
			setInstituteOptions(res.map((inst: Institute, idx: number) => {
				const words = inst.name.split(' ')
				const initials = words.reduce(
					(prev, cur) => {
						if (cur[0] === cur[0].toUpperCase()) {
							return prev + cur[0]
						}

						return prev
					},
					''
				)

				return <MenuItem key={idx} value={inst.code}> {inst.name} ({initials}) </MenuItem>
			}))
		})
	}, [])

	const [institute, setInstitute] = useState<string>('55')
	const [course, setCourse] = useState<[string, string]>(['', ''])

	const [courseOptions, setCourseOptions] = useState([])
	useEffect(() => {
		api.getCourses(institute).then(res => {
			setCourseOptions(res.map((course: Course, idx: number) => {
				return <MenuItem key={idx} value={[course.code, course.specialization]}> {course.name} </MenuItem>
			}))
		})
	}, [institute])

	return <Grid container direction='column' justify='space-between' alignItems='stretch' style={{ height: '100%' }}>
		<Grid item>
			<Navbar />
			<div style={{ height: '64px' }}></div>
		</Grid>
		<Grid item container direction='column' justify='center' alignItems='stretch' xs>
			<Grid item>
				<center><img width={isLarge ? 350 : '75%'} src={logo} /></center>
				<Container>
					<Grid
						container
						spacing={2}
					>
						<Grid
							item
						>
							<InputLabel id="institute-label">Institutos</InputLabel>
							<Select
								labelId="institute-label"
								id="institute"
								value={institute}
								onChange={(event) => { setInstitute(event.target.value as string) }}
								displayEmpty={true}
							>
								{instituteOptions}
							</Select>
						</Grid>
						<Grid
							item
						>
							<InputLabel id="course-label">Cursos</InputLabel>
							<Select
								labelId="course-label"
								id="course"
								value={course}
								onChange={(event) => { setCourse(event.target.value as [string, string]) }}
							>
								{courseOptions}
							</Select>
						</Grid>
					</Grid>

					{/* <Typography align='justify' variant='body1'>O {'<placeholder nome>'} é um sistema colaborativo em que você pode consultar estatísticas e reviews sobre disciplinas e professores do ICMC. Para colaborar, você deve submeter um PDF do seu resumo escolar, mas fique tranquilo, todos os dados são anônimos, criptografados e armazenados sigilosamente. Para começar, inscreva-se com seu email USP, ou faça login.</Typography> */}
					{<GeneralSearch handleChange={clickItem} institute={institute} course={course}/>}

					<div className='other-links'>
						{/* <Link to={buildTeachersPageURI()}> <Typography variant='caption' color='secondary'>Ver lista de professores</Typography> </Link> */}
						<Link to={buildSubjectsPageURI()}> <Typography variant='caption' color='secondary'>Ver lista de disciplinas</Typography> </Link>
					</div>
				</Container>
			</Grid>
		</Grid>
		<Grid item>
			<Footer />
		</Grid>
	</Grid>
}

export default HomePage
