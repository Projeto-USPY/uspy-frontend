import { AppState, ReduxAction } from 'types/redux'
import { unknownUser, guestUser } from 'types/User'
// Initial state: user is not logged in
const initialState: AppState = {
	user: unknownUser
}

const reducer = (state: AppState = initialState, action: ReduxAction): AppState => {
	if (action.type === 'LOGIN') {
		return {
			...state,
			user: action.payload
		}
	} else if (action.type === 'LOGOUT') {
		return {
			...state,
			user: guestUser
		}
	}

	// action is unknown, do nothing
	return state
}

export default reducer
