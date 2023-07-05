import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { RouteProps, Route, Redirect } from 'react-router'

import { AppState } from 'types/redux'
import { unknownUser, guestUser } from 'types/User'

const mapStateToProps = (state: AppState) => ({
	user: state.user,
})
const connector = connect(mapStateToProps)

type LoggedOutRouteProps = ConnectedProps<typeof connector> & RouteProps

// This redirects to the home page if the user is logged in
const LoggedOutRoute = ({ user, ...rest }: LoggedOutRouteProps) => {
	if (user === unknownUser)
		return null // Render nothing, because what we have means that we are waiting for the account/profile request
	else if (user !== guestUser) {
		return (
			<Redirect
				to={{
					pathname: '/',
				}}
			/>
		)
	} else return <Route {...rest} />
}


export default connector(LoggedOutRoute)
