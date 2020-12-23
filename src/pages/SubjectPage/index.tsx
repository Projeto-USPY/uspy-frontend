import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

interface URLParameter {
	code: string
}

const SubjectPage = () => {
	const { code } = useParams<URLParameter>()
	return <div className='main'>
		<main>
			<Navbar/>
			<div style={{ height: '150px' }}></div>

			<h1>Apresentando disciplina {code} </h1>
		</main>
		<Footer text='Made with love by Preischadt and Turci'/>
	</div>
}

export default SubjectPage
