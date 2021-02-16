import axios from 'axios'
import { Subject, SubjectRelations } from 'types/Subject'
import { User } from 'types/User'

export const API = axios.create({
	baseURL: process.env.API_URL,
	responseType: 'json',
	withCredentials: true
})

// Returns users NUSP if is authenticated and '' if status code is 401. Throws the status if it's different than that.
export async function isAuthenticated (): Promise<string> {
	try {
		const { data } = await API.get('/account/profile')

		return data.user
	} catch (err) {
		if (err.request.status === 401) return ''
		else throw err.request.status
	}
}

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

export async function login (username: string, password: string, remember: boolean): Promise<User> {
	try {
		const { data } = await API.post('/account/login', {
			login: username,
			pwd: password,
			remember
		})
		return data
	} catch (err) {
		throw err.request.status
	}
}
