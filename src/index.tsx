import { ThemeProvider } from '@material-ui/core'
import { Switch, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'
import theme from 'theme'
import LoginPage from 'pages/LoginPage'
import HomePage from 'pages/HomePage'
const App = () => {
	return <>
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Switch>
					<Route exact path='/Login' component={LoginPage}/>
					<Route path='/' component={HomePage}/>
				</Switch>
			</BrowserRouter>
		</ThemeProvider>
	</>
}
ReactDOM.render(<App />, document.getElementById('root'))
