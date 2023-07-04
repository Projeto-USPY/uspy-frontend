import React, { memo } from 'react'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

interface props {
	message: string
	height: number
	action?: () => void
	actionTitle?: string
}

const MessagePanel: React.FC<props> = ({
	message,
	height,
	action,
	actionTitle,
}) => {
	const style: React.CSSProperties = {
		height,
		flexGrow: 1,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
		border: '1px solid #BBBBBB',
		boxShadow: 'inset 0 0 3px 1px #BBBBBB',
		padding: '5px',
	}
	return (
		<Grid container justify="center" alignItems="stretch">
			<div style={style}>
				<Typography variant="body2"> {message} </Typography>
				{action ? (
					<>
						<br />
						<Button
							onClick={action}
							color="primary"
							variant="contained">
							{' '}
							{actionTitle}{' '}
						</Button>
					</>
				) : null}
			</div>
		</Grid>
	)
}

export default memo(MessagePanel)
