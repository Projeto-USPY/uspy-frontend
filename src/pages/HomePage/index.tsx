import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { useTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import Footer from 'components/Footer'
import GeneralSearch from 'components/GeneralSearch'
import Navbar from 'components/Navbar'
import withSearchData from 'HOCs/withSearchData'
import logo from 'images/logo.svg'
import './style.css'

import { buildURI as buildSubjectPageURI } from 'pages/SubjectPage'
import { buildURI as buildSubjectsPageURI } from 'pages/SubjectsPage'

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

const HomePage = () => {
	const theme = useTheme()
	const isLarge = useMediaQuery(theme.breakpoints.up('sm'))

	const history = useHistory()
	const clickItem = (courseCode: string, courseSpecialization: string, code: string) => {
		history.push(buildSubjectPageURI(courseCode, courseSpecialization, code))
	}
	return <Grid container direction='column' justify='space-between' alignItems='stretch' style={{ height: '100%' }}>
		<Grid item>
			<Navbar/>
			<div style={{ height: '64px' }}></div>
		</Grid>
		<Grid item container direction='column' justify='center' alignItems='stretch' xs>
			<Container>
				<img width={isLarge ? 350 : '75%'} style={{ display: 'block', margin: '0 auto' }} src={logo}/>
				{/* <Typography align='justify' variant='body1'>O {'<placeholder nome>'} é um sistema colaborativo em que você pode consultar estatísticas e reviews sobre disciplinas e professores do ICMC. Para colaborar, você deve submeter um PDF do seu resumo escolar, mas fique tranquilo, todos os dados são anônimos, criptografados e armazenados sigilosamente. Para começar, inscreva-se com seu email USP, ou faça login.</Typography> */}
				{withSearchData(<GeneralSearch handleChange={clickItem} />)}

				<div className='other-links'>
					{/* <Link to={buildTeachersPageURI()}> <Typography variant='caption' color='secondary'>Ver lista de professores</Typography> </Link> */}
					<Link to={buildSubjectsPageURI()}> <Typography variant='caption' color='secondary'>Ver lista de disciplinas</Typography> </Link>
				</div>
			</Container>
		</Grid>
		<Grid item>
			<Footer/>
		</Grid>
	</Grid>
}

export default HomePage
