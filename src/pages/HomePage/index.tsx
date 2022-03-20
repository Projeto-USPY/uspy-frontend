import React, { useRef } from 'react'
import { Link, useHistory } from 'react-router-dom'

import Container from '@material-ui/core/Container'
import Fab from '@material-ui/core/Fab'
import Grid from '@material-ui/core/Grid'
import { useTheme } from '@material-ui/core/styles'
import SvgIcon from '@material-ui/core/SvgIcon'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import Footer from 'components/Footer'
import GeneralSearch from 'components/GeneralSearch'
import Navbar from 'components/Navbar'
import withSearchData from 'HOCs/withSearchData'
import { ReactComponent as ArrowDownIcon } from 'images/arrow-down.svg'
import logo from 'images/logo.svg'
import SeeMore from 'pages/HomePage/SeeMore'
import { buildURI as buildSubjectPageURI } from 'pages/SubjectPage'
import { buildURI as buildSubjectsPageURI } from 'pages/SubjectsPage'
import './style.css'

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

	const seeMoreRef = useRef(null)
	const history = useHistory()
	const clickItem = (courseCode: string, courseSpecialization: string, code: string) => {
		history.push(buildSubjectPageURI(courseCode, courseSpecialization, code))
	}
	return <Grid container direction='column' justify='space-between' alignItems='stretch' style={{ height: '100%' }} wrap='nowrap'>
		<Grid item>
			<Navbar/>
			<div style={{ height: '150px' }}></div>
		</Grid>
		<Grid item container direction='column' justify='center' alignItems='stretch' xs>
			<Container>
				<img width={isLarge ? 350 : '75%'} className='hor-centered' src={logo}/>
				{withSearchData(<GeneralSearch handleChange={clickItem} />)}

				<div className='other-links'>
					{/* <Link to={buildTeachersPageURI()}> <Typography variant='caption' color='secondary'>Ver lista de professores</Typography> </Link> */}
					<Link to={buildSubjectsPageURI()}> <Typography variant='caption' color='secondary'>Ver lista de disciplinas</Typography> </Link>
				</div>

				<br/><br/>

				<Grid container direction='column' alignItems='center' justify='center'>
					<div className="hor-centered">
						<Fab className='point-arrow-down-parent' color="primary" onClick={() => {
							// setIsSeeMoreVisible(!isSeeMoreInViewport)
							seeMoreRef.current.scrollIntoView({ behavior: 'smooth' })
						}}>
							<SvgIcon className="point-arrow-down-child" component={ArrowDownIcon} viewBox="0 0 64 64" />
						</Fab>
					</div>
					<Typography> Saber mais </Typography>
				</Grid>

				<div ref={seeMoreRef}>
					<SeeMore/>
				</div>
			</Container>
		</Grid>
		<div style={{ minHeight: 150 }} className='full-width'/>
		{/* Fixed footer that slides down when "see more" section is visible */}
		<Footer/>
	</Grid>
}

export default HomePage
