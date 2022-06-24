import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import { useTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import { Institute, Course } from 'types/Course'

import api from 'API'
import Footer from 'components/Footer'
import GeneralSearch from 'components/GeneralSearch'
import Navbar from 'components/Navbar'
import logo from 'images/logo.svg'
import './style.css'

import { buildURI as buildSubjectPageURI } from 'pages/SubjectPage'
import { buildURI as buildSubjectsPageURI } from 'pages/SubjectsPage'

import Autocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField'

export function buildURI (): string {
	return '/'
}

export function getMeta (): any {
	return {
		title: 'USPY',
		description: `Procure por disciplinas e veja seus oferecimentos, requisitos, distribuição de médias, e muito mais.
Avalie professores, veja seu histórico escolar, tudo em uma plataforma centralizada e fácil de usar!`,
		robots: ['index', 'follow']
	}
}

function getInitials (name: string): string {
	const words = name.split(' ')
	return words.reduce((prev, cur) => {
		const caps = cur[0].toUpperCase()
		if (cur[0] === caps && caps > 'A' && caps < 'Z') {
			return prev + cur[0]
		}

		return prev
	}, '')
}

const HomePage = () => {
	const theme = useTheme()
	const isLarge = useMediaQuery(theme.breakpoints.up('sm'))

	const history = useHistory()
	const clickItem = (courseCode: string, courseSpecialization: string, code: string) => {
		history.push(buildSubjectPageURI(courseCode, courseSpecialization, code))
	}

	const [instituteOptions, setInstituteOptions] = useState<Institute[]>()
	useEffect(() => {
		api.getInstitutes().then(res => {
			setInstituteOptions(res)
		})
	}, [])

	const [institute, setInstitute] = useState<string>('55')
	const [course, setCourse] = useState<[string, string]>(['', ''])

	const [courseOptions, setCourseOptions] = useState<Course[]>([])
	useEffect(() => {
		api.getCourses(institute).then(res => {
			setCourseOptions(res)
		})
	}, [institute])

	const [showSearch, setShowSearch] = useState<boolean>(false)
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
						spacing={1}
						direction={isLarge ? 'row' : 'column'}
					>
						<Grid
							item
							xs
						>
							<Autocomplete
								autoHighlight
								clearText='Limpar'
								clearOnEscape
								className="institutefield"
								freeSolo
								openOnFocus
								size='small'

								options={instituteOptions}
								getOptionLabel={(option) => `${option.name} (${getInitials(option.name)})`}

								onChange={(evt, value : Institute) => {
									setInstitute(value.code)
								}}

								renderInput={(params) => <TextField
									{...params}
									color='secondary'
									label="Procure por um instituto"
									variant="outlined"
									margin="normal"
									required={true}
								/>}
							/>
						</Grid>
						<Grid
							item
							xs
						>
							<Autocomplete
								autoHighlight
								clearText='Limpar'
								clearOnEscape
								className="coursefield"
								freeSolo
								openOnFocus
								size='small'

								options={courseOptions}
								getOptionLabel={(option) => `${option.name} (${getInitials(option.name)})`}

								onChange={(evt, value : Course) => {
									setCourse([value.code, value.specialization])
									setShowSearch(true)
								}}

								renderInput={(params) => <TextField
									{...params}
									color='secondary'
									label="Procure por um curso"
									variant="outlined"
									margin="normal"
									required={true}
								/>}
							/>
						</Grid>
					</Grid>

					{/* <Typography align='justify' variant='body1'>O {'<placeholder nome>'} é um sistema colaborativo em que você pode consultar estatísticas e reviews sobre disciplinas e professores do ICMC. Para colaborar, você deve submeter um PDF do seu resumo escolar, mas fique tranquilo, todos os dados são anônimos, criptografados e armazenados sigilosamente. Para começar, inscreva-se com seu email USP, ou faça login.</Typography> */}
					{ showSearch ? <GeneralSearch handleChange={clickItem} institute={institute} course={course}/> : null}
				</Container>
			</Grid>
		</Grid>
		<Grid item>
			<Footer />
		</Grid>
	</Grid>
}

export default HomePage
