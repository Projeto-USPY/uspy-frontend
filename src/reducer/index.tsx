import { AppState, ReduxAction } from 'types/redux'

// Initial state: user is not logged in
const initialState: AppState = {
	user: {
		name: '',
		id: ''
	}
}

const reducer = (state: AppState = initialState, action: ReduxAction): AppState => {
	if (action.type === 'LOGIN') {
		return {
			...state,
			user: action.payload.user
		}
	} else if (action.type === 'LOGOUT') {
		return {
			...state,
			user: {
				name: '',
				id: ''
			}
		}
	}

	// action is unknown, do nothing
	return state
}

export default reducer
