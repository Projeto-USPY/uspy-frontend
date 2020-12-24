export interface Subject {
	name: string
	code: string
	course: string
	description: string
	class: number
	assign: number
	hours: string
	requirements: string[]
	optional: boolean
	stats: {
		qtReviews: number
		qtWorthit: number
	}
}
