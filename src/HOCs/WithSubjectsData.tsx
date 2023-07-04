import React, {
	createContext,
	useEffect,
	useState,
	PropsWithChildren,
} from 'react'

import { CourseComplete } from 'types/Course'
import { useMySnackbar } from 'hooks'

import api from 'API'
export const CourseDataContext: React.Context<CourseComplete> =
	createContext(null)

interface WithSubjectsDataProps extends PropsWithChildren {
	course: string
	specialization: string
}

const WithSubjectsData = ({
	children,
	course,
	specialization,
}: WithSubjectsDataProps) => {
	const [subjectsData, setSubjectsData] = useState<CourseComplete>(null)

	const notify = useMySnackbar()
	console.log(course, specialization)

	useEffect(() => {
		api.getSubjectList(course, specialization)
			.then(courseData => {
				setSubjectsData(courseData)
			})
			.catch(err => {
				console.error(err)
				notify('Erro ao carregar disciplinas', 'error')
			})
	}, [])

	if (subjectsData == null) {
		return <>{children}</>
	} else {
		return (
			<CourseDataContext.Provider value={subjectsData}>
				{children}
			</CourseDataContext.Provider>
		)
	}
}

export default WithSubjectsData
