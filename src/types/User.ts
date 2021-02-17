export interface User {
	id: string
	name: string
}
export const guestUser: User = {
	id: '0',
	name: ''
}

export const unknownUser: User = {
	id: '',
	name: ''
}
