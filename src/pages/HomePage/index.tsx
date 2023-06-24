import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom'

import Container from '@material-ui/core/Container'
import Fab from '@material-ui/core/Fab'
import Grid from '@material-ui/core/Grid'
import { useTheme } from '@material-ui/core/styles'
import SvgIcon from '@material-ui/core/SvgIcon'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import NavigationIcon from '@material-ui/icons/Navigation'

import Footer from 'components/Footer'
import GeneralSearch from 'components/GeneralSearch'
import Landing from 'components/Landing'
import Navbar from 'components/Navbar'
import { buildURI as buildSubjectPageURI } from 'pages/SubjectPage'

import './style.css'
import Typography from '@material-ui/core/Typography'

import logo from 'images/logo.svg'
import { ReactComponent as ArrowDownIcon } from 'images/arrow-down.svg'

export function buildURI(): string {
	return '/'
}

export function getMeta(): any {
	return {
		title: 'USPY',
		description: `Procure por disciplinas e veja seus oferecimentos, requisitos, distribuição de médias, e muito mais.
Avalie professores, veja seu histórico escolar, tudo em uma plataforma centralizada e fácil de usar!`,
		robots: ['index', 'follow'],
	}
}

const HomePage = () => {
	const theme = useTheme()
	const isLarge = useMediaQuery(theme.breakpoints.up('sm'))

	const history = useHistory()
	const clickItem = (
		courseCode: string,
		courseSpecialization: string,
		code: string,
	) => {
		history.push(
			buildSubjectPageURI(courseCode, courseSpecialization, code),
		)
	}

	const seeMoreRef = useRef(null)
	// const [showSearch, setShowSearch] = useState<boolean>(false)
	return (
		<>
			<Grid
				container
				direction="column"
				justify="center"
				style={{ height: '100vh', width: '100%' }}
			>
				<Grid item>
					<Navbar />
					<div style={{ height: '64px' }}></div>
				</Grid>
				<Grid
					item
					container
					direction="column"
					justify="space-around"
					alignItems="stretch"
					style={{ gap: '30px' }}
				>
					<Grid
						item
						container
						direction="column"
						justify="center"
						alignItems="center"
					>
						<Grid item>
							<img
								width={isLarge ? 350 : '100%'}
								src={logo}
								style={{
									marginBottom: '15px',
									minWidth: '250px',
								}}
							/>
						</Grid>
						<GeneralSearch handleChange={clickItem} />
					</Grid>
					<Grid
						item
						container
						direction="column"
						alignItems="center"
						style={{ gap: '15px' }}
					>
						<div className="hor-centered">
							<Fab
								size="small"
								className="point-arrow-down-parent"
								color="primary"
								onClick={() => {
									seeMoreRef.current.scrollIntoView({
										behavior: 'smooth',
									})
								}}
							>
								<SvgIcon
									className="point-arrow-down-child"
									component={ArrowDownIcon}
									viewBox="0 0 64 64"
								/>
							</Fab>
						</div>
						<Typography color="primary"> Saber mais </Typography>
					</Grid>
				</Grid>
			</Grid>
			<Container>
				<div ref={seeMoreRef}>
					<Landing />
				</div>
			</Container>
			<Grid>
				<Footer />
			</Grid>

			<Fab
				size={isLarge ? 'large' : 'small'}
				onClick={() => {
					scrollTo({ left: 0, top: 0, behavior: 'smooth' })
				}}
				variant="circular"
				color="primary"
				style={{
					margin: 0,
					top: 'auto',
					right: 20,
					bottom: 20,
					left: 'auto',
					position: 'fixed',
				}}
			>
				<NavigationIcon />
			</Fab>
		</>
	)
}

export default HomePage
