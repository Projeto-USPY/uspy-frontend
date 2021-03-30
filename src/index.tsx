import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Provider as StoreProvider } from 'react-redux'
import { Switch, Route, useLocation } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import { createStore } from 'redux'

import { ThemeProvider } from '@material-ui/core'

import { setUser, setUserNone } from 'actions'
import { isAuthenticated } from 'API'
import AboutPage from 'pages/AboutPage'
import HomePage from 'pages/HomePage'
import LoginPage from 'pages/LoginPage'
import NotFoundPage from 'pages/NotFoundPage'
import PasswordResetPage from 'pages/PasswordResetPage'
import RegisterPage from 'pages/RegisterPage'
import SettingsPage from 'pages/SettingsPage'
import SubjectPage from 'pages/SubjectPage'
import SubjectsPage from 'pages/SubjectsPage'
import TeachersPage from 'pages/TeachersPage'
import UseTermsPage from 'pages/UseTermsPage'
import reducer from 'reducer'
import LoggedInRoute from 'routes/LoggedInRoute'
import LoggedOutRoute from 'routes/LoggedOutRoute'
import theme from 'theme'

// CSS
import 'global.css'

const store = createStore(reducer)

function checkUserExists () {
	isAuthenticated().then(user => {
		if (user) {
			store.dispatch(setUser({
				id: user,
				name: '' // none for now. Change later
			}))
		} else {
			store.dispatch(setUserNone())
		}
	}).catch((statusCode: number) => {
		console.error(`Error: (${statusCode})`)
	})
}

const ScrollToTop: React.FC = () => {
	const { pathname } = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	return null
}

const App = () => {
	// Checks if user exists and dispatches action to update it.
	useEffect(checkUserExists, [])

	return <>
		<StoreProvider store={store}>
			<ThemeProvider theme={theme}>
				<BrowserRouter>
					<ScrollToTop/>
					<Switch>
						<LoggedOutRoute exact path='/Login' component={LoginPage}/>
						<LoggedOutRoute exact path='/Cadastro' component={RegisterPage}/>
						<Route exact path='/Professores' component={TeachersPage}/>
						<Route exact path='/Disciplinas' component={SubjectsPage}/>
						<LoggedOutRoute exact path='/RedefinicaoSenha' component={PasswordResetPage}/>
						<LoggedInRoute exact path='/Perfil' component={SettingsPage}/>
						<Route exact path='/Sobre' component={AboutPage}/>
						<Route exact path='/Termos' component={UseTermsPage}/>
						<Route exact path='/Disciplinas/:course/:specialization/:code' component={SubjectPage}/>
						<Route exact path='/' component={HomePage}/>
						<Route path='/' component={NotFoundPage}/>
					</Switch>
				</BrowserRouter>
			</ThemeProvider>
		</StoreProvider>
	</>
}
ReactDOM.render(<App />, document.getElementById('root'))
