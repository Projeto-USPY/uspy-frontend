import React, { useEffect, useState } from 'react'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { useTheme } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Autocomplete from '@material-ui/lab/Autocomplete'

import { CourseComplete, Institute, Course } from 'types/Course'

import api from 'API'
import { matchSorter } from 'match-sorter'
import { getInitials } from 'utils'

import SearchSelector from './SearchSelector'

interface GeneralSearchInputProps {
	handleChange: Function
}

const GeneralSearch: React.FC<GeneralSearchInputProps> = ({ handleChange }) => {
	const theme = useTheme()
	const isLarge = useMediaQuery(theme.breakpoints.up('sm'))

	const [course, setCourse] = useState<[string, string]>(['', ''])
	const [institute, setInstitute] = useState<string>('55')

	// Institutes useEffect - run on mount
	const [instituteOptions, setInstituteOptions] = useState<Institute[]>()
	useEffect(() => {
		api.getInstitutes().then(res => {
			setInstituteOptions(res)
		})
	}, [])

	// Courses useEffect - run on change of institute
	const [courseOptions, setCourseOptions] = useState<Course[]>([])
	useEffect(() => {
		api.getCourses(institute).then(res => {
			setCourseOptions(res)
		})
	}, [institute])

	//  Subjects useEffect - run on change of institute and course
	const [subjectOptions, setSubjectOptions] = useState([])
	useEffect(() => {
		const [courseCode, specializationCode] = course
		api.getCourseComplete(institute, courseCode, specializationCode).then((res : CourseComplete) => {
			const data = Object.keys(res.subjects).map((val) => ({
				course: res.code,
				specialization: res.specialization,
				code: val,
				name: res.subjects[val]
			}))
			setSubjectOptions(data)
		})
	}, [course, institute])

	const [searchDisabled, setSearchDisabled] = useState<boolean>(true)

	const getOptionLabel = (opt: any) => {
		if (!opt.code) return opt
		return opt.code + ' - ' + opt.name
	}

	const autocompleteFilterOptions = (options: string[], { inputValue }: any) => {
		return matchSorter(options, inputValue, { keys: [getOptionLabel] }).slice(0, 40)
	}

	const onChange = (evt: any, value: any) => {
		handleChange(value.course, value.specialization, value.code)
	}

	return <Container>
		<Grid
			container
			spacing={1}
			direction={isLarge ? 'row' : 'column'}
		>
			<Grid
				item
				xs
			>
				<SearchSelector
					options={instituteOptions}
					onChange={(val: Institute) => setInstitute(val.code)}
					label='Procure por um instituto'
					getOptionLabel={(option) => `${option.name} (${getInitials(option.name)})`}
				/>

			</Grid>
			<Grid
				item
				xs
			>
				<SearchSelector
					options={courseOptions}
					onChange={(val: Course) => {
						setCourse([val.code, val.specialization])
						setSearchDisabled(false)
					}}
					label='Procure por um curso'
					getOptionLabel={(option) => `${option.name} (${getInitials(option.name)})`}
				/>
			</Grid>
		</Grid>
		<Autocomplete
			disabled={searchDisabled}
			autoHighlight
			clearText='Limpar'
			clearOnEscape
			freeSolo
			openOnFocus
			className="inputfield"

			options={subjectOptions}
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
			/>}/>
	</Container>
}

export default GeneralSearch
