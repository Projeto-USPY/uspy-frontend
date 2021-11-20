import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Card from '@material-ui/core/Card'
import CircularProgress from '@material-ui/core/CircularProgress'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import { Offering } from 'types/Offering'
import { Subject } from 'types/Subject'

import Breadcrumb from 'components/Breadcrumb'
import OfferingReviewsPanel from 'components/Offerings/OfferingReviewsPanel'
import OfferingsList from 'components/Offerings/OfferingsList'
import OfferingContext from 'contexts/OfferingContext'
import { getBreadcrumbLinks, URLParameter } from 'pages/OfferingsPage'

const GrayCard = withStyles({
	root: {
		backgroundColor: '#FAFAFA'
	}
})(Card)

/* const offeringss = [
	{
		professor: 'Kalinka Castelo Branco',
		code: 'fjdsalfjdksljfkldsa',
		years: ['2020', '2017', '2016'],
		approval: 0.4,
		neutral: 0.1,
		disapproval: 0.5
	},
	{
		professor: 'João do Espírito Santo Batista De Mattos',
		code: 'fjdsalfjdksljfkldsadfs',
		years: ['2020', '2021', '2019', '2015', '2014', '2013'],
		approval: 0.6,
		neutral: 0.1,
		disapproval: 0.3
	},
	{
		professor: 'Abacaxi',
		code: 'fjdsalxdsjdksljfkldsadfs',
		years: ['2020', '2019', '2018'],
		approval: 0.6,
		neutral: 0.1,
		disapproval: 0.3
	},
	{
		professor: 'Abacaxi',
		code: 'fjdsalxdsjdksljfkldsa1dfs',
		years: ['2020', '2019', '2018'],
		approval: 0.6,
		neutral: 0.1,
		disapproval: 0.3
	},
	{
		professor: 'Abacaxi',
		code: 'fjdsalxdsjdksljfkl2dsadfs',
		years: ['2020', '2019', '2018'],
		approval: 0.6,
		neutral: 0.1,
		disapproval: 0.3
	},
	{
		professor: 'Abacaxi',
		code: 'fjdsalxdsjdksljf3kldsadfs',
		years: ['2020', '2019', '2018'],
		approval: 0.6,
		neutral: 0.1,
		disapproval: 0.3
	},
	{
		professor: 'Abacaxi',
		code: 'fjdsalxdsjdk4sljfkldsadfs',
		years: ['2020', '2019', '2018'],
		approval: 0.6,
		neutral: 0.1,
		disapproval: 0.3
	},
	{
		professor: 'Abacaxi',
		code: 'fjdsalxdsjd5ksljfkldsadfs',
		years: ['2020', '2019', '2018'],
		approval: 0.6,
		neutral: 0.1,
		disapproval: 0.3
	},
	{
		professor: 'Abacaxi',
		code: 'fjdsalxdsj6dksljfkldsadfs',
		years: ['2020', '2019', '2018'],
		approval: 0.6,
		neutral: 0.1,
		disapproval: 0.3
	},
	{
		professor: 'Abacaxi',
		code: 'fjdsalxdsjdksljfkld7sadfs',
		years: ['2020', '2019', '2018'],
		approval: 0.6,
		neutral: 0.1,
		disapproval: 0.3
	},
	{
		professor: 'Abacaxi',
		code: 'fjdsalxdsjdksl8jfkldsadfs',
		years: ['2020', '2019', '2018'],
		approval: 0.6,
		neutral: 0.1,
		disapproval: 0.3
	},
	{
		professor: 'Abacaxi',
		code: 'fjdsalxdsjdksljfk9ldsadfs',
		years: ['2020', '2019', '2018'],
		approval: 0.6,
		neutral: 0.1,
		disapproval: 0.3
	},
	{
		professor: 'Abacaxi',
		code: 'fjdsalxds11jdksljfkldsadfs',
		years: ['2020', '2019', '2018'],
		approval: 0.6,
		neutral: 0.1,
		disapproval: 0.3
	},
	{
		professor: 'Abacaxi',
		code: 'fjdsalxd12sjdksljfkldsadfs',
		years: ['2020', '2019', '2018'],
		approval: 0.6,
		neutral: 0.1,
		disapproval: 0.3
	}
] */

interface PropsType {
    subject: Subject | null
    offerings: Offering[] | null
}

const Desktop: React.FC<PropsType> = ({ offerings, subject }) => {
	const [selectedOffering, setSelectedOffering] = useState<Offering | null>(null)
	useEffect(() => {
		if (selectedOffering === null && offerings) {
			setSelectedOffering(offerings[0])
		}
	}, [offerings])

	const { course, specialization, code } = useParams<URLParameter>()

	const isLoading = subject === null || offerings === null

	return <Container maxWidth='xl' className='full-height'>
		<Grid container direction="column" className='full-height'>
			<Grid item container alignItems='center' xs="auto" style={{ height: '50px' }}>
				<Breadcrumb links={getBreadcrumbLinks(course, specialization, code)}/>
			</Grid>
			{isLoading
				? <Grid container justify='center'> <CircularProgress/> </Grid>
				: <Grid item xs container direction="column">
					<Grid item xs="auto">
						<Typography variant="h4"> Oferecimentos de {subject?.name} </Typography>
						<br/>
					</Grid>
					<Grid item xs spacing={2} container alignItems='stretch'>
						<Grid item xs={3}>
							<GrayCard elevation={3} raised className='full-height not-so-gray' style={{ position: 'relative' }}>
								<div className='full-width full-height' style={{ position: 'absolute', overflow: 'auto' }}>
									<OfferingsList list={offerings} selected={selectedOffering} setSelected={setSelectedOffering}/>
								</div>
							</GrayCard>
						</Grid>
						<Grid item xs={9}>
							<GrayCard elevation={3} raised className='full-height not-so-gray'>
								<OfferingContext.Provider value={{
									professor: selectedOffering?.code,
									course,
									specialization,
									code
								}}>
									<OfferingReviewsPanel />
								</OfferingContext.Provider>
							</GrayCard>
						</Grid>
					</Grid>
				</Grid>
			}
		</Grid>
	</Container>
}

export default Desktop
