import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './components/Navbar'

const App = () => {
	return <>
		<Navbar buttons={['Login', 'Cadastrar']}/>
		<div style={{ height: '50px' }}></div>
		<h1> Hello World </h1>
	</>
}

ReactDOM.render(<App />, document.getElementById('root'))
