import React, { memo } from 'react'
import { connect } from 'react-redux'

import AppBar from '@material-ui/core/AppBar'

import { AppState } from 'types/redux'
import { User, unknownUser, guestUser } from 'types/User'

import HideOnScroll from 'components/HideOnScroll'
import NavbarGuest from 'components/Navbar/NavbarGuest'
import NavbarUser from 'components/Navbar/NavbarUser'

interface NavbarProps {
	user: User
}

const Navbar: React.FC<NavbarProps> = ({ user, ...props }) => {
	return <HideOnScroll direction='down' appearsWhen={['top', 'scroll-up']} {...props}>
		<AppBar color='primary'>
			{user === unknownUser || user === guestUser ? <NavbarGuest/> : <NavbarUser/>}
		</AppBar>
	</HideOnScroll>
}

const mapStateToProps = (state: AppState) => ({ user: state.user })

export default memo(connect(mapStateToProps)(Navbar))
