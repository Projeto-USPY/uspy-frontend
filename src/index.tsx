import { ThemeProvider } from '@material-ui/core'
import React from 'react'
import ReactDOM from 'react-dom'
import theme from './theme'
import HomePage from './pages/HomePage'
const App = () => {
	return <>
		<ThemeProvider theme={theme}>
			<HomePage/>
		</ThemeProvider>
	</>
}
ReactDOM.render(<App />, document.getElementById('root'))
