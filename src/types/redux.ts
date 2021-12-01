import { Action } from 'redux'

import { User } from 'types/User'

export interface DialogError {
	message: string
	title?: string
}

export interface AppState {
	user: User
	dialogError: DialogError | null
}

// Types of Redux Actions
export type ReduxActionType = 'LOGIN' | 'LOGOUT' | 'ALERT'

export interface ReduxAction extends Action {
	type: ReduxActionType
	payload:
		User |		// 'LOGIN'
		null |		// 'LOGOUT'
		DialogError // 'ALERT'
}
