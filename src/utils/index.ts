export function copyObj(obj: any) {
	return JSON.parse(JSON.stringify(obj))
}

function isDigit(c: string) {
	return c >= '0' && c <= '9'
}

function isSpecialCharacter(c: string) {
	return ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'.includes(c)
}

// Returns true if password has at least 8 digits with at least one number and one special character
export function validatePassword(pwd: string) {
	let hasDigit = false
	let hasSpecialCharacter = false
	for (let i = 0; i < pwd.length; ++i) {
		hasDigit = hasDigit || isDigit(pwd[i])
		hasSpecialCharacter = hasSpecialCharacter || isSpecialCharacter(pwd[i])
	}

	return hasDigit && hasSpecialCharacter && pwd.length >= 8
}

// Returns the capitalized initials of a given string with multiple words
export function getInitials(name: string): string {
	try {
		const words = name.split(/\s+/)
		return words.reduce((prev, cur) => {
			const caps = cur[0].toUpperCase()
			if (cur[0] === caps && caps >= 'A' && caps <= 'Z') {
				return prev + cur[0]
			}

			return prev
		}, '')
	} catch {
		return ''
	}
}

// Returns true if email is valid and has domain "usp.br"
export function validateEmail(email: string) {
	const reg =
		/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@([a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*)$/
	const res = reg.exec(email)
	return res && res[1] === 'usp.br'
}

export function unique<T>(arr: T[]): T[] {
	const ret: T[] = []

	const st = new Set<T>()
	arr.forEach((el) => {
		if (!st.has(el)) {
			ret.push(el)
			st.add(el)
		}
	})
	return ret
}
