import React from 'react'

import { useTheme } from '@material-ui/core/styles'

interface PropsType {
	size: number
	color?: 'primary' | 'secondary'
}

const Circle: React.FC<PropsType> = ({
	size,
	children,
	color = 'secondary',
}) => {
	const theme = useTheme()

	const circleStyle = {
		height: size,
		width: size,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
		border: '1px solid blue',
		borderRadius: '50%',
		borderColor: theme.palette[color].main,
		color: theme.palette[color].main,
	}

	return <div style={circleStyle}>{children}</div>
}

export default Circle
