import React, { useState, memo, useRef } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { Dispatch, bindActionCreators } from 'redux'

import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

import { setUserNone } from 'actions'
import Logo from 'images/navbar_logo.svg'
import { buildURI as buildHomePageURI } from 'pages/HomePage'
import UserMenu from 'components/Navbar/UserMenu'

const mapDispatchToProps = (dispatch: Dispatch) =>
	bindActionCreators({ setUserNone }, dispatch)

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState<boolean>(false)
	const anchorRef = useRef<HTMLButtonElement>(null)

	const history = useHistory()

	const goHome = () => {
		if (history.location.pathname !== buildHomePageURI())
			history.push(buildHomePageURI())
	}

	const menuIcon = (
		<>
			<IconButton
				size="medium"
				ref={anchorRef}
				style={{ color: 'white' }}
				aria-label="Menu"
				onClick={() => setMenuOpen(true)}
			>
				<AccountCircleIcon />
			</IconButton>
		</>
	)

	return <Toolbar className="toolbar">
		<img
			src={Logo}
			style={{ marginTop: '-.5rem', cursor: 'pointer' }}
			height={30}
			onClick={goHome}
		/>
		{menuIcon}
		<UserMenu
			anchor={anchorRef.current}
			open={menuOpen}
			setOpen={setMenuOpen}
		/>
	</Toolbar>
}

export default memo(connect(null, mapDispatchToProps)(Navbar))
