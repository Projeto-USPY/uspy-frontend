import { SubjectInfo } from 'types/Subject'

export interface CourseInfo {
	name: string
	code: string
	subjects: SubjectInfo[]
}
