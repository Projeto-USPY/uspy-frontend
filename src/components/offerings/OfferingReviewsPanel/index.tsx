import React, { useState, useEffect, useContext } from 'react'

// import Grid from '@material-ui/core/Grid'

import { OfferingReview } from 'types/Offering'

import api from 'API'
import OfferingReviewBox from 'components/offerings/OfferingReviewBox'
import OfferingReviewsFeed from 'components/offerings/OfferingReviewsFeed'
import OfferingContext from 'contexts/OfferingContext'
import ReviewContext from 'contexts/ReviewContext'
import { guestUser, unknownUser, User } from 'types/User'

type PropsType = {
	user: User
}

const OfferingReviewsPanel: React.FC<PropsType> = ({ user }) => {
	const { professor, course, specialization, code } =
		useContext(OfferingContext)
	const [userReview, setUserReview] = useState<OfferingReview | null>(null)
	useEffect(() => {
		api.getUserOfferingReview(course, specialization, code, professor)
			.then(review => {
				setUserReview(review)
			})
			.catch(err => {
				if (err.code === 'not_found') {
					setUserReview(null)
				} else {
					console.error(err)
				}
			})
	}, [course, specialization, code, professor])
	return (
		<div
			className="full-height full-width"
			style={{
				position: 'relative',
				maxHeight: '100%',
				overflow: 'hidden',
			}}>
			<ReviewContext.Provider
				value={{
					userReview: userReview,
					setUserReview: setUserReview,
					isGuest: user === guestUser || user === unknownUser,
				}}>
				<OfferingReviewsFeed />
				<OfferingReviewBox />
			</ReviewContext.Provider>
		</div>
	)
}

export default OfferingReviewsPanel
