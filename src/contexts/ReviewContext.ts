import React from 'react'

import { OfferingReview } from 'types/Offering'

interface ReviewContextType {
	userReview: OfferingReview
	setUserReview: (rev: OfferingReview) => void
	isGuest: boolean
}

const ReviewContext = React.createContext<ReviewContextType | null>(null)

export default ReviewContext
