import React, { useContext } from 'react'

import TextField from '@material-ui/core/TextField'
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete'
import { matchSorter } from 'match-sorter'

import { SearchDataContext } from 'HOCs/withSearchData'
import { getCourseAlias } from 'utils'

interface GeneralSearchInputProps {
	handleChange: Function
}

const GeneralSearch: React.FC<GeneralSearchInputProps> = ({ handleChange }) => {
	const options = useContext(SearchDataContext)

	const getOptionLabel = (opt: any) => {
		if (!opt.code) return opt
		return opt.code + ' - ' + opt.name + ` (${getCourseAlias(opt.course, opt.specialization)})`
	}

	const defaultFilterOptions = createFilterOptions<string>()
	const autocompleteFilterOptions = (options: string[], { inputValue }: any) => {
		if (inputValue === '') return [] as string[] // so it doesnt show up on empty query

		return matchSorter(options, inputValue, { keys: [getOptionLabel] }).slice(0, 40)
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
