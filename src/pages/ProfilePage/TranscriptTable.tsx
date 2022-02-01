import React from 'react'

import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Link from '@material-ui/core/Link'
import SvgIcon from '@material-ui/core/SvgIcon'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'
import DoneIcon from '@material-ui/icons/Done'
import Skeleton from '@material-ui/lab/Skeleton'

import { Record } from 'types/Record'
import { SubjectKey } from 'types/Subject'

import { VoteButtonGroup } from 'components/profile/VoteButton'
import { ReactComponent as WriteComment } from 'images/write-comment.svg'
import { buildURI as buildSubjectPageURI } from 'pages/SubjectPage'

interface PropsType {
	semester: number
	records: Record[]
	reviewSubject: (subject: SubjectKey) => void
	loading?: boolean
}

const SkeletonProgress = () => {
	return <Table size='small' >
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
			{new Array(6).fill(0).map((_, idx) =>
				<TableRow key={idx}>
					<TableCell>
						<Skeleton variant='text' width={70}/>
					</TableCell>
					<TableCell>
						<Skeleton variant='text' width={300}/>
					</TableCell>
					<TableCell align='center'>
						<Grid container justify='center'>
							<Skeleton variant='text' width={50}/>
						</Grid>
					</TableCell>
					<TableCell align='center'>
						<Grid container justify='center'>
							<Skeleton variant='text' width={50}/>
						</Grid>
					</TableCell>
					<TableCell align='right'>
						<Grid container direction='row-reverse'>
							<Skeleton variant='circle' width={30} height={30} />
						</Grid>
					</TableCell>
				</TableRow>
			)}
		</TableBody>
	</Table>
}

function RedIf ({ condition, children } : {condition: boolean, children: React.ReactNode}) {
	return <span style={{ color: condition ? 'red' : 'green' }}>
		{children}
	</span>
}

const TranscriptTable: React.FC<PropsType> = ({ semester, records, reviewSubject, loading = false }) => {
	const buildSubjectLink = (record: Record) => {
		return buildSubjectPageURI(record.course, record.specialization, record.code)
	}

	const tableContent = <Table size='small' >
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
				<TableCell align='center'>
					Votar
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
							href={buildSubjectLink(record)}
						>
							{record.code}
						</Link>
					</TableCell>
					<TableCell>
						<Link
							color='secondary'
							href={buildSubjectLink(record)}
						>
							{record.name}
						</Link>
					</TableCell>
					<TableCell align='center'>
						<RedIf condition={record.grade < 5}>
							{record.grade.toFixed(1)}
						</RedIf>
					</TableCell>
					<TableCell align='center'>
						<RedIf condition={record.frequency < 70}>
							{record.frequency}%
						</RedIf>
					</TableCell>
					<TableCell align='center' style={{ whiteSpace: 'nowrap' }}>
						<VoteButtonGroup record={record}/>
					</TableCell>
					<TableCell align='right' style={{ whiteSpace: 'nowrap' }}>
						<IconButton onClick={() => reviewSubject({ course: record.course, specialization: record.specialization, code: record.code, name: record.name })}>
							<SvgIcon fontSize='large' color='primary' component={WriteComment} viewBox="0 0 36 36" />
						</IconButton>
						{ record.reviewed ? <DoneIcon fontSize='small' color='primary' style={{ position: 'relative', top: 5 }} /> : <DoneIcon fontSize='small' color='primary' style={{ visibility: 'hidden' }} /> }
					</TableCell>
				</TableRow>
			)}
		</TableBody>
	</Table>

	return <div>
		<Typography variant='body1'>
			{semester + 1}º semestre
		</Typography>
		<Divider variant='fullWidth' />
		<br/>
		{ !loading
			? tableContent
			: <SkeletonProgress />
		}
	</div>
}

export default TranscriptTable
