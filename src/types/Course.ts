export interface Institute {
	name: string
	code: string
}

export interface Course {
	name: string
	code: string
	specialization: string
}

export interface CourseComplete extends Course {
	shift: string
	subjects: { [code: string]: string }
}

