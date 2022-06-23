import React, { useEffect, useState } from 'react'

import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'

import { CourseComplete } from 'types/Course'

import api from 'API'
import { matchSorter } from 'match-sorter'
import { getCourseAlias } from 'utils'

interface GeneralSearchInputProps {
	course: [string, string]
	institute: string
	handleChange: Function
}

const GeneralSearch: React.FC<GeneralSearchInputProps> = ({ course, institute, handleChange }) => {
	const [keys, setKeys] = useState([])
	useEffect(() => {
		const [courseCode, specializationCode] = course
		api.getCourseComplete(institute, courseCode, specializationCode).then((res : CourseComplete) => {
			const data = Object.keys(res.subjects).map((val) => ({
				course: res.code,
				specialization: res.specialization,
				code: val,
				name: res.subjects[val]
			}))
			setKeys(data)
		})
	}, [course, institute])

	const getOptionLabel = (opt: any) => {
		if (!opt.code) return opt
		return opt.code + ' - ' + opt.name + ` (${getCourseAlias(opt.course, opt.specialization)})`
	}

	const autocompleteFilterOptions = (options: string[], { inputValue }: any) => {
		if (inputValue === '') return [] as string[] // so it doesnt show up on empty query

		return matchSorter(options, inputValue, { keys: [getOptionLabel] }).slice(0, 40)
	}

	const onChange = (evt: any, value: any) => {
		handleChange(value.course, value.specialization, value.code)
	}

	return <Autocomplete
		autoHighlight
		clearText='Limpar'
		clearOnEscape
		freeSolo
		className="inputfield"

		options={keys}
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
