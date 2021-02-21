import React, { useContext } from 'react'
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField'
import { SearchDataContext } from 'HOCs/withSearchData'

interface GeneralSearchInputProps {
	handleChange: (arg0: string, arg1: string)=>void
}

const courseAliases = new Map<string, string>()
courseAliases.set('550410', 'BCC')
courseAliases.set('550514', 'BSI')
courseAliases.set('550714', 'Estat.')
courseAliases.set('55030300', 'Lic. em Mat.')
courseAliases.set('55030100', 'Mat. - Núcleo Geral')
courseAliases.set('550601', 'Mat. Apl.')
courseAliases.set('550900', 'BCD')
courseAliases.set('55030200', 'Mat. Pura')

const GeneralSearch: React.FC<GeneralSearchInputProps> = ({ handleChange }) => {
	const options = useContext(SearchDataContext)

	const defaultFilterOptions = createFilterOptions<string>()
	const autocompleteFilterOptions = (options: string[], state: any) => {
		const { inputValue } = state
		if (inputValue === '') return [] // so it doesnt show up on empty query

		return defaultFilterOptions(options, state).slice(0, 5) // only show top 5 suggestions
	}

	const onChange = (_: any, value: any) => {
		handleChange(value.course, value.code)
	}

	return <Autocomplete
		freeSolo
		className="inputfield"

		options={options}
		openOnFocus={false}
		onChange={onChange}
		getOptionLabel={(opt: any) => opt.code + ' - ' + opt.name + ` (${courseAliases.get(opt.course as string)})`}
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
