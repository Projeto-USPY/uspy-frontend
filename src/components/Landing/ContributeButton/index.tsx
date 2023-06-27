import React from 'react'
import './style.css'

import { useTheme } from '@material-ui/core/styles'

interface PropsType {
	text: string
	url: string
}

const ContributeButton: React.FC<PropsType> = ({ text, url }) => {
	const theme = useTheme()
	return (
		<button
			className="btn"
			style={{ backgroundColor: theme.palette.primary.main }}
		>
			<a href={url}>{text}</a>
		</button>
	)
}

export default ContributeButton
