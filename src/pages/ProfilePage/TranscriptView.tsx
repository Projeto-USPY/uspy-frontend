import React, { useState } from 'react'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { useTheme } from '@material-ui/core/styles'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import Circle from 'components/Circle'
import TranscriptList from 'pages/ProfilePage/TranscriptList'
import TranscriptTable from 'pages/ProfilePage/TranscriptTable'

interface TranscriptViewPropsType {
    courses: string[]
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
				{courses.map((course, idx) => <Tab key={idx} label={<b>{course}</b>} />)}
			</Tabs>
		</Paper>
		<Paper variant='outlined' className='transcript-body'>
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
			{ isDesktop
				? <TranscriptTable semester={selectedSemester}/>
				: <TranscriptList semester={selectedSemester}/>
			}
		</Paper>
	</div>
}

export default TranscriptView
