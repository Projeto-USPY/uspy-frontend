import React from 'react'
import { Link } from 'react-router-dom'

import MUIBreadcrumb from '@material-ui/core/Breadcrumbs'
import Typography from '@material-ui/core/Typography'

interface MyLink {
	text: string
	url: string
}
interface Props {
	links: MyLink[]
}
const Breadcrumb: React.FC<Props> = ({ links }) => {
	return <MUIBreadcrumb separator={'>'}>
		{links.map((link, idx) => {
			return <Link key={idx} to={link.url}> <Typography variant='body1' color='secondary'> <strong>{link.text}</strong>
			</Typography> </Link>
		})}
	</MUIBreadcrumb>
}

export default Breadcrumb
