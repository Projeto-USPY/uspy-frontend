import axios from 'axios'
import { Subject } from 'types/Subject'

export const API = axios.create({
	baseURL: process.env.API_URL,
	responseType: 'json'
})

export async function getSubjectWithCourseAndCode (course: string, code: string): Promise<[Subject | null, number]> {
	try {
		const { data, status } = await API.get('/api/subject', {
			params: {
				course,
				code
			}
		})
		return [data as Subject, status]
	} catch (err) {
		return [null, err.request.status]
	}
}
