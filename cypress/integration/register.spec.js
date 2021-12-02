const createAccountUrl = Cypress.env('API_URL') + '/account/create'

function isInvalid (el) {
	return el.invoke('attr', 'aria-invalid').should('eq', 'true')
}
function isValid (el) {
	return el.invoke('attr', 'aria-invalid').should('eq', 'false')
}

function fillForm (accept) {
	cy.get('#auth-code-0').type('12345678ABCDEFGH') // auth code
	cy.get('#email').type('abacaba@usp.br') // email
	cy.get('#pwd1').clear().type('abc@1234') // password 1
	cy.get('#pwd2').clear().type('abc@1234') // password 2
	cy.get('#captcha').clear().type('AB12') // captcha
	if (accept) {
		cy.get('#accept').click() // captcha
	}
}

function clickSubmit () {
	cy.get('#submit').click()
}

function dismissDialog () {
	cy.get('#dismiss-error-dialog').click()
}

function checkErrorAndDismiss (errMessage) {
	cy.contains(errMessage)
	dismissDialog()
}

describe('Register Page', () => {
	beforeEach(() => {
		cy.visit('/Cadastro')
	})
	describe('Form fields behavior', () => {
		describe('Auth code inputs', () => {
			it('Should be filled naturally', () => {
				cy.get('#auth-code-0').type('12345678ABCDEFGH')
				cy.get('#auth-code-0').should('have.value', '1234')
				cy.get('#auth-code-1').should('have.value', '5678')
				cy.get('#auth-code-2').should('have.value', 'ABCD')
				cy.get('#auth-code-3').should('have.value', 'EFGH')

				cy.get('#auth-code-0').type('1234-5678-ABCD-EFGH')
				cy.get('#auth-code-0').should('have.value', '1234')
				cy.get('#auth-code-1').should('have.value', '5678')
				cy.get('#auth-code-2').should('have.value', 'ABCD')
				cy.get('#auth-code-3').should('have.value', 'EFGH')
			})
			it('Should automatically upper case', () => {
				cy.get('#auth-code-0').type('abcdefghijklmnop')
				cy.get('#auth-code-0').should('have.value', 'ABCD')
				cy.get('#auth-code-1').should('have.value', 'EFGH')
				cy.get('#auth-code-2').should('have.value', 'IJKL')
				cy.get('#auth-code-3').should('have.value', 'MNOP')
			})
			it('Should select all on focus', () => {
				// hack to assert everything is selected
				cy.get('#auth-code-0').type('abcd')
				cy.get('#auth-code-1').focus()
				cy.get('#auth-code-0').focus().type('1').should('have.value', '1')
			})
			it('Should be validated on submit', () => {
				const authCodeIncompleteError = 'O código de autenticidade está incompleto'

				// empty inputs
				clickSubmit()
				checkErrorAndDismiss(authCodeIncompleteError)

				// incomplete inputs
				cy.get('#auth-code-0').type('12345678ABCDEFG')
				clickSubmit()
			})
		})

		describe('Email input', () => {
			it('Should be valid for @usp emails', () => {
				isValid(cy.get('#email').type('abacaba@usp.br').blur())
				cy.contains('Email inválido').should('not.exist')
			})

			it('Should be invalid for things other than email addresses', () => {
				isInvalid(cy.get('#email').type('Hello 1234').blur())
				cy.contains('Email inválido') // check for helper text appearing
			})

			it('Should be invalid for not @usp emails', () => {
				isInvalid(cy.get('#email').type('scooby.doo@gmail.com').blur())
				cy.contains('Email inválido') // check for helper text appearing
			})
		})
		describe('Password inputs', () => {
			it('Should be invalid for pwd not fulfilling requirements', () => {
				// everything bad
				isInvalid(cy.get('#pwd1').type('abc').blur())
				cy.contains('Senha não satisfaz os requisitos') // check for helper text appearing

				// too short
				isInvalid(cy.get('#pwd1').clear().type('abc@123').blur())
				cy.contains('Senha não satisfaz os requisitos') // check for helper text appearing

				// special character missing
				isInvalid(cy.get('#pwd1').clear().type('abcd1234').blur())
				cy.contains('Senha não satisfaz os requisitos') // check for helper text appearing

				// number missing
				isInvalid(cy.get('#pwd1').clear().type('abc@ABCD').blur())
				cy.contains('Senha não satisfaz os requisitos') // check for helper text appearing
			})

			it('Should be valid for pwd fullfilling requirements', () => {
				isValid(cy.get('#pwd1').clear().type('abc@1234').blur())
				isValid(cy.get('#pwd2').clear().type('abc@1234').blur())
				cy.contains('Senha não satisfaz os requisitos').should('not.exist')
				cy.contains('Senhas diferem').should('not.exist')
			})

			it('Should give error for unmatching passwords', () => {
				cy.get('#pwd1').clear().type('abc@1234')
				isInvalid(cy.get('#pwd2').clear().type('abc@1235').blur())
				cy.contains('Senhas diferem') // check for helper text appearing
			})
		})

		describe('Captcha input', () => {
			it('Should be invalid for wrong format', () => {
				// less than 4 chars
				isInvalid(cy.get('#captcha').clear().type('123').blur())
				cy.contains('Exatamente 4 caracteres com letras ou números') // check for helper text appearing

				// more than 4 chars
				isInvalid(cy.get('#captcha').clear().type('123AB').blur())
				cy.contains('Exatamente 4 caracteres com letras ou números') // check for helper text appearing

				// chars other than alphanumeric
				isInvalid(cy.get('#captcha').clear().type('*ABC').blur())
				cy.contains('Exatamente 4 caracteres com letras ou números') // check for helper text appearing
			})

			it('Should be valid for correct format', () => {
				isValid(cy.get('#captcha').clear().type('AB12').blur())
				cy.contains('Exatamente 4 caracteres com letras ou números').should('not.exist')
			})
		})
	})
	describe('Form submission', () => {
		it('On success', () => {
			fillForm(true)

			cy.intercept('POST', createAccountUrl, {
				statusCode: 200
			})
			clickSubmit()
			cy.contains('Sucesso!') // check for snack bar
		})
		it('On registering an already existing user', () => {
			const alreadyRegisteredUserError = 'Usuário já registrado'
			fillForm(true)

			cy.intercept('POST', createAccountUrl, {
				statusCode: 403
			})
			clickSubmit()
			checkErrorAndDismiss(alreadyRegisteredUserError)
		})
		it('On bad request', () => {
			const badRequestError = 'Email, código de autenticidade ou captcha inválidos. Lembre-se que o código de autenticidade usado deve ter sido gerado na última hora!'
			fillForm(true)

			cy.intercept('POST', createAccountUrl, {
				statusCode: 400
			})
			clickSubmit()
			checkErrorAndDismiss(badRequestError)
		})
		it('On submitting without accepting terms and conditions', () => {
			const didntAcceptTermsAndConditionsError = 'Você deve aceitar os termos e condições'
			fillForm(false)

			clickSubmit()
			checkErrorAndDismiss(didntAcceptTermsAndConditionsError)
		})
	})
})
