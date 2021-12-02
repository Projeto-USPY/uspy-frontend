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
		if (inputValue === '') return [] as string[] // so it doesnt show up on empty query

		return defaultFilterOptions(options, state).slice(0, 40)
	}

	const getOptionLabel = (opt: any) => {
		if (!opt.code) return opt
		return opt.code + ' - ' + opt.name + ` (${getCourseAlias(opt.course, opt.specialization)})`
	}

	const onChange = (evt: any, value: any) => {
		if (typeof value !== 'object') {
			const firstOption = defaultFilterOptions(options, { inputValue: value, getOptionLabel })[0]
			if (firstOption) handleChange(firstOption.course, firstOption.specialization, firstOption.code)
			evt.preventDefault()
			return false
		}
		handleChange(value.course, value.specialization, value.code)
	}

	return <Autocomplete
		autoHighlight
		clearText='Limpar'
		clearOnEscape
		freeSolo
		className="inputfield"

		options={options}
		openOnFocus={false}
		onChange={onChange}
		getOptionLabel={getOptionLabel}
		filterOptions={autocompleteFilterOptions}
		ListboxProps={{
			style: {
				maxHeight: '180px'
			}
		}}
		renderInput={(params) => <TextField
			{...params}
			color='secondary'
			label="Procure por uma disciplina"
			variant="outlined"
			margin="normal"
		/>}/>
}

export default GeneralSearch
