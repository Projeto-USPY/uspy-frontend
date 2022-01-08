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
import Skeleton from '@material-ui/lab/Skeleton'

import { Record } from 'types/Record'
import { SubjectKey } from 'types/Subject'

import { ReactComponent as WriteComment } from 'images/write-comment.svg'
import { buildURI as buildSubjectPageURI } from 'pages/SubjectPage'

interface PropsType {
    semester: number
	records: Record[]
	reviewSubject: (subject: SubjectKey) => void
	loading?: boolean
}

const SkeletonProgress = () => {
	return <List>
		{(new Array(6).fill(0)).map((_, idx) =>
			<React.Fragment key={idx}>
				<ListItem>
					<ListItemText>
						<Skeleton variant='text' width={70} />
					</ListItemText>
					<ListItemSecondaryAction>
						<Skeleton variant='text' width={25} />
					</ListItemSecondaryAction>
				</ListItem>
				<Divider variant='fullWidth' component='li' />
			</React.Fragment>
		)}
	</List>
}

function RedIf ({ condition, children } : {condition: boolean, children: React.ReactNode}) {
	return <span style={{ color: condition ? 'red' : 'green' }}>
		{children}
	</span>
}

const TranscriptList: React.FC<PropsType> = ({ semester, records, reviewSubject, loading = false }) => {
	const [selectedRow, setSelectedRow] = useState<number | null>(null)

	const buildSubjectLink = (record: Record) => {
		return buildSubjectPageURI(record.course, record.specialization, record.code)
	}

	const recordList = <List>
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
							href={buildSubjectLink(record)}
						>
							{record.code}
						</Link>
					</ListItemText>
					<ListItemSecondaryAction>
						<RedIf condition={record.grade < 5}>
							{record.grade.toFixed(1)}
						</RedIf>
					</ListItemSecondaryAction>
				</ListItem>
				<Collapse in={selectedRow === row} timeout="auto" unmountOnExit>
					<div className='pad1'>
						<Typography>
							<Link color='textPrimary' href={buildSubjectLink(record)} target="_blank"> {record.name} </Link>
						</Typography>
					</div>
					<Grid container justify='center' spacing={1} className='pad1'>
						<Grid item>
							<Grid container direction='column' alignItems='center'>
								<span className='prompt'> MÉDIA </span>
								<span className='prompt'>
									<RedIf condition={record.grade < 5}>
										{record.grade.toFixed(1)}
									</RedIf>
								</span>
							</Grid>
						</Grid>
						<Grid item>
							<Grid container direction='column' alignItems='center'>
								<span className='prompt'> FREQUÊNCIA </span>
								<span className='prompt'>
									<RedIf condition={record.frequency < 70}>
										{record.frequency}%
									</RedIf>
								</span>
							</Grid>
						</Grid>
						<Grid item>
							<Grid container direction='column' alignItems='center'>
								<span className='prompt'> STATUS </span>
								<span className='prompt'>
									<RedIf condition={record.frequency < 70 || record.grade < 5}>
										{record.frequency < 70 || record.grade < 5 ? 'REPROVADO' : 'APROVADO'}
									</RedIf>
								</span>
							</Grid>
						</Grid>
					</Grid>
					<Button
						color='secondary'
						size='medium'
						fullWidth
						variant='outlined'
						onClick={() => reviewSubject({ course: record.course, specialization: record.specialization, code: record.code })}
						endIcon={<SvgIcon color='secondary' component={WriteComment} viewBox="0 0 36 36"/>}
					>
					AVALIAR
					</Button>
					<p/>
				</Collapse>
				<Divider variant='fullWidth' component='li' />
			</React.Fragment>
		)}
	</List>

	return <div>
		<Typography variant='body1'>
			{semester + 1}º semestre
		</Typography>
		<Divider variant='fullWidth' />
		{ loading
			? <SkeletonProgress />
			: recordList
		}
	</div>
}

export default TranscriptList
