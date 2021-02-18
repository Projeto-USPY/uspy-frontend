import React, { memo } from 'react'
import { Dispatch, bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import AppBar from '@material-ui/core/AppBar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Slide from '@material-ui/core/Slide'

import NavbarGuest from 'components/Navbar/NavbarGuest'
import NavbarUser from 'components/Navbar/NavbarUser'

import { AppState } from 'types/redux'
import { User, unknownUser, guestUser } from 'types/User'
import { setUser } from 'actions'

const HideOnScroll: React.FC<any> = ({
	children
}) => {
	const trigger = useScrollTrigger()

	return <Slide appear={false} direction="down" in={!trigger}>
		{children}
	</Slide>
}

interface NavbarProps {
	user: User
}

const Navbar: React.FC<NavbarProps> = ({ user, ...props }) => {
	return <HideOnScroll {...props}>
		<AppBar color='primary'>
			{user === unknownUser || user === guestUser ? <NavbarGuest/> : <NavbarUser/>}
		</AppBar>
	</HideOnScroll>
}

const mapStateToProps = (state: AppState) => ({ user: state.user })
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ setUser }, dispatch)

export default memo(connect(mapStateToProps, mapDispatchToProps)(Navbar))
