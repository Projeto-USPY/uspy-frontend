import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import Container from '@material-ui/core/Container'
import { useTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import Footer from 'components/Footer'
import GeneralSearch from 'components/GeneralSearch'
import Navbar from 'components/Navbar'
import withSearchData from 'HOCs/withSearchData'
import logo from 'images/logo.svg'
import './style.css'

const HomePage = () => {
	const theme = useTheme()
	const isLarge = useMediaQuery(theme.breakpoints.up('sm'))

	const history = useHistory()
	const clickItem = (courseCode: string, courseSpecialization: string, code: string) => {
		history.push(`/Disciplinas/${courseCode}/${courseSpecialization}/${code}`)
	}
	return <>
		<div className='main'>
			<main>
				<Navbar/>
				<Container style={{ backgroundColor: 'secondary' }}>
					<div style={{ height: '150px' }}></div>
					<center><img style={{ padding: '0 auto' }} width={isLarge ? 350 : '75%'} src={logo}/></center>
					{/* <Typography align='justify' variant='body1'>O {'<placeholder nome>'} é um sistema colaborativo em que você pode consultar estatísticas e reviews sobre disciplinas e professores do ICMC. Para colaborar, você deve submeter um PDF do seu resumo escolar, mas fique tranquilo, todos os dados são anônimos, criptografados e armazenados sigilosamente. Para começar, inscreva-se com seu email USP, ou faça login.</Typography> */}
					{withSearchData(<GeneralSearch handleChange={clickItem} />)}

					<div className='other-links'>
						{/* <Link to='/Professores'> <Typography variant='caption' color='secondary'>Ver lista de professores</Typography> </Link> */}
						<Link to='/Disciplinas'> <Typography variant='caption' color='secondary'>Ver lista de disciplinas</Typography> </Link>
					</div>
				</Container>
			</main>
			<Footer text='Made with love by Preischadt and Turci'/>
		</div>
	</>
}

export default HomePage
