import React from 'react'

import Grid from '@material-ui/core/Grid'
import { useTheme } from '@material-ui/core/styles'

interface Props {
	title: string
	value: number
}

const CreditsIndicator: React.FC<Props> = ({ title, value }) => {
	const theme = useTheme()

	const circleStyle = {
		height: '40px',
		width: '40px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
		border: '0.07rem solid blue',
		borderRadius: '50%',
		borderColor: theme.palette.secondary.main,
		color: theme.palette.secondary.main
	}
	return <Grid container spacing={0} alignItems='center' justify='center' direction='column'>
		<span style={{ color: theme.palette.secondary.main }}>{title}</span>
		<div style={circleStyle}> <div> {value} </div> </div>
	</Grid>
}

export default CreditsIndicator
