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

import { ReactComponent as SearchTeacher } from 'images/search-teacher.svg'
import { ReactComponent as WriteComment } from 'images/write-comment.svg'
import { buildURI as buildSubjectPageURI } from 'pages/SubjectPage'

interface PropsType {
    semester: number
}

const subjects = [
	{
		code: 'SMA0356',
		title: 'Cálculo IV',
		grade: 10.0,
		attendance: 95
	},
	{
		code: 'SCC0221',
		title: 'Introdução a Ciência de Computação I',
		grade: 7.0,
		attendance: 75
	},
	{
		code: 'SCC0205',
		title: 'Teoria da Computação e Linguagens Formais'
	},
	{
		code: 'SCC0210',
		title: 'Laboratório de Algoritmos Avançados I',
		grade: 6.0,
		attendance: 60
	},
	{
		code: 'SCC0215',
		title: 'Organização de Arquivos',
		grade: 3.5,
		attendance: 50
	}

]

function RedIf ({ condition, children } : {condition: boolean, children: React.ReactNode}) {
	return <span style={{ color: condition ? 'red' : 'green' }}>
		{children}
	</span>
}

const TranscriptList: React.FC<PropsType> = ({ semester }) => {
	const [selectedRow, setSelectedRow] = useState<number | null>(null)

	const course = '55041'
	const specialization = '0'

	const buildSubjectLink = (code: string) => {
		return buildSubjectPageURI(course, specialization, code)
	}

	return <div>
		<Typography variant='body1'>
			{semester + 1}º semestre
		</Typography>
		<Divider variant='fullWidth' />
		<List>
			{subjects.map((subject, row) =>
				<React.Fragment key={row}>
					<ListItem
						button
						selected={selectedRow === row}
						onClick={() => setSelectedRow(selectedRow === row ? null : row)}
					>
						<ListItemText>
							<Link
								color='secondary'
								href={buildSubjectLink(subject.code)}
							>
								{subject.code}
							</Link>
						</ListItemText>
						<ListItemSecondaryAction>
							{
								subject.grade
									? <RedIf condition={subject.grade < 5}>
										{subject.grade.toFixed(1)}
									</RedIf>
									: '-'
							}
						</ListItemSecondaryAction>
					</ListItem>
					<Collapse in={selectedRow === row} timeout="auto" unmountOnExit>
						<div className='pad1'>
							<Typography>
								<Link color='textPrimary' href={buildSubjectLink(subject.code)} target="_blank"> {subject.title} </Link>
							</Typography>
						</div>
						<Grid container justify='center' spacing={1} className='pad1'>
							<Grid item>
								<Grid container direction='column' alignItems='center'>
									<span className='prompt'> MÉDIA </span>
									<span className='prompt'>
										{
											subject.grade
												? <RedIf condition={subject.grade < 5}> {subject.grade.toFixed(1)} </RedIf>
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
											subject.grade
												? <RedIf condition={subject.attendance < 70}> {subject.attendance}% </RedIf>
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
											subject.grade
												? <RedIf condition={subject.attendance < 70 || subject.grade < 5}>
													{subject.attendance < 70 || subject.grade < 5 ? 'REPROVADO' : 'APROVADO'}
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
							endIcon={<SvgIcon color='secondary' component={subject.grade ? WriteComment : SearchTeacher} viewBox="0 0 36 36"/>}
						>
							{subject.grade ? 'AVALIAR' : 'OFERECIMENTOS'}
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
