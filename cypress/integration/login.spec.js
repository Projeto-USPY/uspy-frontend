const loginUrl = Cypress.env('API_URL') + '/account/login'
const sendActivationEmailUrl = Cypress.env('API_URL') + '/account/email/verification'
const sendPasswordRedefinitionEmailUrl = Cypress.env('API_URL') + '/account/email/password_reset'

function submitForm (nusp, pwd) {
	cy.get("input[name='NUSP']").type(nusp)
	cy.get("input[name='senha']").type(pwd)

	cy.contains('Entrar').click()
}

function dismissDialog () {
	cy.get('#dismiss-error-dialog').click()
}

function checkErrorAndDismiss (errMessage) {
	cy.contains(errMessage)
	dismissDialog()
}

describe('Login Page', () => {
	it('Should return 401 for wrong user or pwd', () => {
		cy.intercept('POST', loginUrl).as('loginRequest')

		cy.visit('/Login')
		cy.get("input[name='NUSP']").type('123456789')
		cy.get("input[name='senha']").type('Abacaba@123')

		cy.contains('Entrar').click()
		cy.wait('@loginRequest').then((interception) => {
			expect(interception.response.statusCode).to.equal(401)
		})
		checkErrorAndDismiss('Número USP ou senha incorretos')
	})

	it('Should return 400 if NUSP is not numeric', () => {
		cy.intercept('POST', loginUrl).as('loginRequest')

		cy.visit('/Login')
		submitForm('abacaba', 'Abacaba@123')

		cy.wait('@loginRequest').then((interception) => {
			expect(interception.response.statusCode).to.equal(400)
		})
		checkErrorAndDismiss('Número USP ou senha incorretos')
	})

	it('Should return 400 if password doesnt attend requirements', () => {
		cy.intercept('POST', loginUrl).as('loginRequest')
		cy.visit('/Login')
		submitForm('123456789', 'abacaba')

		cy.wait('@loginRequest').then((interception) => {
			expect(interception.response.statusCode).to.equal(400)
		})
		checkErrorAndDismiss('Número USP ou senha incorretos')
	})

	it('Should work properly if login request returns 200', () => {
		const fakeName = 'Foo Bar'
		cy.intercept('POST', loginUrl, { statusCode: 200, body: { user: '123456789', name: fakeName } }).as('loginRequest')

		cy.visit('/Login')
		submitForm('123456789', 'Abacaba@123')

		cy.wait('@loginRequest')
		cy.url().should('eq', Cypress.config().baseUrl + '/') // check for redirection to home page
		cy.contains(`Bem vindo, ${fakeName}!`) // check for snack bar
	})

	/* Disable this for now, until uspy-backend-#51 is done
	it('Should enable resending activation email if request returns unverified account error', () => {
		cy.intercept('POST', loginUrl, { statusCode: 403, body: 'e-mail ainda nao foi verificado' }).as('loginRequest')
		cy.intercept('POST', sendActivationEmailUrl, { statusCode: 200 }).as('sendActivationEmailRequest')

		cy.visit('/Login')
		cy.contains('Reenviar email de ativação').should('not.exist')
		submitForm('123456789', 'Abacaba@123')

		cy.on('window:alert', str => { expect(str).to.contain('Reenviar email de ativação') })
		cy.wait('@loginRequest')

		cy.contains('Reenviar email de ativação').click()
		cy.contains('Enviar').should('be.disabled')
		cy.get('#email').type('fake.email@usp.br')
		cy.contains('Enviar').click()
		cy.wait('@sendActivationEmailRequest')
		cy.contains('Email enviado com sucesso') // check for snack bar
	})
	*/

	it('Should enable resetting password', () => {
		cy.intercept('POST', sendPasswordRedefinitionEmailUrl, { statusCode: 200 }).as('sendPasswordRedefinitionEmail')

		cy.visit('/Login')

		cy.contains('Esqueci a senha').click()
		cy.contains('Enviar').should('be.disabled')
		cy.get('#email').type('fake.email@usp.br')
		cy.contains('Enviar').click()
		cy.wait('@sendPasswordRedefinitionEmail')
		cy.contains('Email enviado com sucesso') // check for snack bar
	})
})
