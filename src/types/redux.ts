import { Action } from 'redux'

import { User } from 'types/User'

export interface AppState {
	user: User
}

// Types of Redux Actions
export type ReduxActionType = 'LOGIN' | 'LOGOUT'

export interface ReduxAction extends Action {
	type: ReduxActionType
	payload: any
}
