import { AppState, ReduxAction, DialogError } from 'types/redux'
import { User, unknownUser, guestUser } from 'types/User'
// Initial state: user is not logged in
const initialState: AppState = {
	user: unknownUser,
	dialogError: null,
	lastUpdatedAccount: '',
}

const reducer = (
	state: AppState = initialState,
	action: ReduxAction,
): AppState => {
	if (action.type === 'LOGIN') {
		return {
			...state,
			user: action.payload as User,
		}
	} else if (action.type === 'LOGOUT') {
		return {
			...state,
			user: guestUser,
		}
	} else if (action.type === 'ALERT') {
		return {
			...state,
			dialogError: action.payload as DialogError,
		}
	} else if (action.type === 'SET_LAST_UPDATED_ACCOUNT') {
		return {
			...state,
			lastUpdatedAccount: action.payload as string,
		}
	}

	// action is unknown, do nothing
	return state
}

export default reducer
