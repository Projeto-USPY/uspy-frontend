import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { Offering } from 'types/Offering'
import { Subject } from 'types/Subject'

import Breadcrumb from 'components/Breadcrumb'
import OfferingReviewsPanel from 'components/Offerings/OfferingReviewsPanel'
// import OfferingsList from 'components/Offerings/OfferingsList'
import OfferingContext from 'contexts/OfferingContext'
import { getBreadcrumbLinks, URLParameter } from 'pages/OfferingsPage'

import MobileOfferingSelector from './MobileOfferingSelector'

interface PropsType {
    subject: Subject | null
    offerings: Offering[] | null
}

const Mobile: React.FC<PropsType> = ({ offerings, subject }) => {
	const [selectedOffering, setSelectedOffering] = useState<Offering | null>(null)
	const [mobileOfferingSelectorOpen, setMobileOfferingSelectorOpen] = useState<boolean>(false)

	useEffect(() => {
		if (selectedOffering === null && offerings) {
			setSelectedOffering(offerings[0])
		}
	}, [offerings])

	const { course, specialization, code } = useParams<URLParameter>()

	const isLoading = subject === null || offerings === null

	return <Grid container direction="column" className='full-height'>
		<Grid item container alignItems='center' xs="auto" style={{ height: '50px' }} className='pad'>
			<Breadcrumb links={getBreadcrumbLinks(course, specialization, code)}/>
		</Grid>
		{isLoading
			? <Grid container justify='center'> <CircularProgress/> </Grid>
			: <Grid item xs container direction="column">
				<Grid item xs="auto" className='pad'>
					<Typography variant="h6"> Oferecimentos de {subject?.name} </Typography>
				</Grid>
				<Grid item xs>
					<Grid container direction='column' className='full-height'>
						<Grid item xs="auto" className='pad'>
							<Typography variant='body2' >
                                Avaliações de
							</Typography>
						</Grid>
						<Grid item xs="auto" container className='pad'>
							<Grid item xs={8} >
								<Typography variant='subtitle1'>
									<b>
										{selectedOffering?.professor}
									</b>
								</Typography>
							</Grid>
							<Grid item xs={4}>
								<Button
									size='small'
									color='secondary'
									fullWidth
									onClick={() => setMobileOfferingSelectorOpen(true)}
								>
									<b>TROCAR</b>
								</Button>
							</Grid>
						</Grid>
						<Grid item xs style={{ position: 'relative' }}>

							<OfferingContext.Provider value={{
								professor: selectedOffering?.code,
								course,
								specialization,
								code
							}}>
								<OfferingReviewsPanel />
							</OfferingContext.Provider>
							{!mobileOfferingSelectorOpen
								? null
								: <MobileOfferingSelector
									open={mobileOfferingSelectorOpen}
									close={() => setMobileOfferingSelectorOpen(false)}
									selected={selectedOffering}
									setSelected={setSelectedOffering}
									offerings={offerings}
								/>
							}
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		}
	</Grid>
}

export default Mobile
