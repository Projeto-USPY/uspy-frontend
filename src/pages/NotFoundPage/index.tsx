import React from 'react'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import Navbar from 'components/Navbar'

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
	</div>
}

export default NotFoundPage
