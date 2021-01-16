import axios from 'axios'
import { Subject, SubjectRelations } from 'types/Subject'

export const API = axios.create({
	baseURL: process.env.API_URL,
	responseType: 'json'
})

export async function getSubjectWithCourseAndCode (course: string, code: string): Promise<Subject> {
	try {
		const { data, status } = await API.get('/api/subject', {
			params: {
				course,
				code
			}
		})
		if (status !== 200) {
			throw status
		}
		return data as Subject
	} catch (err) {
		throw err.request.status
	}
}

export async function getSubjectRelations (course: string, code: string): Promise<SubjectRelations> {
	try {
		const { data, status } = await API.get('/api/subject/relations', {
			params: {
				course,
				code
			}
		})

		if (status !== 200) {
			throw status
		}

		return data as SubjectRelations
	} catch (err) {
		throw err.request.status
	}
}
