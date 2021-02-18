import React, { useState, memo, useRef } from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import { useHistory } from 'react-router-dom'

import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

interface UserMenuProps {
	open: boolean
	anchor: HTMLElement | null
	setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const UserMenu: React.FC<UserMenuProps> = ({ open, anchor, setOpen }) => {
	const history = useHistory()

	const menuStyle = {
		minWidth: '100px'
	}
	return <Menu
		open={open}
		anchorEl={anchor}
		onClose={() => setOpen(false)}
		transformOrigin={{
			vertical: -60,
			horizontal: 'left'
		}}
	>
		<MenuItem onClick={() => history.push('/Perfil')} style={menuStyle}> Perfil  </MenuItem>
		<MenuItem onClick={() => alert('TODO Logout')} style={menuStyle}> Logout </MenuItem>
	</Menu>
}

const Navbar: React.FC = () => {
	const theme = useTheme()
	const isLarge = useMediaQuery(theme.breakpoints.up('sm'))
	const [menuOpen, setMenuOpen] = useState<boolean>(false)
	const anchorRef = useRef<HTMLButtonElement>(null)
	console.log(isLarge)

	const menuIcon = <>
		<IconButton size='medium' ref={anchorRef} style={{ color: 'white' }} aria-label="Menu" onClick={() => setMenuOpen(true)}>
			<AccountCircleIcon />
		</IconButton>
	</>

	return <Toolbar className="toolbar">
		<Typography variant="h6">Jupiter++</Typography>
		{menuIcon}
		<UserMenu anchor={anchorRef.current} open={menuOpen} setOpen={setMenuOpen}/>
	</Toolbar>
}

export default memo(Navbar)
