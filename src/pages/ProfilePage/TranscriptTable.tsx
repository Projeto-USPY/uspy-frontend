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

const TranscriptTable: React.FC<PropsType> = ({ semester, course, specialization, records }) => {
	const reviewOffering = (subjectCode: string) => {
		console.log('Reviewing', subjectCode)
	}

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
				{records.map((record, row) =>
					<TableRow key={row}>
						<TableCell>
							<Link
								color='secondary'
								href={buildSubjectLink(record.code)}
							>
								{record.code}
							</Link>
						</TableCell>
						<TableCell>
							<Link
								color='secondary'
								href={buildSubjectLink(record.code)}
							>
								{record.name}
							</Link>
						</TableCell>
						<TableCell align='center'>
							{
								record.completed
									? <RedIf condition={record.grade < 5}>
										{record.grade.toFixed(1)}
									</RedIf>
									: '-'
							}
						</TableCell>
						<TableCell align='center'>
							{
								record.completed
									? <RedIf condition={record.frequency < 70}>
										{record.frequency}%
									</RedIf>
									: '-'
							}
						</TableCell>
						<TableCell align='right'>
							{
								record.completed
									? <IconButton onClick={() => reviewOffering(record.code)}>
										<SvgIcon fontSize='large' color='primary' component={WriteComment} viewBox="0 0 36 36" />
									</IconButton>
									: <IconButton onClick={() => reviewOffering(record.code)}>
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
