import { ReduxAction } from 'types/redux'
import { User } from 'types/User'

export const setUser = (user: User): ReduxAction => ({
	type: 'LOGIN',
	payload: user,
})

export const setUserNone = (): ReduxAction => ({
	type: 'LOGOUT',
	payload: null,
})

export const setLastUpdatedAccount = (date: string): ReduxAction => ({
	type: 'SET_LAST_UPDATED_ACCOUNT',
	payload: date,
})

export const uspyAlert = (message?: string, title?: string): ReduxAction => ({
	type: 'ALERT',
	payload: message
		? {
				message,
				title,
		  }
		: null,
})
