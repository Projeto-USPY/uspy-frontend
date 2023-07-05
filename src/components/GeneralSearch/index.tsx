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

import { Institute, Course, CourseComplete } from 'types/Course'

import api from 'API'
import { matchSorter } from 'match-sorter'
import { getInitials } from 'utils'

import SearchSelector from './SearchSelector'

import './style.css'
import { useMySnackbar } from 'hooks'
import { SubjectKey } from 'types/Subject'

const getParametersFromStorage = (): [Institute, Course] => {
	const instituteCode = localStorage.getItem('selected-institute')
	const courseAndSpec = localStorage.getItem('selected-course')
	if (!(instituteCode && courseAndSpec)) {
		return [null, null]
	}

	const institute = instituteCode && {
		code: instituteCode,
		name: '',
	}
	const [courseCode, spec] = courseAndSpec.split('-')
	const course = courseAndSpec && {
		code: courseCode,
		specialization: spec,
		name: '',
	}
	return [institute, course]
}

const [savedInstitute, savedCourse] = getParametersFromStorage()

const getSubjectLabel = (opt: SubjectKey): string => {
	if (!opt?.code) return ''
	return opt.code + ' - ' + opt.name
}

const getCourseLabel = (opt: Partial<CourseComplete>): string => {
	if (!opt?.code) return ''
	return `${opt.name} (${getInitials(opt.name)}) (${opt?.shift ?? ''})`
}

const getInstituteLabel = (opt: Institute): string => {
	if (!opt?.code) return ''
	return `${opt.name} (${getInitials(opt.name)})`
}

const autocompleteFilterOptions = (
	options: SubjectKey[],
	{ inputValue }: any,
) => {
	return matchSorter<SubjectKey>(options, inputValue, {
		keys: [
			{
				key: getSubjectLabel,
			},
		],
	}).slice(0, 40)
}

interface GeneralSearchInputProps {
	handleChange: (course: string, specialization: string, code: string) => void
}

const GeneralSearch: React.FC<GeneralSearchInputProps> = ({ handleChange }) => {
	const theme = useTheme()
	const isLarge = useMediaQuery(theme.breakpoints.up('sm'))
	const notify = useMySnackbar()

	const [institute, setInstitute] = useState<Institute>(savedInstitute)
	const [course, setCourse] = useState<Course>(savedCourse)

	const [instituteOptions, setInstituteOptions] = useState<Institute[]>([])
	const [courseOptions, setCourseOptions] = useState<Course[]>([])

	const [instituteInputCollapse, setInstituteInputCollapse] =
		useState<boolean>(savedInstitute === null)
	const [courseInputCollapse, setCourseInputCollapse] = useState<boolean>(
		savedCourse === null,
	)

	useEffect(() => {
		api.getInstitutes()
			.then(res => {
				setInstituteOptions(res)
				if (institute) {
					const entry = res.find(i => i.code === institute.code)
					setInstitute(entry)
				}
			})
			.catch(err => {
				notify('Erro desconhecido ao carregar institutos', 'error')
				console.error(err)
			})
	}, [])

	useEffect(() => {
		if (!institute || !institute.code) {
			return
		}
		api.getCourses(institute.code)
			.then(res => {
				setCourseOptions(res)
				if (course) {
					const entry = res.find(c => c.code === course.code)
					setCourse(entry ?? course)
				}
			})
			.catch(err => {
				if (err.status === 404) {
					notify('Curso não encontrado', 'error')
				} else {
					notify(
						`Erro desconhecido ao carregar cursos para ${institute.name}`,
						'error',
					)
					console.error(err)
				}
			})
	}, [institute])

	//  Subjects useEffect - run on change of institute and course
	const [subjectOptions, setSubjectOptions] = useState([])
	useEffect(() => {
		if (!course || !institute) return
		const { code: courseCode, specialization } = course
		api.getSubjectSearch(institute.code, courseCode, specialization)
			.then(res => {
				const data = Object.keys(res.subjects).map(val => ({
					course: res.code,
					specialization: res.specialization,
					code: val,
					name: res.subjects[val],
				}))
				setSubjectOptions(data)
			})
			.catch(err => {
				if (err.status === 404) {
					notify('Nenhuma disciplina encontrada', 'error')
				} else {
					notify('Erro desconhecido ao carregar disciplinas', 'error')
					console.error(err)
				}
			})
	}, [course, institute])

	const onChange = (_evt: unknown, value: SubjectKey) => {
		handleChange(value.course, value.specialization, value.code)
	}

	const searchDisabled = !institute || !course

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
								setInstituteInputCollapse(
									!instituteInputCollapse,
								)
							}}
							cursor="pointer"
						/>
					</Grid>
					<Grid
						item // institute input
						xs={instituteInputCollapse ?? true}
						style={{
							justifyContent: 'center',
							alignItems: 'center',
							minWidth:
								!isLarge && instituteInputCollapse
									? '100%'
									: '0',
						}}>
						<Collapse in={instituteInputCollapse}>
							<SearchSelector
								hidden={!instituteInputCollapse}
								options={instituteOptions}
								onChange={(val: Institute) => {
									setInstitute(val)
									setCourse(null)
									setSubjectOptions([])
									if (val) {
										localStorage.setItem(
											'selected-institute',
											val.code,
										)
									}
								}}
								value={institute}
								label="Procure por um instituto"
								getOptionLabel={getInstituteLabel}
							/>
						</Collapse>
					</Grid>

					<Grid // course button
						item>
						<LayersIcon
							onClick={() => {
								setCourseInputCollapse(!courseInputCollapse)
							}}
							cursor="pointer"
						/>
					</Grid>
					<Grid // course input
						item
						xs={true}
						style={{
							minWidth:
								!isLarge && courseInputCollapse ? '100%' : '0',
						}}>
						<Collapse in={courseInputCollapse}>
							<SearchSelector
								hidden={!courseInputCollapse}
								options={courseOptions}
								onChange={(val: Course) => {
									setCourse(val)
									setSubjectOptions([])
									if (val) {
										localStorage.setItem(
											'selected-course',
											`${val.code}-${val.specialization}`,
										)
									}
								}}
								value={course}
								label="Procure por um curso"
								getOptionLabel={getCourseLabel}
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
							disabled={subjectOptions.length === 0}
							onChange={onChange}
							getOptionLabel={getSubjectLabel}
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
