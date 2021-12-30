import React from 'react'

import Grid from '@material-ui/core/Grid'
import { useTheme } from '@material-ui/core/styles'

import Circle from 'components/Circle'

interface Props {
	title: string
	value: number
}

const CreditsIndicator: React.FC<Props> = ({ title, value }) => {
	const theme = useTheme()

	return <Grid container spacing={0} alignItems='center' justify='center' direction='column'>
		<span style={{ color: theme.palette.secondary.main }}>{title}</span>
		<Circle size={40}> <div> {value} </div> </Circle>
	</Grid>
}

export default CreditsIndicator
