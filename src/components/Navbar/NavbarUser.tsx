import React, { useState, memo, useRef } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { Dispatch, bindActionCreators, ActionCreator } from 'redux'

import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Toolbar from '@material-ui/core/Toolbar'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

import { ReduxAction } from 'types/redux'

import { setUserNone } from 'actions'
import api from 'API'
import SimpleConfirmationDialog from 'components/SimpleConfirmationDialog'
import { useMySnackbar } from 'hooks'
import Logo from 'images/navbar_logo.svg'

interface UserMenuProps {
	open: boolean
	anchor: HTMLElement | null
	setOpen: React.Dispatch<React.SetStateAction<boolean>>
	setUserNone?: ActionCreator<ReduxAction>
}

let UserMenu: React.FC<UserMenuProps> = ({ open, anchor, setOpen, setUserNone }) => {
	const history = useHistory()
	const notify = useMySnackbar()
	const [confirmationDialogOpen, setConfirmationDialogOpen] = useState<boolean>(false)

	const menuStyle = {
		minWidth: '100px'
	}
	const handleLogout = () => {
		notify('Sessão encerrada', 'info')
		api.logout()
		setUserNone()
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
		<MenuItem onClick={() => history.push('/Perfil')} style={menuStyle}> Perfil </MenuItem>
		<MenuItem onClick={() => setConfirmationDialogOpen(true)} style={menuStyle}> Logout </MenuItem>
		<SimpleConfirmationDialog
			title="Tem certeza que deseja sair?"
			cancelText="Cancelar"
			confirmText="Sim"
			open={confirmationDialogOpen}
			cancelCallback={() => setConfirmationDialogOpen(false)}
			confirmCallback={handleLogout}
		/>
	</Menu>
}
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ setUserNone }, dispatch)
UserMenu = connect(null, mapDispatchToProps)(UserMenu)

const Navbar: React.FC = () => {
	const [menuOpen, setMenuOpen] = useState<boolean>(false)
	const anchorRef = useRef<HTMLButtonElement>(null)

	const history = useHistory()

	const goHome = () => {
		if (history.location.pathname !== '/') history.push('/')
	}

	const menuIcon = <>
		<IconButton size='medium' ref={anchorRef} style={{ color: 'white' }} aria-label="Menu" onClick={() => setMenuOpen(true)}>
			<AccountCircleIcon />
		</IconButton>
	</>

	return <Toolbar className="toolbar">
		<img src={Logo} style={{ marginTop: '-.5rem', cursor: 'pointer' } } height={30} onClick={goHome} />
		{menuIcon}
		<UserMenu anchor={anchorRef.current} open={menuOpen} setOpen={setMenuOpen}/>
	</Toolbar>
}

export default memo(connect(null, mapDispatchToProps)(Navbar))
