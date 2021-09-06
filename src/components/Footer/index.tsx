import React from 'react'

import { useMediaQuery } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import { makeStyles, createStyles, useTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import GithubLogo from 'images/GithubLogo.svg'
import { buildURI as buildAboutPageURI } from 'pages/AboutPage'
import { buildURI as buildUseTermsPageURI } from 'pages/UseTermsPage'

import './style.css'

const useStyles = makeStyles(theme => createStyles({
	footer: {
		backgroundColor: theme.palette.primary.main,
		color: 'white',
		height: '100px'
	}
}))

const githubLink = 'https://github.com/projeto-uspy'
const text = 'Made with ❤ by Preischadt and Turci'

const Footer: React.FC = () => {
	const theme = useTheme()
	const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))
	const classes = useStyles()
	return <Grid container justify='space-evenly' alignItems='center' className={classes.footer}>
		<Grid item container alignItems='center' direction='column' xs={4}>
			<Grid item><Link href={buildUseTermsPageURI()} style={{ color: 'white' }}>Termos de Uso</Link></Grid>
			<Grid item><Link href={buildAboutPageURI()} style={{ color: 'white' }}>Sobre</Link></Grid>
		</Grid>
		<Grid item container xs={4} justify='center' alignItems='center'>
			<div className='move-up-hover-parent'>
				<img src={GithubLogo} width={36} height={36} className='cursor-pointer move-up-hover-child' onClick={() => window.open(githubLink, '_blank')}/>
			</div>
		</Grid>
		{ isDesktop
			? <Grid item container xs={4} justify='center' alignItems='center'>
				<Typography variant='body2'> {text} </Typography>
			</Grid>
			: null}
	</Grid>
}

export default Footer
