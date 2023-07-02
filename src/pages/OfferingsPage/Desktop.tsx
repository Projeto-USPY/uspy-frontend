import React from 'react'
import { useParams, useHistory } from 'react-router-dom'

import Card from '@material-ui/core/Card'
import CircularProgress from '@material-ui/core/CircularProgress'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import { Offering } from 'types/Offering'
import { Subject } from 'types/Subject'

import Breadcrumb from 'components/Breadcrumb'
import OfferingReviewsPanel from 'components/offerings/OfferingReviewsPanel'
import OfferingsList from 'components/offerings/OfferingsList'
import OfferingContext from 'contexts/OfferingContext'
import { buildURI, getBreadcrumbLinks, URLParameter } from 'pages/OfferingsPage'
import { User } from 'types/User'

const GrayCard = withStyles({
	root: {
		backgroundColor: '#FAFAFA',
	},
})(Card)

interface PropsType {
	subject: Subject | null
	offerings: Offering[] | null
	selectedOffering: Offering | null
	user: User
}

const Desktop: React.FC<PropsType> = ({
	offerings,
	subject,
	selectedOffering,
	user,
}) => {
	const { course, specialization, code } = useParams<URLParameter>()
	const history = useHistory()

	const handleSelectOffering = (o: Offering) => {
		history.replace(buildURI(course, specialization, code, o.code))
	}

	const isLoading = subject === null || offerings === null

	return (
		<Container maxWidth="xl" className="full-height">
			<Grid
				container
				spacing={2}
				direction="column"
				className="full-height">
				<Grid
					item
					container
					alignItems="center"
					xs="auto"
					style={{ height: '50px' }}>
					<Breadcrumb
						links={getBreadcrumbLinks(course, specialization, code)}
					/>
				</Grid>
				{isLoading ? (
					<Grid container justify="center">
						{' '}
						<CircularProgress />{' '}
					</Grid>
				) : (
					<Grid item xs container direction="column">
						<Grid item xs="auto">
							<Typography variant="h4">
								{' '}
								Oferecimentos de {subject?.name}{' '}
							</Typography>
							<br />
						</Grid>
						<Grid
							item
							xs
							spacing={2}
							container
							alignItems="stretch">
							<Grid item xs={3}>
								<GrayCard
									elevation={3}
									raised
									className="full-height not-so-gray"
									style={{ position: 'relative' }}>
									<div
										className="full-width full-height"
										style={{
											position: 'absolute',
											overflow: 'auto',
										}}>
										<OfferingsList
											list={offerings}
											selected={selectedOffering}
											setSelected={handleSelectOffering}
										/>
									</div>
								</GrayCard>
							</Grid>
							<Grid item xs={9}>
								<GrayCard
									elevation={3}
									raised
									className="full-height not-so-gray">
									<OfferingContext.Provider
										value={{
											professor: selectedOffering?.code,
											course,
											specialization,
											code,
										}}>
										<OfferingReviewsPanel user={user} />
									</OfferingContext.Provider>
								</GrayCard>
							</Grid>
						</Grid>
					</Grid>
				)}
			</Grid>
		</Container>
	)
}

export default Desktop
