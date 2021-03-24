import React, { memo } from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

interface props {
	message: string
	height: number
}

const MessagePanel: React.FC<props> = ({ message, height }) => {
	const style = {
		height,
		flexGrow: 1,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		border: '1px solid #BBBBBB',
		boxShadow: 'inset 0 0 3px 1px #BBBBBB',
		padding: '5px'
	}
	return <Grid container justify='center' alignItems='stretch'>
		<div style={style}>
			<Typography variant='body2'> {message} </Typography>
		</div>
	</Grid>
}

export default memo(MessagePanel)
