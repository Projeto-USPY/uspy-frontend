import { ThemeProvider } from '@material-ui/core'
import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './components/Navbar'
import Container from '@material-ui/core/Container'
import theme from './theme'

const App = () => {
	return <>
		<ThemeProvider theme={theme}>
			<Navbar buttons={['Login', 'Cadastrar']}/>
			<Container style={{ backgroundColor: 'secondary' }}>
				<div style={{ height: '50px' }}></div>
				<h1> Hello World </h1>
			</Container>
		</ThemeProvider>
	</>
}

ReactDOM.render(<App />, document.getElementById('root'))
