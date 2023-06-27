import React, { memo } from 'react'
import { connect } from 'react-redux'

import AppBar from '@material-ui/core/AppBar'
import Slide from '@material-ui/core/Slide'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'

import { AppState } from 'types/redux'
import { User, unknownUser, guestUser } from 'types/User'

import NavbarGuest from 'components/Navbar/NavbarGuest'
import NavbarUser from 'components/Navbar/NavbarUser'

const HideOnScroll: React.FC<any> = ({ children }) => {
	const trigger = useScrollTrigger()

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	)
}

interface NavbarProps {
	user: User
}

const Navbar: React.FC<NavbarProps> = ({ user, ...props }) => {
	return (
		<HideOnScroll {...props}>
			<AppBar color="primary">
				{user === unknownUser || user === guestUser ? (
					<NavbarGuest />
				) : (
					<NavbarUser />
				)}
			</AppBar>
		</HideOnScroll>
	)
}

const mapStateToProps = (state: AppState) => ({ user: state.user })

export default memo(connect(mapStateToProps)(Navbar))
