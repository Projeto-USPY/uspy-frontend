import React from 'react'
import { useHistory } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

// import Container from '@material-ui/core/Container'

import Footer from 'components/Footer'
import GeneralSearch from 'components/GeneralSearch'
import Navbar from 'components/Navbar'
import { buildURI as buildSubjectPageURI } from 'pages/SubjectPage'
import './style.css'
import logo from 'images/logo.svg'

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

	// const [showSearch, setShowSearch] = useState<boolean>(false)
	return <Grid container direction='column' justify='space-between' alignItems='stretch' style={{ height: '100%' }}>
		<Grid item>
			<Navbar />
			<div style={{ height: '64px' }}></div>
		</Grid>
		<Grid item container direction='column' justify='center' alignItems='stretch' xs>
			<Grid item>
				<center><img width={isLarge ? 350 : '75%'} src={logo} style={{ marginBottom: '15px' }} /></center>
				<GeneralSearch handleChange={clickItem}/>
			</Grid>
		</Grid>
		<Grid item>
			<Footer />
		</Grid>
	</Grid>
}

export default HomePage
