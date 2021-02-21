export interface User {
	user: string
	name: string
}
export const guestUser: User = {
	user: '0',
	name: ''
}

export const unknownUser: User = {
	user: '',
	name: ''
}
