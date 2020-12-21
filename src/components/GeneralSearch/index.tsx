import React from 'react'
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField'

const GeneralSearch = () => {
	const options = ['SCC0200', 'SMA0300', 'SME0107', 'SCC0201', 'SCC0257', 'SCC0255', 'SMA0301', 'Kalinka', 'Moacir', 'Mello']

	const defaultFilterOptions = createFilterOptions<string>()
	const autocompleteFilterOptions = (options: string[], state: any) => {
		const { inputValue } = state
		if (inputValue === '') return [] // so it doesnt show up on empty query

		return defaultFilterOptions(options, state).slice(0, 5) // only show top 5 suggestions
	}

	return <Autocomplete
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
}

export default GeneralSearch
