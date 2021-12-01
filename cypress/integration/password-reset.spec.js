import { buildURI as buildLoginPageURI } from 'pages/LoginPage'
import { buildURI } from 'pages/PasswordResetPage'
const passwordResetUrl = Cypress.env('API_URL') + '/account/password_reset'

function isInvalid (el) {
	return el.invoke('attr', 'aria-invalid').should('eq', 'true')
}
function isValid (el) {
	return el.invoke('attr', 'aria-invalid').should('eq', 'false')
}

function sendForm () {
	cy.get('#pwd1').clear().type('abc@1234')
	cy.get('#pwd2').clear().type('abc@1234')
	cy.get('#submit').click()
}

function dismissDialog () {
	cy.get('#dismiss-error-dialog').click()
}

function checkErrorAndDismiss (errMessage) {
	cy.contains(errMessage)
	dismissDialog()
}

describe('Password Reset Page', () => {
	beforeEach(() => {
		cy.visit(buildURI())
	})
	describe('Form should work correctly', () => {
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

		it('Button should be disabled when form is invalid', () => {
			cy.get('#submit').should('be.disabled')

			cy.get('#pwd1').type('abc').blur()
			cy.get('#submit').should('be.disabled')

			cy.get('#pwd1').clear().type('Batata@123')
			cy.get('#pwd2').clear().type('Batata@124')
			cy.get('#submit').should('be.disabled')
		})

		it('Button should be enabled when form is valid', () => {
			cy.get('#pwd1').clear().type('abc@1234').blur()
			cy.get('#pwd2').clear().type('abc@1234').blur()
			cy.get('#submit').should('be.enabled')
		})
	})

	describe('Post-form submit events', () => {
		it('Should give alert on invalid or missing token', () => {
			sendForm()
			checkErrorAndDismiss('Token inválido!')
		})
		it('Should give alert on missing user', () => {
			cy.intercept('PUT', passwordResetUrl, { statusCode: 404 })
			sendForm()
			checkErrorAndDismiss('O usuário não existe!')
		})

		it('Should give alert on unexpected error', () => {
			cy.intercept('PUT', passwordResetUrl, { statusCode: 500 })
			sendForm()
			checkErrorAndDismiss('Algo deu errado')
		})

		it('Should redirect to login page on success', () => {
			cy.intercept('PUT', passwordResetUrl, { statusCode: 200 })
			sendForm()
			cy.contains('Senha redefinida com sucesso!')
			cy.url().should('match', new RegExp(buildLoginPageURI()))
		})
	})
})
