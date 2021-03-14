import React from 'react'

import { useTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import './style.css'
interface FooterProps {
	text: string
}

const Navbar: React.FC<FooterProps> = ({
	text
}) => {
	const theme = useTheme()
	return <div className='footer' style={{
		backgroundColor: theme.palette.primary.main
	}}>
		<Typography variant='body2'> {text} </Typography>
	</div>
}

export default Navbar
