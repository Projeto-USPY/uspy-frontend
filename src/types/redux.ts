import { Action } from 'redux'

import { User } from 'types/User'

export interface DialogError {
	message: string
	title?: string
}

export interface AppState {
	user: User
	dialogError: DialogError | null
	lastUpdatedAccount: string
}

// Types of Redux Actions
export type ReduxActionType =
	| 'LOGIN'
	| 'LOGOUT'
	| 'ALERT'
	| 'SET_LAST_UPDATED_ACCOUNT'

export interface ReduxAction extends Action {
	type: ReduxActionType
	payload:
		| User // 'LOGIN'
		| null // 'LOGOUT'
		| DialogError // 'ALERT'
		| string // 'SET_LAST_UPDATED_ACCOUNT'
}
