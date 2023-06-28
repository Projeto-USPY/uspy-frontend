export interface SubjectInfo {
	code: string
	name: string
}

export interface SubjectKey {
	course: string
	code: string
	specialization: string
	name?: string
}

export interface SubjectRequirement extends SubjectInfo {
	strong: boolean
}

export interface Subject {
	name: string
	code: string
	course: string
	specialization: string
	description: string
	class: number
	assign: number
	hours: string
	requirements: SubjectRequirement[][]
	optional: boolean
	semester: number
	stats: {
		total: number
		worth_it: number
	}
}

export interface SubjectSibling {
	code: string
	name: string
	optional: boolean
}

export interface SubjectRelations {
	code: string
	predecessors: SubjectRequirement[][]
	successors: SubjectRequirement[]
}

export interface SubjectReview {
	categories: {
		worth_it: boolean
	}
}

export interface SubjectGradeStats {
	grades: any
	average: number
	approval: number
}

export interface SubjectGrade {
	grade: number
	status: string
	frequency: number
}
