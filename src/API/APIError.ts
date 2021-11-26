class APIError extends Error {
	code: string
	status: number

	constructor (code: string, message: string, status?: number) {
		super(message)
		this.code = code
		this.status = status
	}
}

export const statusCodeToError = {
	400: 'bad_request',
	401: 'unauthorized',
	403: 'forbidden',
	404: 'not_found',
	405: 'method_not_allowed',
	429: 'too_many_requests',

	500: 'internal_server_error',
	501: 'not_implemented',
	502: 'bad_gateway',
	503: 'service_unavailable'

}

export default APIError
