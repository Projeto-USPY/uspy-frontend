export interface Offering {
    professor: string
    code: string
    years: string[]
    approval: number
    neutral: number
    disapproval: number
}

export interface OfferingReview {
    id: string,
    rating: number
    body: string
    edited: boolean
    timestamp: string
    upvotes: number
    downvotes: number
}
