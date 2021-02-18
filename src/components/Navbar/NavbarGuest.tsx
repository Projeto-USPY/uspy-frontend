import React, { useState, memo } from 'react'
import { useHistory } from 'react-router-dom'

import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Collapse from '@material-ui/core/Collapse'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import './style.css'
import { ButtonGroup } from '@material-ui/core'

const buttonsGuest = [{ title: 'Login', route: '/Login' }, { title: 'Cadastrar', route: '/Cadastro' }]

const Navbar: React.FC = () => {
	const theme = useTheme()
	const history = useHistory()
	const isLarge = useMediaQuery(theme.breakpoints.up('sm'))
	const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false)

	if (isLarge && isMobileMenuVisible) setIsMobileMenuVisible(false)
	const buttonsDiv = <>
		<div>
			{buttonsGuest.map((props, idx) => <Button className="h100" color="inherit" key={idx} onClick={() => history.push(props.route)}>{props.title}</Button>)}
		</div>
	</>
	const menuIcon = <>
		<IconButton style={{ color: 'white' }} aria-label="Menu" onClick={() => setIsMobileMenuVisible(!isMobileMenuVisible)}>
			<MenuIcon />
		</IconButton>
	</>

	const mobileMenu = <>
		<Collapse in={isMobileMenuVisible}>
			<Paper variant="outlined" square>
				<ButtonGroup orientation="vertical" className="w100" color='primary'>
					{buttonsGuest.map((props, idx) => <Button className="w100" key={idx} onClick={() => history.push(props.route)}> {props.title}</Button>)}
				</ButtonGroup>
			</Paper>
		</Collapse>
	</>
	return <>
		<Toolbar className="toolbar">
			<Typography variant="h6">Jupiter++</Typography>
			{isLarge ? buttonsDiv : menuIcon}
		</Toolbar>
		{ mobileMenu }
	</>
}

export default memo(Navbar)
