
import { Offering, OfferingReview, OfferingReviewVote } from 'types/Offering'
import { Subject, SubjectRelations, SubjectReview, SubjectGradeStats, SubjectGrade } from 'types/Subject'
import { User } from 'types/User'

import APIError, { statusCodeToError } from 'API/APIError'
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

		this.axiosClient.interceptors.response.use(
			response => response,
			error => {
				const data = error.response.data || {}
				const statusCode = error.response.status
				data.code = data.code || statusCodeToError[statusCode]
				data.message = data.message || error.response.statusText

				throw new APIError(data.code, data.message, statusCode)
			}
		)

		axiosRetry(this.axiosClient, {
			retryDelay: axiosRetry.exponentialDelay
		})
	}

	// Returns users NUSP if is authenticated and '' if status code is 401. Throw status code if it's different than that.
	async isAuthenticated (): Promise<string> {
		try {
			const { data } = await this.axiosClient.get('/account/profile')

			return data.user
		} catch (err) {
			if (err.status === 401) return ''
			else throw err
		}
	}

	async getSubjectWithCourseAndCode (course: string, specialization: string, code: string): Promise<Subject> {
		const { data } = await this.axiosClient.get('/api/subject', {
			params: {
				course,
				specialization,
				code
			}
		})
		return data as Subject
	}

	async getSubjectRelations (course: string, specialization: string, code: string): Promise<SubjectRelations> {
		const { data } = await this.axiosClient.get('/api/subject/relations', {
			params: {
				course,
				specialization,
				code
			}
		})

		return data as SubjectRelations
	}

	// Returns promise with base64 string of the image
	async getRegistrationCaptcha (): Promise<string> {
		const response = await this.axiosClient.get('/account/captcha', {
			responseType: 'blob'
		})
		return URL.createObjectURL(response.data)
	}

	async changePassword (oldPassword: string, newPassword: string) {
		await this.axiosClient.put('/account/password_change', {
			old_password: oldPassword,
			new_password: newPassword
		})
	}

	async register (authCode: string, password: string, captcha: string, email: string): Promise<User> {
		const { data } = await this.axiosClient.post('/account/create', {
			access_key: authCode,
			password,
			captcha,
			email
		})

		return data as User
	}

	async login (username: string, password: string, remember: boolean): Promise<User> {
		const { data } = await this.axiosClient.post('/account/login', {
			login: username,
			pwd: password,
			remember
		})
		return data as User
	}

	async logout () {
		await this.axiosClient.get('account/logout')
	}

	async getSubjectOfferingsSummary (course: string, specialization: string, code: string): Promise<Offering[]> {
		const { data } = await this.axiosClient.get('/api/subject/offerings', {
			params: {
				code,
				specialization,
				course
			}
		})
		return data as Offering[]
	}

	async getSubjectOfferings (course: string, specialization: string, code: string, limit?: number): Promise<Offering[]> {
		const { data } = await this.axiosClient.get('/api/restricted/subject/offerings', {
			params: {
				code,
				specialization,
				course,
				limit: limit || 100
			}
		})
		return data as Offering[]
	}

	async getUserOfferingReview (course: string, specialization: string, code: string, professor: string): Promise<OfferingReview> {
		const { data } = await this.axiosClient.get('/private/subject/offerings/comments', {
			params: {
				code,
				specialization,
				course,
				professor
			}
		})
		return data as OfferingReview
	}

	async getOfferingReviews (course: string, specialization: string, code: string, professor: string): Promise<OfferingReview[]> {
		const { data } = await this.axiosClient.get('/api/restricted/subject/offerings/comments', {
			params: {
				code,
				specialization,
				course,
				professor
			}
		})
		return data as OfferingReview[]
	}

	async getOfferingReviewUserVote (course: string, specialization: string, code: string, professor: string, comment: string): Promise<OfferingReviewVote> {
		const { data } = await this.axiosClient.get('/private/subject/offerings/comments/rating', {
			params: {
				code,
				specialization,
				course,
				professor,
				comment
			}
		})
		return data as OfferingReviewVote
	}

	async submitOfferingReviewUserVote (course: string, specialization: string, code: string, professor: string, comment: string, vote: OfferingReviewVote) {
		await this.axiosClient.put('/private/subject/offerings/comments/rating', vote, {
			params: {
				code,
				specialization,
				course,
				professor,
				comment
			}
		})
	}

	async submitOfferingReview (
		course: string,
		specialization: string,
		code: string,
		professor: string,
		body: string,
		rating: number
	): Promise<OfferingReview> {
		const { data } = await this.axiosClient.put('/private/subject/offerings/comments', {
			body,
			rating
		}, {
			params: {
				course,
				specialization,
				code,
				professor
			}
		})
		return data as OfferingReview
	}

	async reportOfferingReview (
		course: string,
		specialization: string,
		code: string,
		professor: string,
		comment: string,
		report: string
	) {
		await this.axiosClient.put('/private/subject/offerings/comments/report', {
			body: report
		}, {
			params: {
				course,
				specialization,
				code,
				professor,
				comment
			}
		})
	}

	async getSubjectReview (course: string, specialization: string, code: string): Promise<SubjectReview> {
		const { data } = await this.axiosClient.get(`/private/subject/review?course=${course}&specialization=${specialization}&code=${code}`)
		return data as SubjectReview
	}

	async makeSubjectReview (course: string, specialization: string, code: string, review: SubjectReview) {
		await this.axiosClient.post(`/private/subject/review?course=${course}&specialization=${specialization}&code=${code}`, review)
	}

	async removeAccount () {
		await this.axiosClient.delete('/account')
	}

	async getSubjectGrades (course: string, specialization: string, code: string): Promise<SubjectGradeStats> {
		const { data } = await this.axiosClient.get('/api/restricted/subject/grades', {
			params: {
				course,
				specialization,
				code
			}
		})
		return data as SubjectGradeStats
	}

	async getGrade (course: string, specialization: string, code: string): Promise<SubjectGrade> {
		const { data } = await this.axiosClient.get('/private/subject/grade', {
			params: {
				course,
				specialization,
				code
			}
		})
		return data as SubjectGrade
	}

	async resetPassword (token: string, password: string) {
		await this.axiosClient.put('/account/password_reset', {
			token,
			password
		})
	}

	async sendActivationEmail (email: string) {
		await this.axiosClient.post('/account/email/verification', {
			email: email
		})
	}

	async sendPasswordRedefinitionEmail (email: string) {
		await this.axiosClient.post('/account/email/password_reset', {
			email: email
		})
	}

	async verifyAccount (token: string) {
		await this.axiosClient.get('/account/verify', {
			params: {
				token
			}
		})
	}
};

const Client = new APIClient()
export default Client

export function client () {
	return Client.axiosClient
}
