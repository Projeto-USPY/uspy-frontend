import React from 'react'

import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import Link from '@material-ui/core/Link'
import SvgIcon from '@material-ui/core/SvgIcon'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
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

const TranscriptTable: React.FC<PropsType> = ({ semester }) => {
	const reviewOffering = (subjectCode: string) => {
		console.log('Reviewing', subjectCode)
	}

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
		<br/>
		<Table size='small' >
			<TableHead>
				<TableRow>
					<TableCell>
                        Código
					</TableCell>
					<TableCell>
                        Nome
					</TableCell>
					<TableCell align='center'>
                        Nota
					</TableCell>
					<TableCell align='center'>
                        Frequência
					</TableCell>
					<TableCell/>
				</TableRow>
			</TableHead>
			<TableBody>
				{subjects.map((subject, row) =>
					<TableRow key={row}>
						<TableCell>
							<Link
								color='secondary'
								href={buildSubjectLink(subject.code)}
							>
								{subject.code}
							</Link>
						</TableCell>
						<TableCell>
							<Link
								color='secondary'
								href={buildSubjectLink(subject.code)}
							>
								{subject.title}
							</Link>
						</TableCell>
						<TableCell align='center'>
							{
								subject.grade
									? <RedIf condition={subject.grade < 5}>
										{subject.grade.toFixed(1)}
									</RedIf>
									: '-'
							}
						</TableCell>
						<TableCell align='center'>
							{
								subject.attendance
									? <RedIf condition={subject.attendance < 70}>
										{subject.attendance}%
									</RedIf>
									: '-'
							}
						</TableCell>
						<TableCell align='right'>
							{
								subject.grade
									? <IconButton onClick={() => reviewOffering(subject.code)}>
										<SvgIcon fontSize='large' color='primary' component={WriteComment} viewBox="0 0 36 36" />
									</IconButton>
									: <IconButton onClick={() => reviewOffering(subject.code)}>
										<SvgIcon color='primary' component={SearchTeacher} viewBox="0 0 32 32" />
									</IconButton>
							}

						</TableCell>
					</TableRow>
				)}
			</TableBody>
		</Table>
	</div>
}

export default TranscriptTable
