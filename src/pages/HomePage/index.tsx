import React from 'react'
import Navbar from 'components/Navbar'
import Container from '@material-ui/core/Container'
import Footer from 'components/Footer'
import './style.css'
import Typography from '@material-ui/core/Typography'
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField'

const HomePage = () => {
	const options = ['SCC0200', 'SMA0300', 'SME0107', 'SCC0201', 'SCC0257', 'SCC0255', 'SMA0301', 'Kalinka', 'Moacir', 'Mello']

	const defaultFilterOptions = createFilterOptions<string>()
	const autocompleteFilterOptions = (options: string[], state: any) => {
		const { inputValue } = state
		if (inputValue === '') return [] // so it doesnt show up on empty query

		return defaultFilterOptions(options, state).slice(0, 5) // only show top 5 suggestions
	}
	return <>
		<div className='main'>
			<main>
				<Navbar buttons={[{ title: 'Login', route: '/Login' }, { title: 'Cadastrar', route: '/Cadastro' }]} />
				<Container style={{ backgroundColor: 'secondary' }}>
					<div style={{ height: '150px' }}></div>
					<center><img style={{ padding: '0 auto' }}src='data:image/png;base64,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'/></center>
					<Typography align='justify' variant='body1'>O {'<placeholder nome>'} é um sistema colaborativo em que você pode consultar estatísticas e reviews sobre disciplinas e professores do ICMC. Para colaborar, você deve submeter um PDF do seu resumo escolar, mas fique tranquilo, todos os dados são anônimos, criptografados e armazenados sigilosamente. Para começar, inscreva-se com seu email USP, ou faça login.</Typography>
					<Autocomplete
						freeSolo
						className="inputfield"

						options={options}
						openOnFocus={false}
						filterOptions={autocompleteFilterOptions}
						renderInput={(params) => <TextField
							{...params}
							color='secondary'
							label="Procure por uma disciplina ou professor"
							variant="outlined"
							margin="normal"
						/>}/>
				</Container>
			</main>
			<Footer text='Made with love by Preischadt and Turci'/>
		</div>
	</>
}

export default HomePage