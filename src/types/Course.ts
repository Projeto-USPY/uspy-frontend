import { SubjectInfo } from 'types/Subject'

export interface Institute {
	name: string
	code: number
}

export interface Course {
	name: string
	code: string
	specialization: string
}

export interface CourseComplete extends Course {
	shift: string
	subjects: any
}

export interface CourseWithSubjects extends Course {
	subjects: SubjectInfo[]
}
