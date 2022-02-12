import React from 'react'
import { Helmet } from 'react-helmet'

interface MetaInfoPropsType {
	title?: string
	description?: string
	robots?: string[]
}

const MetaInfo: React.FC<MetaInfoPropsType> = ({ title, description, robots }) => {
	return <Helmet>
		{title ? <title> {title} </title> : null}
		{description ? <meta name="description" content={description} /> : null}
		{robots ? <meta name="robots" content={robots.join(',')}/> : null}
	</Helmet>
}

export default MetaInfo
