import React, { useState, useEffect, useContext } from 'react'

// import Grid from '@material-ui/core/Grid'

import { OfferingReview } from 'types/Offering'

import api from 'API'
import OfferingReviewBox from 'components/Offerings/OfferingReviewBox'
import OfferingReviewsFeed from 'components/Offerings/OfferingReviewsFeed'
import OfferingContext from 'contexts/OfferingContext'

const OfferingReviewsPanel = () => {
	const { professor, course, specialization, code } = useContext(OfferingContext)
	const [userReview, setUserReview] = useState<OfferingReview | null>(null)
	useEffect(() => {
		api.getUserOfferingReview(course, specialization, code, professor).then(review => {
			setUserReview(review)
		}).catch(err => {
			if (err.status === 404) {
				setUserReview(null)
			} else {
				console.error(err)
			}
		})
	}, [course, specialization, code, professor])
	return <div className='full-height full-width' style={{ position: 'relative', maxHeight: '100%', overflow: 'hidden' }}>
		<OfferingReviewsFeed review={userReview} />
		<OfferingReviewBox review={userReview} setReview={setUserReview} />
	</div>
}

export default OfferingReviewsPanel
