import { SubjectInfo } from 'types/Subject'

export interface Course {
	name: string
	code: string
	specialization: string
}

export interface CourseWithSubjects extends Course {
	subjects: SubjectInfo[]
}
