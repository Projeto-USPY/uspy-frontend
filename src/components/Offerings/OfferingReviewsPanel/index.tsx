import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// import Grid from '@material-ui/core/Grid'

import { OfferingReview } from 'types/Offering'

import api from 'API'
import OfferingReviewBox from 'components/Offerings/OfferingReviewBox'
import OfferingReviewsFeed from 'components/Offerings/OfferingReviewsFeed'
import { URLParameter } from 'pages/OfferingsPage'

interface PropTypes {
	professor: string
}

const OfferingReviewsPanel: React.FC<PropTypes> = ({ professor }) => {
	const { course, specialization, code } = useParams<URLParameter>()
	const [userReview, setUserReview] = useState<OfferingReview | null>(null)
	useEffect(() => {
		api.getUserOfferingReview(course, specialization, code, professor).then(review => {
			setUserReview(review)
		}).catch(err => {
			if (err === 404) {
				setUserReview(null)
			} else {
				console.error(err)
			}
		})
	}, [course, specialization, code, professor])
	return <div className='full-height full-width' style={{ position: 'relative', maxHeight: '100%', overflow: 'hidden' }}>
		<OfferingReviewsFeed review={userReview} professor={professor} />
		<OfferingReviewBox review={userReview} setReview={setUserReview} professor={professor} />
	</div>
}

export default OfferingReviewsPanel
