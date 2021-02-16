import axios from 'axios'
import { Subject, SubjectRelations } from 'types/Subject'

export const API = axios.create({
	baseURL: process.env.API_URL,
	responseType: 'json',
	withCredentials: true
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

// Returns promise with base64 string of the image
export async function getRegistrationCaptcha (): Promise<string> {
	try {
		const response = await API.get('/account/captcha', {
			responseType: 'blob'
		})
		return URL.createObjectURL(response.data)
	} catch (err) {
		console.log(err)
		throw err.request.status
	}
}

export async function changePassword (oldPassword: string, newPassword: string) {
	try {
		await API.put('/account/password_change', {
			old_password: oldPassword,
			new_password: newPassword
		})
	} catch (err) {
		throw err.request.status
	}
}

export async function register (authCode: string, password: string, captcha: string) {
	try {
		await API.post('/account/create', {
			access_key: authCode,
			password: password,
			captcha: captcha
		})
	} catch (err) {
		throw err.request.status
	}
}

export async function login (username: string, password: string, remember: boolean) {
	try {
		await API.post('/account/login', {
			login: username,
			pwd: password,
			remember
		})
	} catch (err) {
		throw err.request.status
	}
}
