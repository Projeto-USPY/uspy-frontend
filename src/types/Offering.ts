export interface Offering {
    professor: string
    code: string
    years: string[]
    approval: number
    neutral: number
    disapproval: number
}

export interface OfferingInfo {
    professor: string
    code: string
}

export interface OfferingReview {
    uuid: string,
    rating: number
    body: string
    edited: boolean
    timestamp: string
    upvotes: number
    downvotes: number
}

export interface OfferingReviewVote {
    type: 'upvote' | 'downvote' | 'none'
}
