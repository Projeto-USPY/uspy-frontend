const loginUrl = Cypress.env('API_URL') + '/account/login'

function submitForm (nusp, pwd) {
	cy.get("input[name='NUSP']").type(nusp)
	cy.get("input[name='senha']").type(pwd)

	cy.contains('Entrar').click()
}

describe('Login Page', () => {
	it('Should return 401 for wrong user or pwd', () => {
		cy.intercept('POST', loginUrl).as('loginRequest')

		cy.visit('/Login')
		cy.get("input[name='NUSP']").type('123456789')
		cy.get("input[name='senha']").type('Abacaba@123')

		cy.contains('Entrar').click()
		cy.wait('@loginRequest').then((interception) => {
			console.log(interception)
			expect(interception.response.statusCode).to.equal(401)
		})
		cy.on('window:alert', str => expect(str).to.equal('Número USP ou senha incorretos'))
	})

	it('Should return 400 if NUSP is not numeric', () => {
		cy.intercept('POST', loginUrl).as('loginRequest')

		cy.visit('/Login')
		submitForm('abacaba', 'Abacaba@123')

		cy.wait('@loginRequest').then((interception) => {
			console.log(interception)
			expect(interception.response.statusCode).to.equal(400)
		})
		cy.on('window:alert', str => expect(str).to.contain('Bad Request (400)'))
	})

	it('Should return 400 if password doesnt attend requirements', () => {
		cy.intercept('POST', loginUrl).as('loginRequest')

		cy.visit('/Login')
		submitForm('123456789', 'abacaba')

		cy.wait('@loginRequest').then((interception) => {
			console.log(interception)
			expect(interception.response.statusCode).to.equal(400)
		})
		cy.on('window:alert', str => expect(str).to.contain('Bad Request (400)'))
	})

	it('Should work properly if login request returns 200', () => {
		const fakeName = 'Foo Bar'
		cy.intercept('POST', loginUrl, { statusCode: 200, body: { user: '123456789', name: fakeName } }).as('loginRequest')

		cy.visit('/Login')
		submitForm('123456789', 'Abacaba@123')

		cy.wait('@loginRequest').then((interception) => {
			console.log(interception)
			expect(interception.response.statusCode).to.equal(200)
		})
		cy.url().should('eq', Cypress.config().baseUrl + '/') // check for redirection to home page
		cy.contains(`Bem vindo, ${fakeName}!`) // check for snack bar
	})
})
