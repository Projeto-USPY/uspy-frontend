import React from 'react'
import { RouteProps, Route, Redirect } from 'react-router'
import { connect } from 'react-redux'
import { AppState } from 'types/redux'

/*
	This is a wrapper of a route with the middleware of login
*/

interface LoggedInRouteProps extends RouteProps {
	authenticated: boolean
}

const LoggedInRoute: React.FC<LoggedInRouteProps> = ({ children, authenticated, ...rest }) => {
	return <Route
		{...{
			...rest,
			component: null
		}}
		render={({ history, location, match }) =>
			authenticated ? (
				<rest.component history={history} location={location} match={match}/>
			) : (
				<Redirect
					to={{
						pathname: '/Login',
						state: { from: location }
					}}
				/>
			)
		}
	/>
}

const mapStateToProps = (state: AppState) => ({
	authenticated: !!state.user.id
})

export default connect(mapStateToProps)(LoggedInRoute)
