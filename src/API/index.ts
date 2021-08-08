
import { Subject, SubjectRelations, SubjectReview, SubjectGradeStats, SubjectGrade } from 'types/Subject'
import { User } from 'types/User'

import axios, { AxiosInstance } from 'axios'
import axiosRetry from 'axios-retry'

class APIClient {
	axiosClient: AxiosInstance

	constructor () {
		this.axiosClient = axios.create({
			baseURL: process.env.API_URL,
			responseType: 'json',
			withCredentials: true
		})

		axiosRetry(this.axiosClient, {
			retryDelay: axiosRetry.exponentialDelay
		})
	}

	// Returns users NUSP if is authenticated and '' if status code is 401. Throws the status if it's different than that.
	async isAuthenticated (): Promise<string> {
		try {
			const { data } = await this.axiosClient.get('/account/profile')

			return data.user
		} catch (err) {
			if (err.request.status === 401) return ''
			else throw err.request.status
		}
	}

	async getSubjectWithCourseAndCode (course: string, specialization: string, code: string): Promise<Subject> {
		try {
			const { data, status } = await this.axiosClient.get('/api/subject', {
				params: {
					course,
					specialization,
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

	async getSubjectRelations (course: string, specialization: string, code: string): Promise<SubjectRelations> {
		try {
			const { data, status } = await this.axiosClient.get('/api/subject/relations', {
				params: {
					course,
					specialization,
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
	async getRegistrationCaptcha (): Promise<string> {
		try {
			const response = await this.axiosClient.get('/account/captcha', {
				responseType: 'blob'
			})
			return URL.createObjectURL(response.data)
		} catch (err) {
			console.error(err)
			throw err.request.status
		}
	}

	async changePassword (oldPassword: string, newPassword: string) {
		try {
			await this.axiosClient.put('/account/password_change', {
				old_password: oldPassword,
				new_password: newPassword
			})
		} catch (err) {
			throw err.request.status
		}
	}

	async register (authCode: string, password: string, captcha: string): Promise<User> {
		try {
			const { data } = await this.axiosClient.post('/account/create', {
				access_key: authCode,
				password: password,
				captcha: captcha
			})

			return data
		} catch (err) {
			throw err.request.status
		}
	}

	async login (username: string, password: string, remember: boolean): Promise<User> {
		try {
			const { data } = await this.axiosClient.post('/account/login', {
				login: username,
				pwd: password,
				remember
			})
			return data
		} catch (err) {
			throw err.request.status
		}
	}

	async logout () {
		try {
			await this.axiosClient.get('account/logout')
		} catch (err) {
			// Fail gracefully, do nothing
			if (err.request.status === 401) console.error('Can\'t logout if you are not logged in (401)')
			else console.error(`Something bad happened (${err.request.status})`)
		}
	}

	async getSubjectReview (course: string, specialization: string, code: string): Promise<SubjectReview> {
		try {
			const { data } = await this.axiosClient.get(`/private/subject/review?course=${course}&specialization=${specialization}&code=${code}`)
			return data as SubjectReview
		} catch (err) {
			throw err.request.status
		}
	}

	async makeSubjectReview (course: string, specialization: string, code: string, review: SubjectReview) {
		try {
			await this.axiosClient.post(`/private/subject/review?course=${course}&specialization=${specialization}&code=${code}`, review)
		} catch (err) {
			throw err.request.status
		}
	}

	async removeAccount () {
		try {
			await this.axiosClient.delete('/account')
		} catch (err) {
			throw err.request.status
		}
	}

	async getSubjectGrades (course: string, specialization: string, code: string): Promise<SubjectGradeStats> {
		try {
			const { data } = await this.axiosClient.get('/api/restricted/subject/grades', {
				params: {
					course,
					specialization,
					code
				}
			})
			return data as SubjectGradeStats
		} catch (err) {
			throw err.request.status
		}
	}

	async getGrade (course: string, specialization: string, code: string): Promise<SubjectGrade> {
		try {
			const { data } = await this.axiosClient.get('/private/subject/grade', {
				params: {
					course,
					specialization,
					code
				}
			})
			return data as SubjectGrade
		} catch (err) {
			throw err.request.status
		}
	}

	async resetPassword (authCode: string, password: string, captcha: string) {
		try {
			await this.axiosClient.put('/account/password_reset', {
				access_key: authCode,
				captcha,
				password
			})
		} catch (err) {
			throw err.request.status
		}
	}
};

const Client = new APIClient()
export default Client

export function client () {
	return Client.axiosClient
}
