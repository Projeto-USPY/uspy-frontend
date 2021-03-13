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
