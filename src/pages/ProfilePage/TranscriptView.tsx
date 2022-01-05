import React, { useEffect, useState } from 'react'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { useTheme } from '@material-ui/core/styles'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import { Course } from 'types/Course'
import { Record } from 'types/Record'

import api from 'API'
import Circle from 'components/Circle'
import MessagePanel from 'components/MessagePanel'
import TranscriptList from 'pages/ProfilePage/TranscriptList'
import TranscriptTable from 'pages/ProfilePage/TranscriptTable'
import { getCourseAlias } from 'utils'

interface TranscriptViewPropsType {
    courses: Course[]
}

const semesters = [
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10
]

const TranscriptView: React.FC<TranscriptViewPropsType> = ({ courses }) => {
	const [selectedCourse, setSelectedCourse] = useState<number>(0)
	const [selectedSemester, setSelectedSemester] = useState<number>(0)
	const [records, setRecords] = useState<Record[] | null>(null)
	const [errorMessage, setErrorMessage] = useState<string>('')

	const course = courses[selectedCourse]

	useEffect(() => {
		api.getRecords(course.code, course.specialization, selectedSemester + 1, false).then(records => {
			setRecords(records)
		}).catch(err => {
			if (err.code === 'not_found') {
				setErrorMessage('Não foram encontradas disciplinas para este curso')
			} else {
				setErrorMessage(`Algo deu errado (${err.message}). Tente novamente mais tarde`)
			}
		})
	}, [selectedSemester, course])

	const theme = useTheme()
	const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))
	const changeTab = (evt: React.ChangeEvent, tab: number) => {
		setSelectedCourse(tab)
	}

	return <div className='full-width'>
		<Paper className='transcript-tabs' style={{ backgroundColor: theme.palette.primary.main, borderRadius: '10px' }}>
			<Tabs
				value={selectedCourse}
				onChange={changeTab}
				style={{ color: 'white' }}
			>
				{courses.map((course, idx) => <Tab key={idx} label={<b>{getCourseAlias(course.code, course.specialization)}</b>} />)}
			</Tabs>
		</Paper>
		<Paper
			variant={isDesktop ? 'outlined' : 'elevation'}
			elevation={isDesktop ? 1 : 0}
			className='transcript-body'
		>
			<Typography variant='h6'>
				<b> Semestre </b>
			</Typography>
			<br/>
			<Grid
				container
				wrap='wrap'
				spacing={2}
				alignItems='center'
			>
				{semesters.map((semester, idx) =>
					<Grid
						item
						key={idx}
						className='cursor-pointer'
						onClick={() => setSelectedSemester(idx)}
					>
						<Circle size={40} color={selectedSemester === idx ? 'primary' : 'secondary'}>
							<div>
								{idx + 1}
							</div>
						</Circle>
						{ selectedSemester === idx
							? <div style={{
								borderTop: `1px solid ${theme.palette.primary.main}`,
								width: 32,
								marginTop: 6,
								marginLeft: 'auto',
								marginRight: 'auto'
							}}/>
							: null
						}
					</Grid>
				)}
			</Grid>
			<br/>
			{
				!errorMessage
					? records
						? isDesktop
							? <TranscriptTable course={course.code} specialization={course.specialization} semester={selectedSemester} records={records}/>
							: <TranscriptList course={course.code} specialization={course.specialization} semester={selectedSemester} records={records}/>
						: null
					: <MessagePanel message={errorMessage} height={300}/>
			}
		</Paper>
	</div>
}

export default TranscriptView
