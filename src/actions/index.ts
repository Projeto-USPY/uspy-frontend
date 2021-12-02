import { ReduxAction } from 'types/redux'
import { User } from 'types/User'

export const setUser = (user: User): ReduxAction => ({
	type: 'LOGIN',
	payload: user
})

export const setUserNone = (): ReduxAction => ({
	type: 'LOGOUT',
	payload: null
})

export const uspyAlert = (message?: string, title?: string): ReduxAction => ({
	type: 'ALERT',
	payload: message ? {
		message,
		title
	} : null
})
