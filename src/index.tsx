import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Provider as StoreProvider, useSelector, useDispatch } from 'react-redux'
import { Switch, Route, useLocation } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import { createStore } from 'redux'

import { ThemeProvider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { setUser, setUserNone, uspyAlert } from 'actions'
import api from 'API'
import ErrorDialog from 'components/ErrorDialog'
import { SnackbarProvider } from 'notistack'
import AboutPage, { buildURI as buildAboutPageURI } from 'pages/AboutPage'
import AccountActivationPage, { buildURI as buildAccountActivationPageURI } from 'pages/AccountActivationPage'
import HomePage, { buildURI as buildHomePageURI } from 'pages/HomePage'
import LoginPage, { buildURI as buildLoginPageURI } from 'pages/LoginPage'
import NotFoundPage from 'pages/NotFoundPage'
import OfferingsPage, { buildURI as buildOfferingsPageURI } from 'pages/OfferingsPage'
import PasswordResetPage, { buildURI as buildPasswordResetPageURI } from 'pages/PasswordResetPage'
import RegisterPage, { buildURI as buildRegisterPageURI } from 'pages/RegisterPage'
import SettingsPage, { buildURI as buildProfilePageURI } from 'pages/SettingsPage'
import SubjectPage, { buildURI as buildSubjectPageURI } from 'pages/SubjectPage'
import SubjectsPage, { buildURI as buildSubjectsPageURI } from 'pages/SubjectsPage'
import TeachersPage, { buildURI as buildTeachersPageURI } from 'pages/TeachersPage'
import UseTermsPage, { buildURI as buildUseTermsPageURI } from 'pages/UseTermsPage'
import reducer from 'reducer'
import LoggedInRoute from 'routes/LoggedInRoute'
import LoggedOutRoute from 'routes/LoggedOutRoute'
import theme from 'theme'

// CSS
import 'global.css'

const store = createStore(reducer)

function checkUserExists () {
	api.isAuthenticated().then(user => {
		if (user) {
			store.dispatch(setUser({
				id: user,
				name: '' // none for now. Change later
			}))
		} else {
			store.dispatch(setUserNone())
		}
	}).catch(err => {
		console.error(`Error: (${err})`)
	})
}

const ScrollToTop: React.FC = () => {
	const { pathname } = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	return null
}

const useStyles = makeStyles({
	success: { backgroundColor: '#3c733cf7 !important' },
	info: { backgroundColor: '#37537df8 !important' }
})

const DialogManager = () => {
	const dialogError = useSelector(state => state.dialogError)
	const dispatch = useDispatch()
	console.log(dialogError)
	return <ErrorDialog
		open={!!dialogError && Boolean(dialogError.message)}
		message={dialogError?.message || ''}
		title={dialogError?.title}
		close={() => {
			dispatch(uspyAlert())
		}}
	/>
}

const App = () => {
	// Checks if user exists and dispatches action to update it.
	useEffect(checkUserExists, [])

	const classes = useStyles()

	return <>
		<StoreProvider store={store}>
			<ThemeProvider theme={theme}>
				<SnackbarProvider maxSnack={1} hideIconVariant classes={{
					variantSuccess: classes.success,
					variantInfo: classes.info
				}}>
					<BrowserRouter>
						<ScrollToTop/>
						<Switch>
							<LoggedOutRoute exact path={buildLoginPageURI()} component={LoginPage}/>
							<LoggedOutRoute exact path={buildRegisterPageURI()} component={RegisterPage}/>
							<Route exact path={buildTeachersPageURI()} component={TeachersPage}/>
							<Route exact path={buildSubjectsPageURI()} component={SubjectsPage}/>
							<LoggedOutRoute exact path={buildPasswordResetPageURI()} component={PasswordResetPage}/>
							<LoggedInRoute exact path={buildProfilePageURI()} component={SettingsPage}/>
							<Route exact path={buildAboutPageURI()} component={AboutPage}/>
							<Route exact path={buildUseTermsPageURI()} component={UseTermsPage}/>
							<Route exact path={buildSubjectPageURI(':course', ':specialization', ':code')} component={SubjectPage}/>
							<LoggedInRoute exact path={buildOfferingsPageURI(':course', ':specialization', ':code')} component={OfferingsPage}/>
							<Route exact path={buildHomePageURI()} component={HomePage}/>
							<Route exact path={buildAccountActivationPageURI()} component={AccountActivationPage}/>
							<Route path='/' component={NotFoundPage}/>
						</Switch>
					</BrowserRouter>
					<DialogManager />
				</SnackbarProvider>
			</ThemeProvider>
		</StoreProvider>
	</>
}
ReactDOM.render(<App />, document.getElementById('root'))
