import React from 'react'
import { RouteProps, Route, Redirect } from 'react-router'

/*
	This is a wrapper of a route with the middleware of login
*/

const LoggedInRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
	const authenticated = false
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

export default LoggedInRoute
