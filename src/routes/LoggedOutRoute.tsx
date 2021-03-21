import React from 'react'
import { connect } from 'react-redux'
import { RouteProps, Route, Redirect } from 'react-router'

import { AppState } from 'types/redux'
import { User, unknownUser, guestUser } from 'types/User'

interface LoggedOutRouteProps extends RouteProps {
	user: User
}

const LoggedOutRoute: React.FC<LoggedOutRouteProps> = ({ user, ...rest }) => {
	if (user === unknownUser) return null // Render nothing, because what we have means that we are waiting for the account/profile request
	else if (user !== guestUser) {
		return <Redirect
			to={{
				pathname: '/'
			}}
		/>
	} else return <Route {...rest}/>
}

const mapStateToProps = (state: AppState) => ({
	user: state.user
})

export default connect(mapStateToProps)(LoggedOutRoute)
