/*
    Levels:
    < 5m - Agora
    < 60m - Xm atrás
    < 24h - Xh atrás
    < 7 dias - <dia da semana> às hh::mm
    DD/MM/YY às hh:mm

*/

const WEEK_DAY = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado']

export function getRelativeDate (d: Date): string {
	const diff = new Date().getTime() - d.getTime()
	if (diff < 5 * 60 * 1000) {
		return 'Agora'
	} else if (diff < 60 * 60 * 1000) {
		const minutes = Math.round(diff / (60 * 1000)).toFixed(0)
		return `${minutes}m atrás`
	} else if (diff < 24 * 60 * 60 * 1000) {
		const hours = Math.round(diff / (60 * 60 * 1000)).toFixed(0)
		return `${hours}h atrás`
	} else if (diff < 7 * 24 * 60 * 60 * 1000) {
		return `${WEEK_DAY[d.getDay()]} às ${d.getHours()}:${d.getMinutes()}`
	} else {
		return `${d.toLocaleDateString()} às ${d.getHours()}:${d.getMinutes()}`
	}
}
