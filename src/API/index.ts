import { Auth } from 'types/Auth'
import { Institute, Course, CourseComplete } from 'types/Course'
import { Offering, OfferingReview, OfferingReviewVote } from 'types/Offering'
import { Record } from 'types/Record'
import { Stats } from 'types/Stats'
import {
	Subject,
	SubjectRelations,
	SubjectReview,
	SubjectGradeStats,
	SubjectGrade,
	SubjectSibling,
} from 'types/Subject'
import { guestUser, User } from 'types/User'

import APIError, { statusCodeToError } from 'API/APIError'
import axios, { AxiosInstance } from 'axios'
import axiosRetry from 'axios-retry'

class APIClient {
	axiosClient: AxiosInstance

	constructor() {
		this.axiosClient = axios.create({
			baseURL: process.env.API_URL,
			responseType: 'json',
			withCredentials: true,
		})

		this.axiosClient.interceptors.response.use(
			response => response,
			error => {
				const data = error.response.data || {}
				const statusCode = error.response.status
				data.code = data.code || statusCodeToError[statusCode]
				data.message =
					data.message ||
					error.response.statusText ||
					statusCodeToError[statusCode] ||
					'erro desconhecido'

				throw new APIError(data.code, data.message, statusCode)
			},
		)

		axiosRetry(this.axiosClient, {
			retryDelay: axiosRetry.exponentialDelay,
		})
	}

	// Returns users NUSP if is authenticated and '' if status code is 401. Throw status code if it's different than that.
	async isAuthenticated(): Promise<[User, string]> {
		try {
			const { data } = await this.axiosClient.get('/account/profile')

			return [
				{
					user: data.user,
					name: data.name,
				},
				data.last_update,
			]
		} catch (err) {
			if (err.status === 401) return [guestUser, '']
			else throw err
		}
	}

	async getSubjectWithCourseAndCode(
		course: string,
		specialization: string,
		code: string,
	): Promise<Subject> {
		const { data } = await this.axiosClient.get('/api/subject', {
			params: {
				course,
				specialization,
				code,
			},
		})
		return data as Subject
	}

	async getStats(): Promise<Stats> {
		const { data } = await this.axiosClient.get('/api/stats')
		return data as Stats
	}

	async getInstitutes(): Promise<Institute[]> {
		const { data } = await this.axiosClient.get('/api/institutes')
		return data as Institute[]
	}

	async getCourses(institute: string): Promise<Course[]> {
		const { data } = await this.axiosClient.get('/api/courses', {
			params: {
				institute,
			},
		})
		return data as Course[]
	}

	async getSubjectSearch(
		institute: string,
		course: string,
		specialization: string,
	): Promise<CourseComplete> {
		const { data } = await this.axiosClient.get('/api/subject/search', {
			params: {
				institute,
				course,
				specialization,
			},
		})
		return data as CourseComplete
	}

	async getSubjectList(
		course: string,
		specialization: string,
	): Promise<CourseComplete> {
		const { data } = await this.axiosClient.get('/api/subject/list', {
			params: {
				course,
				specialization,
			},
		})
		return data as CourseComplete
	}

	async getSubjectSiblings(
		code: string,
		course: string,
		specialization: string,
	): Promise<SubjectSibling[]> {
		const { data } = await this.axiosClient.get('/api/subject/siblings', {
			params: {
				code,
				course,
				specialization,
			},
		})
		return data as SubjectSibling[]
	}

	async getSubjectRelations(
		course: string,
		specialization: string,
		code: string,
	): Promise<SubjectRelations> {
		const { data } = await this.axiosClient.get('/api/subject/relations', {
			params: {
				course,
				specialization,
				code,
			},
		})

		return data as SubjectRelations
	}

	// Returns promise with base64 string of the image
	async getRegistrationCaptcha(): Promise<string> {
		const response = await this.axiosClient.get('/account/captcha', {
			responseType: 'blob',
		})
		return URL.createObjectURL(response.data)
	}

	async changePassword(oldPassword: string, newPassword: string) {
		await this.axiosClient.put('/account/password_change', {
			old_password: oldPassword,
			new_password: newPassword,
		})
	}

	async sendAuthCode(authCode: string): Promise<Auth> {
		const { data } = await this.axiosClient.put('/account/auth', {
			access_key: authCode,
		})

		return data as Auth
	}

	async register(
		signupToken: Auth,
		password: string,
		email: string,
	): Promise<User> {
		const { data } = await this.axiosClient.post('/account/create', {
			signup_token: signupToken,
			password,
			email,
		})

		return data as User
	}

	async login(
		username: string,
		password: string,
		remember: boolean,
	): Promise<User> {
		const { data } = await this.axiosClient.post('/account/login', {
			login: username,
			pwd: password,
			remember,
		})
		return data as User
	}

	async logout() {
		await this.axiosClient.get('account/logout')
	}

	async getSubjectOfferings(
		course: string,
		specialization: string,
		code: string,
		limit?: number,
	): Promise<Offering[]> {
		const { data } = await this.axiosClient.get('/api/subject/offerings', {
			params: {
				code,
				specialization,
				course,
				limit: limit || 100,
			},
		})
		return data as Offering[]
	}

	async getUserOfferingReview(
		course: string,
		specialization: string,
		code: string,
		professor: string,
	): Promise<OfferingReview> {
		const { data } = await this.axiosClient.get(
			'/private/subject/offerings/comments',
			{
				params: {
					code,
					specialization,
					course,
					professor,
				},
			},
		)
		return data as OfferingReview
	}

	async getOfferingReviews(
		course: string,
		specialization: string,
		code: string,
		professor: string,
	): Promise<OfferingReview[]> {
		const { data } = await this.axiosClient.get(
			'/api/subject/offerings/comments',
			{
				params: {
					code,
					specialization,
					course,
					professor,
				},
			},
		)
		return data as OfferingReview[]
	}

	async getOfferingReviewUserVote(
		course: string,
		specialization: string,
		code: string,
		professor: string,
		comment: string,
	): Promise<OfferingReviewVote> {
		const { data } = await this.axiosClient.get(
			'/private/subject/offerings/comments/rating',
			{
				params: {
					code,
					specialization,
					course,
					professor,
					comment,
				},
			},
		)
		return data as OfferingReviewVote
	}

	async submitOfferingReviewUserVote(
		course: string,
		specialization: string,
		code: string,
		professor: string,
		comment: string,
		vote: OfferingReviewVote,
	) {
		await this.axiosClient.put(
			'/private/subject/offerings/comments/rating',
			vote,
			{
				params: {
					code,
					specialization,
					course,
					professor,
					comment,
				},
			},
		)
	}

	async submitOfferingReview(
		course: string,
		specialization: string,
		code: string,
		professor: string,
		body: string,
		rating: number,
	): Promise<OfferingReview> {
		const { data } = await this.axiosClient.put(
			'/private/subject/offerings/comments',
			{
				body,
				rating,
			},
			{
				params: {
					course,
					specialization,
					code,
					professor,
				},
			},
		)
		return data as OfferingReview
	}

	async deleteOfferingReview(
		course: string,
		specialization: string,
		code: string,
		professor: string,
	) {
		await this.axiosClient.delete('/private/subject/offerings/comments', {
			params: {
				course,
				specialization,
				code,
				professor,
			},
		})
	}

	async reportOfferingReview(
		course: string,
		specialization: string,
		code: string,
		professor: string,
		comment: string,
		report: string,
	) {
		await this.axiosClient.put(
			'/private/subject/offerings/comments/report',
			{
				body: report,
			},
			{
				params: {
					course,
					specialization,
					code,
					professor,
					comment,
				},
			},
		)
	}

	async getSubjectReview(
		course: string,
		specialization: string,
		code: string,
	): Promise<SubjectReview> {
		const { data } = await this.axiosClient.get(
			`/private/subject/review?course=${course}&specialization=${specialization}&code=${code}`,
		)
		return data as SubjectReview
	}

	async makeSubjectReview(
		course: string,
		specialization: string,
		code: string,
		review: SubjectReview,
	) {
		await this.axiosClient.post(
			`/private/subject/review?course=${course}&specialization=${specialization}&code=${code}`,
			review,
		)
	}

	async removeAccount() {
		await this.axiosClient.delete('/account')
	}

	async getSubjectGrades(
		course: string,
		specialization: string,
		code: string,
	): Promise<SubjectGradeStats> {
		const { data } = await this.axiosClient.get(
			'/api/restricted/subject/grades',
			{
				params: {
					course,
					specialization,
					code,
				},
			},
		)
		return data as SubjectGradeStats
	}

	async getSubjectVerification(
		course: string,
		specialization: string,
		code: string,
	): Promise<boolean> {
		const { data } = await this.axiosClient.get(
			'/private/subject/verification',
			{
				params: {
					course,
					specialization,
					code,
				},
			},
		)
		return data as boolean
	}

	async getGrade(
		course: string,
		specialization: string,
		code: string,
	): Promise<SubjectGrade> {
		const { data } = await this.axiosClient.get('/private/subject/grade', {
			params: {
				course,
				specialization,
				code,
			},
		})
		return data as SubjectGrade
	}

	async getMajors(): Promise<Course[]> {
		const { data } = await this.axiosClient.get('/account/profile/majors')
		return data as Course[]
	}

	async getCurriculum(
		course: string,
		specialization: string,
		semester: number,
		optional?: boolean,
	): Promise<Record[]> {
		const { data } = await this.axiosClient.get(
			'/account/profile/curriculum',
			{
				params: {
					course,
					specialization,
					semester,
					optional,
				},
			},
		)

		return data as Record[]
	}

	async getTranscriptYears(): Promise<
		{ year: number; semesters: number[] }[]
	> {
		const { data } = await this.axiosClient.get(
			'/account/profile/transcript/years',
		)
		return data
	}

	async getRecords(year: number, semester: number): Promise<Record[]> {
		const { data } = await this.axiosClient.get(
			'/account/profile/transcript',
			{
				params: {
					year,
					semester,
				},
			},
		)

		return data as Record[]
	}

	async resetPassword(token: string, password: string) {
		await this.axiosClient.put('/account/password_reset', {
			token,
			password,
		})
	}

	async sendActivationEmail(email: string) {
		await this.axiosClient.post('/account/email/verification', {
			email: email,
		})
	}

	async sendPasswordRedefinitionEmail(email: string) {
		await this.axiosClient.post('/account/email/password_reset', {
			email: email,
		})
	}

	async verifyAccount(token: string) {
		await this.axiosClient.get('/account/verify', {
			params: {
				token,
			},
		})
	}

	async updateAccount(authCode: string) {
		await this.axiosClient.put('/account/update', {
			access_key: authCode,
		})
	}
}

const Client = new APIClient()
export default Client

export function client() {
	return Client.axiosClient
}
