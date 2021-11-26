import React, { useState, useEffect, useContext } from 'react'

import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Skeleton from '@material-ui/lab/Skeleton'

import { OfferingReview } from 'types/Offering'

// import mockReviews from '__mocks__/MockReviews'
import api from 'API'
import OfferingReviewBalloon from 'components/Offerings/OfferingReviewBalloon'
import OfferingContext from 'contexts/OfferingContext'

interface PropTypes {
    review: OfferingReview
}

const SkeletonProgress = () => {
	return <Grid container spacing={3} direction="column" alignItems='stretch'>
		{(new Array(10).fill(0)).map((_, idx) =>
			<Grid item container key={idx} direction='row-reverse' alignItems='stretch'>
				<Grid item container direction='column' justify='center' alignItems='center' style={{ width: 45 }}>
					<Skeleton variant='rect' width={1} height={1} className='skeleton-arrow-up'/>
					<Skeleton variant='circle' height={24} width={24} />
					<Skeleton variant='rect' width={1} height={1} className='skeleton-arrow-down'/>
				</Grid>
				<Grid item xs container direction='row-reverse'>
					<Skeleton variant='rect' className='offering-review-balloon' />
				</Grid>
			</Grid>
		)}
	</Grid>
}

const OfferingReviewsFeed: React.FC<PropTypes> = ({ review }) => {
	const [loading, setLoading] = useState<boolean>(true)
	const [reviews, setReviews] = useState<OfferingReview[] | null>(null)
	const { professor, course, specialization, code } = useContext(OfferingContext)

	useEffect(() => {
		setLoading(true)
		api.getOfferingReviews(course, specialization, code, professor).then(reviews => {
			setLoading(false)
			setReviews(reviews)
		}).catch(err => {
			setLoading(false)
			if (err.status === 404) {
				setReviews([])
			} else {
				console.error(err)
			}
		})
	}, [professor])

	if (loading || reviews === null) {
		return <div className='offering-reviews-feed full-width'>
			<SkeletonProgress />
		</div>
	} else if (reviews?.length === 0 && review === null) {
		return <Grid container justify='center' direction='column' alignItems='center' className='offering-reviews-feed full-width'>
			<Grid item style={{ textAlign: 'center' }}>
				<Typography variant='h6'>
					Nenhum comentário foi encontrado para este oferecimento.
				</Typography>
			</Grid>
			<Grid item>
				<Typography variant='h6'>
					Seja o primeiro a avaliar!
				</Typography>
			</Grid>

		</Grid>
	} else {
		return <div className='offering-reviews-feed full-width'>
			<Grid container spacing={2} direction='column' alignItems='stretch'>
				{ review
					? <>
						<Grid item container justify='flex-end' wrap='nowrap' alignItems='stretch'>
							<OfferingReviewBalloon review={review} locked />
						</Grid>
						<Divider light color='secondary' />
					</>
					: null
				}

				{reviews.map(rev =>
					review?.uuid === rev.uuid
						? null
						: <Grid item container key={rev.uuid} wrap='nowrap' justify='flex-end' alignItems='stretch'>
							<OfferingReviewBalloon review={rev} />
						</Grid>
				)}
			</Grid>
		</div>
	}
}

export default OfferingReviewsFeed
