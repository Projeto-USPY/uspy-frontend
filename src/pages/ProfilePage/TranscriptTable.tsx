import React, { useState } from 'react'

import Paper from '@material-ui/core/Paper'
import { useTheme } from '@material-ui/core/styles'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'

interface TranscriptTablePropsType {
    courses: string[]
}

const TranscriptTable: React.FC<TranscriptTablePropsType> = ({ courses }) => {
	const [selectedCourse, setSelectedCourse] = useState<number>(0)
	const theme = useTheme()

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

		</Paper>
	</div>
}

export default TranscriptTable
