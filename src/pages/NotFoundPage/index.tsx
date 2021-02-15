import React from 'react'
import Navbar from 'components/Navbar'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Footer from 'components/Footer'
import DetectiveImage from './detective.svg'

const NotFoundPage = () => {
	return <div className="main">
		<main>
			<Navbar/>
			<div style={{ height: '150px' }}></div>

			<Container>
				<Grid container justify='center' alignItems='center' direction='column'>
					<Grid item>
						<Typography variant='h4'> Opss... Essa página não foi encontrada (404) </Typography>
						<br/>
					</Grid>
					<Grid item>
						<img src={DetectiveImage} height={200}/>
					</Grid>
				</Grid>

			</Container>
		</main>
		<Footer text='Made with love by Preischadt and Turci'/>
	</div>
}

export default NotFoundPage
