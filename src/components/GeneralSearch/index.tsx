import React, { useEffect, useState } from 'react'

import Collapse from '@material-ui/core/Collapse'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { useTheme } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import DomainIcon from '@material-ui/icons/Domain'
import LayersIcon from '@material-ui/icons/Layers'
import Autocomplete from '@material-ui/lab/Autocomplete'

import { CourseComplete, Institute, Course } from 'types/Course'

import api from 'API'
import { matchSorter } from 'match-sorter'
import { getInitials } from 'utils'

import SearchSelector from './SearchSelector'

import './style.css'

interface GeneralSearchInputProps {
	handleChange: (course: string, specialization: string, code: string) => void
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
		api.getSubjectSearch(institute, courseCode, specializationCode).then(
			(res: CourseComplete) => {
				const data = Object.keys(res.subjects).map(val => ({
					course: res.code,
					specialization: res.specialization,
					code: val,
					name: res.subjects[val],
				}))
				setSubjectOptions(data)
			},
		)
	}, [course, institute])

	const [searchDisabled, setSearchDisabled] = useState<boolean>(true)

	const getOptionLabel = (opt: any) => {
		if (!opt.code) return opt
		return opt.code + ' - ' + opt.name
	}

	const autocompleteFilterOptions = (
		options: string[],
		{ inputValue }: any,
	) => {
		return matchSorter(options, inputValue, {
			keys: [getOptionLabel],
		}).slice(0, 40)
	}

	const onChange = (
		_: unknown,
		value: { course: string; specialization: string; code: string },
	) => {
		handleChange(value.course, value.specialization, value.code)
	}

	let selectedInstitute: string, selectedCourse: string
	const [domainCollapse, setDomainCollapse] = useState(() => {
		return false
	})
	const [layersCollapse, setLayersCollapse] = useState(() => {
		return false
	})

	useEffect(() => {
		// get chosen options from memory
		selectedInstitute = localStorage.getItem('selected-institute')
		selectedCourse = localStorage.getItem('selected-course')

		if (selectedInstitute) {
			setInstitute(selectedInstitute)

			if (selectedCourse) {
				const courseTokens = selectedCourse.split('-')
				if (courseTokens.length === 2) {
					setCourse([courseTokens[0], courseTokens[1]])
				}

				setSearchDisabled(false)
			}
		} else {
			setLayersCollapse(!domainCollapse)
			setDomainCollapse(!layersCollapse)
		}
	}, [])

	return (
		<Container>
			<Grid
				container
				direction="column"
				style={{ margin: '5px 0 5px 0' }}>
				<Grid
					item
					spacing={1}
					container
					style={{
						justifyContent: 'flex-start',
						alignItems: isLarge ? 'center' : 'flex-start',
					}}>
					<Grid // building button
						item>
						<DomainIcon
							onClick={() => {
								setDomainCollapse(!domainCollapse)
							}}
							cursor="pointer"></DomainIcon>
					</Grid>
					<Grid
						item // institute input
						xs={domainCollapse ?? true}
						style={{
							justifyContent: 'center',
							alignItems: 'center',
							minWidth: !isLarge && domainCollapse ? '100%' : '0',
						}}>
						<Collapse in={domainCollapse}>
							<SearchSelector
								hidden={!domainCollapse}
								options={instituteOptions}
								onChange={(val: Institute) => {
									setInstitute(val.code)
									localStorage.setItem(
										'selected-institute',
										val.code,
									)
								}}
								label="Procure por um instituto"
								getOptionLabel={option =>
									`${option.name} (${getInitials(
										option.name,
									)})`
								}
							/>
						</Collapse>
					</Grid>

					<Grid // course button
						item>
						<LayersIcon
							onClick={() => {
								setLayersCollapse(!layersCollapse)
							}}
							cursor="pointer"></LayersIcon>
					</Grid>
					<Grid // course input
						item
						xs={true}
						style={{
							minWidth: !isLarge && layersCollapse ? '100%' : '0',
						}}>
						<Collapse in={layersCollapse}>
							<SearchSelector
								hidden={!layersCollapse}
								options={courseOptions}
								onChange={(val: Course) => {
									setCourse([val.code, val.specialization])
									localStorage.setItem(
										'selected-course',
										`${val.code}-${val.specialization}`,
									)
									setSearchDisabled(false)
								}}
								label="Procure por um curso"
								getOptionLabel={option =>
									`${option.name} (${getInitials(
										option.name,
									)}) (${option.shift ?? ''})`
								}
							/>
						</Collapse>
					</Grid>
				</Grid>
				<Grid item>
					<Collapse in={!searchDisabled}>
						<Autocomplete
							autoHighlight
							clearText="Limpar"
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
									maxHeight: '180px',
								},
							}}
							renderInput={params => (
								<TextField
									{...params}
									color="secondary"
									label={
										searchDisabled
											? 'Selecione seu instituto e curso'
											: 'Procure por uma disciplina'
									}
									variant="outlined"
								/>
							)}
						/>
					</Collapse>
				</Grid>
			</Grid>
		</Container>
	)
}

export default GeneralSearch
