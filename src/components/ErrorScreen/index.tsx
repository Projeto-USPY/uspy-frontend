import React from 'react'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { useTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import BreadCrumb from 'components/Breadcrumb'
import BugIllustration from 'images/bug_illustration.svg'

interface BreadcrumbLink {
    text: string
    url: string
}

interface PropsType {
    message: string
    breadcrumbs?: BreadcrumbLink[]
}

const ErrorScreen: React.FC<PropsType> = ({ message, breadcrumbs }) => {
	const theme = useTheme()
	const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))

	return <Container>
		<Grid container direction='column'>
			<Grid container alignItems='center' style={{ height: '50px' }}>
				{breadcrumbs
					? <BreadCrumb links={breadcrumbs} /> : null
				}
			</Grid>
			<Grid item container direction='column' justify='center' alignItems='center'>
				<Grid item>
					<Typography variant={isDesktop ? 'h4' : 'h5'} align='center'> {message} </Typography>
					<br/>
				</Grid>
				<Grid item>
					<img src={BugIllustration} height={200} />
				</Grid>
			</Grid>
		</Grid>
	</Container>
}

export default ErrorScreen
