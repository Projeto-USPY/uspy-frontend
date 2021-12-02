export function copyObj (obj: any) {
	return JSON.parse(JSON.stringify(obj))
}
const courseAliases = new Map<string, string>()
courseAliases.set('550410', 'BCC')
courseAliases.set('550514', 'BSI')
courseAliases.set('550714', 'Estat.')
courseAliases.set('55030300', 'Lic. em Mat.')
courseAliases.set('55030100', 'Mat. - Núcleo Geral')
courseAliases.set('550601', 'Mat. Apl.')
courseAliases.set('550900', 'BCD')
courseAliases.set('55030200', 'Mat. Pura')

export function getCourseAlias (code: string, specialization: string) {
	return courseAliases.get(code + specialization)
}

function isDigit (c: string) {
	return c >= '0' && c <= '9'
}

function isSpecialCharacter (c: string) {
	return " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".includes(c)
}

// Returns true if password has at least 8 digits with at least one number and one special character
export function validatePassword (pwd: string) {
	let hasDigit = false
	let hasSpecialCharacter = false
	for (let i = 0; i < pwd.length; ++i) {
		hasDigit = hasDigit || isDigit(pwd[i])
		hasSpecialCharacter = hasSpecialCharacter || isSpecialCharacter(pwd[i])
	}

	return hasDigit && hasSpecialCharacter && pwd.length >= 8
}

// Returns true if email is valid and has domain "usp.br"
export function validateEmail (email: string) {
	const reg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@([a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*)$/
	const res = reg.exec(email)
	return res && res[1] === 'usp.br'
}
