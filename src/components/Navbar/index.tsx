import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Collapse from '@material-ui/core/Collapse'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import Slide from '@material-ui/core/Slide'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import './style.css'
import { ButtonGroup } from '@material-ui/core'

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
	const theme = useTheme()
	const isLarge = useMediaQuery(theme.breakpoints.up('sm'))

	const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false)

	if (isLarge && isMobileMenuVisible) setIsMobileMenuVisible(false)
	const buttonsDiv = <>
		<div>
			{buttons.map((title, idx) => <Button className="h100" color="inherit" key={idx}>{title}</Button>)}
		</div>
	</>
	const menuIcon = <>
		<IconButton color="secondary" aria-label="Menu" onClick={() => setIsMobileMenuVisible(!isMobileMenuVisible)}>
			<MenuIcon />
		</IconButton>
	</>

	const mobileMenu = <>
		<Collapse in={isMobileMenuVisible}>
			<Paper variant="outlined" square>
				<ButtonGroup orientation="vertical" className="w100" color='primary'>
					{buttons.map((title, idx) => <Button className="w100" key={idx}>{title}</Button>)}
				</ButtonGroup>
			</Paper>
		</Collapse>
	</>
	return <HideOnScroll {...props}>
		<AppBar color='primary'>
			<Toolbar className="toolbar">
				<Typography variant="h6">Jupiter++</Typography>
				{isLarge ? buttonsDiv : menuIcon}
			</Toolbar>
			{mobileMenu}
		</AppBar>
	</HideOnScroll>
}

export default Navbar
