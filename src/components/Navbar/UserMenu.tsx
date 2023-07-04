import { Dispatch, bindActionCreators } from 'redux'

import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

import { setUserNone } from 'actions'
import api from 'API'
import SimpleConfirmationDialog from 'components/SimpleConfirmationDialog'
import { useMySnackbar } from 'hooks'
import { buildURI as buildProfilePageURI } from 'pages/ProfilePage'
import { buildURI as buildAccountPageURI } from 'pages/SettingsPage'
import { ConnectedProps, connect } from 'react-redux'
import { useHistory } from 'react-router'
import React, { useState } from 'react'

const mapDispatchToProps = (dispatch: Dispatch) =>
	bindActionCreators({ setUserNone }, dispatch)

const connector = connect(null, mapDispatchToProps)
interface UserMenuProps extends ConnectedProps<typeof connector> {
	open: boolean
	anchor: HTMLElement | null
	setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const UserMenu = ({ open, anchor, setOpen, setUserNone }: UserMenuProps) => {
	const history = useHistory()
	const notify = useMySnackbar()
	const [confirmationDialogOpen, setConfirmationDialogOpen] =
		useState<boolean>(false)

	const menuStyle = {
		minWidth: '100px',
	}
	const handleLogout = () => {
		notify('Sessão encerrada', 'info')
		api.logout()
		setUserNone()
	}
	return (
		<Menu
			open={open}
			anchorEl={anchor}
			onClose={() => setOpen(false)}
			transformOrigin={{
				vertical: -60,
				horizontal: 'left',
			}}>
			<MenuItem
				onClick={() => history.push(buildProfilePageURI())}
				style={menuStyle}>
				{' '}
				Perfil{' '}
			</MenuItem>
			<MenuItem
				onClick={() => history.push(buildAccountPageURI())}
				style={menuStyle}>
				{' '}
				Conta{' '}
			</MenuItem>
			<MenuItem
				onClick={() => setConfirmationDialogOpen(true)}
				style={menuStyle}>
				{' '}
				Logout{' '}
			</MenuItem>
			<SimpleConfirmationDialog
				title="Tem certeza que deseja sair?"
				cancelText="Cancelar"
				confirmText="Sim"
				open={confirmationDialogOpen}
				cancelCallback={() => setConfirmationDialogOpen(false)}
				confirmCallback={handleLogout}
			/>
		</Menu>
	)
}
export default connector(UserMenu)
