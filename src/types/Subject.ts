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
		total: number
		worth_it: number
	}
}

export interface SubjectInfo {
	code: string
	name: string
}

export interface SubjectRelations {
	code: string
	predecessors: SubjectInfo[]
	successors: SubjectInfo[]
}

export interface SubjectReview {
	categories: {
		worth_it: boolean
	}
}
