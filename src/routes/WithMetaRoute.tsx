import React from 'react'
import { Helmet } from 'react-helmet'
import { RouteProps, Route } from 'react-router'
/*
	This is a wrapper of a route with an additional meta description
*/

interface WithMetaRoutePropsType extends RouteProps {
	title?: string
	description?: string
	robots?: string[]
}

const WithMetaRoute: React.FC<WithMetaRoutePropsType> = ({ title, description, robots, ...rest }) => {
	return <Route {...rest} component={null}>
		<Helmet>
			{title ? <title> {title} </title> : null}
			{description ? <meta name="description" content={description} /> : null}
			{robots ? <meta name="robots" content={robots.join(',')}/> : null}
		</Helmet>
		<rest.component/>
	</Route>
}

export default WithMetaRoute
