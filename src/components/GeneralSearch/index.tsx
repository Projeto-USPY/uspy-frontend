import React, { useContext } from 'react'

import TextField from '@material-ui/core/TextField'
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete'

import { SearchDataContext } from 'HOCs/withSearchData'
import { getCourseAlias } from 'utils'

interface GeneralSearchInputProps {
	handleChange: Function
}

const GeneralSearch: React.FC<GeneralSearchInputProps> = ({ handleChange }) => {
	const options = useContext(SearchDataContext)

	const defaultFilterOptions = createFilterOptions<string>()
	const autocompleteFilterOptions = (options: string[], state: any) => {
		const { inputValue } = state
		if (inputValue === '') return [] // so it doesnt show up on empty query

		return defaultFilterOptions(options, state).slice(0, 5) // only show top 5 suggestions
	}

	const onChange = (_: any, value: any) => {
		handleChange(value.course, value.specialization, value.code)
	}

	return <Autocomplete
		freeSolo
		className="inputfield"

		options={options}
		openOnFocus={false}
		onChange={onChange}
		getOptionLabel={(opt: any) => opt.code + ' - ' + opt.name + ` (${getCourseAlias(opt.course, opt.specialization)})`}
		filterOptions={autocompleteFilterOptions}
		renderInput={(params) => <TextField
			{...params}
			color='secondary'
			label="Procure por uma disciplina"
			variant="outlined"
			margin="normal"
		/>}/>
}

export default GeneralSearch
