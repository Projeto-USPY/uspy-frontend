import React, { createContext, ReactElement, useEffect, useState } from 'react'

import { CourseInfo } from 'types/Course'
import { SubjectInfo } from 'types/Subject'

import { API } from 'API'
export const SubjectsDataContext: React.Context<any> = createContext([])

function transformSubjects (subjects: any): SubjectInfo[] {
	return Object.keys(subjects).map((code) => ({
		code,
		name: subjects[code]
	}))
}

let data: CourseInfo[]
function getData (setter: Function) {
	if (!data) {
		API.get('/api/subject/all').then((res: any) => {
			data = res.data.map((course: any) => ({
				...course,
				subjects: transformSubjects(course.subjects)
			}))
			setter(data)
		})
	}
	setter(data)
}

const withSubjectsData = (child: ReactElement) => {
	const [subjectsData, setSubjectsData] = useState(data)
	useEffect(() => {
		getData(setSubjectsData)
	}, [])

	if (subjectsData == null) {
		return <>
			{ child }
		</>
	} else {
		return <SubjectsDataContext.Provider value={subjectsData}>
			{child}
		</SubjectsDataContext.Provider>
	}
}

export default withSubjectsData
