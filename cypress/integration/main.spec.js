// main.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

import { buildURI as buildAboutPageURI } from 'pages/AboutPage'
import { buildURI as buildLoginPageURI } from 'pages/LoginPage'
import { buildURI as buildRegisterPageURI } from 'pages/RegisterPage'
import { buildURI as buildSubjectsPageURI } from 'pages/SubjectsPage'
import { buildURI as buildUseTermsPageURI } from 'pages/UseTermsPage'

const apiURL = Cypress.env('API_URL')

describe('Home Page', () => {
	beforeEach(() => {
		cy.intercept(apiURL + '/api/subject/all*').as('getAllSubjects')
		cy.visit('/')
		cy.wait('@getAllSubjects')
	})

	it('should be navigateable', () => {
		// Page Termos de Uso
		cy.contains('Termos de Uso').click()
		cy.url().should('match', new RegExp(buildUseTermsPageURI()))
		cy.go('back')

		// Page Sobre
		cy.contains('Sobre').click()
		cy.url().should('match', new RegExp(buildAboutPageURI()))
		cy.go('back')

		// Page Ver Lista de Disciplinas
		cy.contains('Ver lista de disciplinas').click()
		cy.url().should('match', new RegExp(buildSubjectsPageURI()))
		cy.go('back')

		// Page Login
		cy.contains('Login').click()
		cy.url().should('match', new RegExp(buildLoginPageURI()))
		cy.go('back')

		// Page cadastro
		cy.contains('Cadastrar').click()
		cy.url().should('match', new RegExp(buildRegisterPageURI()))
		cy.go('back')

		// Home page button
		cy.get('.toolbar img').first().click()
	})

	it('search engine should work', () => {
		// todo: cy.get('input').should('be.focused')
		cy.get('input').type('SCC0221')
		cy.contains('Introdução à Ciência de Computação')
		cy.get('button[title=Limpar]').click()
		cy.get('input')
			.should('have.value', '')
			.type('Intro')

		cy.contains('Introdução')

		// test that completion box disappears when clicking outside
		cy.get('body').click()
		cy.contains('Introdução').should('not.exist')
	})
})
