import React, { memo, PropsWithChildren, ReactElement } from 'react'
import { connect, ConnectedProps } from 'react-redux'

import AppBar from '@material-ui/core/AppBar'
import Slide from '@material-ui/core/Slide'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'

import { AppState } from 'types/redux'
import { unknownUser, guestUser } from 'types/User'

import NavbarGuest from 'components/Navbar/NavbarGuest'
import NavbarUser from 'components/Navbar/NavbarUser'

const HideOnScroll: React.FC<PropsWithChildren> = ({ children }) => {
	const trigger = useScrollTrigger()

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children as ReactElement}
		</Slide>
	)
}

const mapStateToProps = (state: AppState) => ({ user: state.user })
const connector = connect(mapStateToProps)

type NavbarProps = ConnectedProps<typeof connector>

const Navbar = ({ user, ...props }: NavbarProps) => {
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

export default memo(connector(Navbar))
