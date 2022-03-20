import React from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import OfferingReviewGif from 'images/offering-review-gif.gif'
import TranscriptGif from 'images/transcript-gif.gif'

const seeMoreSectionStyle = {
	marginTop: 200
}

const SeeMore = () => {
	return <Grid container direction='column' alignItems='stretch' spacing={2}>
		<Grid item container justify='space-around' spacing={5} style={seeMoreSectionStyle}>
			<Grid item xs={12} md={7}>
				<br/><br/><br/><br/>
				<Typography variant='h4'> Avalie seus professores prediletos </Typography>
				<br/>
				<Typography style={{ fontSize: '1.5rem' }}> Compartilhe as suas opiniões e ajude outros colegas que precisam passar pelo que você já passou! </Typography>
			</Grid>
			<Grid item xs={12} md={5}>
				<Grid container justify='center'>
					<img src={OfferingReviewGif} className='see-more-image' height={400}/>
				</Grid>
			</Grid>
		</Grid>
		<Grid item container justify='space-around' spacing={5} style={seeMoreSectionStyle}>
			<Grid item xs={12} md={7}>
				<br/><br/><br/><br/>
				<Typography variant='h4'> Acompanhe seu progresso na USP </Typography>
				<br/>
				<Typography style={{ fontSize: '1.5rem' }}> O <strong>USPY</strong> oferece ferramentas para você acompanhar de pertinho a sua jornada acadêmica! </Typography>
			</Grid>
			<Grid item xs={12} md={5}>
				<Grid container justify='center'>
					<img src={TranscriptGif} className='see-more-image' height={400}/>
				</Grid>
			</Grid>
		</Grid>
	</Grid>
}

export default SeeMore
