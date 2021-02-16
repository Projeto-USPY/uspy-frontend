// React
import React from 'react'
import ReactDOM from 'react-dom'

// Routes
import { Switch, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import LoggedInRoute from 'routes/LoggedInRoute'

// Redux
import { createStore } from 'redux'
import { Provider as StoreProvider } from 'react-redux'
import reducer from 'reducer'

// Theme
import { ThemeProvider } from '@material-ui/core'
import theme from 'theme'

// Pages
import LoginPage from 'pages/LoginPage'
import RegisterPage from 'pages/RegisterPage'
import HomePage from 'pages/HomePage'
import TeachersPage from 'pages/TeachersPage'
import SubjectsPage from 'pages/SubjectsPage'
import SubjectPage from 'pages/SubjectPage'
import SettingsPage from 'pages/SettingsPage'
import NotFoundPage from 'pages/NotFoundPage'

// CSS
import 'global.css'

const store = createStore(reducer)

const App = () => {
	return <>
		<StoreProvider store={store}>
			<ThemeProvider theme={theme}>
				<BrowserRouter>
					<Switch>
						<Route exact path='/Login' component={LoginPage}/>
						<Route exact path='/Cadastro' component={RegisterPage}/>
						<Route exact path='/Professores' component={TeachersPage}/>
						<Route exact path='/Disciplinas' component={SubjectsPage}/>
						<LoggedInRoute exact path='/Perfil' component={SettingsPage}/>
						<Route exact path='/Disciplinas/:course/:code' component={SubjectPage}/>
						<Route exact path='/' component={HomePage}/>
						<Route path='/' component={NotFoundPage}/>
					</Switch>
				</BrowserRouter>
			</ThemeProvider>
		</StoreProvider>
	</>
}
ReactDOM.render(<App />, document.getElementById('root'))
