import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Slide from '@material-ui/core/Slide'
import './style.css'

const HideOnScroll: React.FC<any> = ({
	children
}) => {
	const trigger = useScrollTrigger()

	return <Slide appear={false} direction="down" in={!trigger}>
		{children}
	</Slide>
}

interface NavbarProps {
	buttons: string[]
}

const Navbar: React.FC<NavbarProps> = (props) => {
	const { buttons } = props
	return <HideOnScroll {...props}>
		<AppBar color='primary'>
			<Toolbar className="toolbar">
				<Typography variant="h6">Scroll to Hide App Bar</Typography>
				<div>
					{buttons.map((title, idx) => <Button className="h100" color="inherit" key={idx}>{title}</Button>)}
				</div>
			</Toolbar>

		</AppBar>
	</HideOnScroll>
}

export default Navbar
