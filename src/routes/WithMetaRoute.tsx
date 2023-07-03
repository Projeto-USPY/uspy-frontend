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
	element?: React.ComponentType
}

const WithMetaRoute: React.FC<WithMetaRoutePropsType> = (props: WithMetaRoutePropsType) => {
	const { title, element: ChildrenElement, description, robots, ...rest } = props
	return (
		<Route {...rest}>
			<Helmet>
				{title ? <title> {title} </title> : null}
				{description ? (
					<meta name="description" content={description} />
				) : null}
				{robots ? (
					<meta name="robots" content={robots.join(',')} />
				) : null}
			</Helmet>
			<ChildrenElement />
		</Route>
	)
}

export default WithMetaRoute
