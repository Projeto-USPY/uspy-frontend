import React, { useState } from 'react'

import Button from '@material-ui/core/Button'
import Collapse from '@material-ui/core/Collapse'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import SvgIcon from '@material-ui/core/SvgIcon'
import Typography from '@material-ui/core/Typography'

import { Record } from 'types/Record'

import { ReactComponent as SearchTeacher } from 'images/search-teacher.svg'
import { ReactComponent as WriteComment } from 'images/write-comment.svg'
import { buildURI as buildSubjectPageURI } from 'pages/SubjectPage'

interface PropsType {
    semester: number
	course: string
	specialization: string
	records: Record[]
}

function RedIf ({ condition, children } : {condition: boolean, children: React.ReactNode}) {
	return <span style={{ color: condition ? 'red' : 'green' }}>
		{children}
	</span>
}

const TranscriptList: React.FC<PropsType> = ({ semester, records, course, specialization }) => {
	const [selectedRow, setSelectedRow] = useState<number | null>(null)

	const buildSubjectLink = (code: string) => {
		return buildSubjectPageURI(course, specialization, code)
	}

	return <div>
		<Typography variant='body1'>
			{semester + 1}º semestre
		</Typography>
		<Divider variant='fullWidth' />
		<List>
			{records.map((record, row) =>
				<React.Fragment key={row}>
					<ListItem
						button
						selected={selectedRow === row}
						onClick={() => setSelectedRow(selectedRow === row ? null : row)}
					>
						<ListItemText>
							<Link
								color='secondary'
								href={buildSubjectLink(record.code)}
							>
								{record.code}
							</Link>
						</ListItemText>
						<ListItemSecondaryAction>
							{
								record.completed
									? <RedIf condition={record.grade < 5}>
										{record.grade.toFixed(1)}
									</RedIf>
									: '-'
							}
						</ListItemSecondaryAction>
					</ListItem>
					<Collapse in={selectedRow === row} timeout="auto" unmountOnExit>
						<div className='pad1'>
							<Typography>
								<Link color='textPrimary' href={buildSubjectLink(record.code)} target="_blank"> {record.title} </Link>
							</Typography>
						</div>
						<Grid container justify='center' spacing={1} className='pad1'>
							<Grid item>
								<Grid container direction='column' alignItems='center'>
									<span className='prompt'> MÉDIA </span>
									<span className='prompt'>
										{
											record.completed
												? <RedIf condition={record.grade < 5}> {record.grade.toFixed(1)} </RedIf>
												: '-'
										}
									</span>
								</Grid>
							</Grid>
							<Grid item>
								<Grid container direction='column' alignItems='center'>
									<span className='prompt'> FREQUÊNCIA </span>
									<span className='prompt'>
										{
											record.completed
												? <RedIf condition={record.frequency < 70}> {record.frequency}% </RedIf>
												: '-'
										}
									</span>
								</Grid>
							</Grid>
							<Grid item>
								<Grid container direction='column' alignItems='center'>
									<span className='prompt'> STATUS </span>
									<span className='prompt'>
										{
											record.completed
												? <RedIf condition={record.frequency < 70 || record.grade < 5}>
													{record.frequency < 70 || record.grade < 5 ? 'REPROVADO' : 'APROVADO'}
												</RedIf>
												: '-'
										}

									</span>
								</Grid>
							</Grid>
						</Grid>
						<Button
							color='secondary'
							size='medium'
							fullWidth
							variant='outlined'
							endIcon={<SvgIcon color='secondary' component={record.completed ? WriteComment : SearchTeacher} viewBox="0 0 36 36"/>}
						>
							{record.completed ? 'AVALIAR' : 'OFERECIMENTOS'}
						</Button>
						<p/>
					</Collapse>
					<Divider variant='fullWidth' component='li' />
				</React.Fragment>
			)}
		</List>
		<br/>
	</div>
}

export default TranscriptList
