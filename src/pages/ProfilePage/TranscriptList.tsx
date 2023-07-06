import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

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
import DoneIcon from '@material-ui/icons/Done'
import Skeleton from '@material-ui/lab/Skeleton'

import { Record } from 'types/Record'
import { SubjectKey } from 'types/Subject'

import CompressedTextWithTooltip from 'components/CompressedTextWithTooltip'
import { VoteButtonGroup } from 'components/profile/VoteButton'
import ReviewsIcon from 'images/reviews.svg?react'
import WriteCommentIcon from 'images/write-comment.svg?react'
import { buildURI as buildOfferingsPageURI } from 'pages/OfferingsPage'
import { buildURI as buildSubjectPageURI } from 'pages/SubjectPage'

interface PropsType {
	semester: number
	records: Record[]
	reviewSubject: (subject: SubjectKey) => void
	loading?: boolean
}

const SkeletonProgress = () => {
	return (
		<List>
			{new Array(6).fill(0).map((_, idx) => (
				<React.Fragment key={idx}>
					<ListItem>
						<ListItemText
							primary={<Skeleton variant="text" width={70} />}
							secondary={<Skeleton variant="text" width={200} />}
						/>
						<ListItemSecondaryAction>
							<Skeleton variant="text" width={25} />
						</ListItemSecondaryAction>
					</ListItem>
					<Divider variant="fullWidth" component="li" />
				</React.Fragment>
			))}
		</List>
	)
}

function RedIf({
	condition,
	children,
}: {
	condition: boolean
	children: React.ReactNode
}) {
	return (
		<span style={{ color: condition ? 'red' : 'green' }}>{children}</span>
	)
}

const TranscriptList: React.FC<PropsType> = ({
	semester,
	records,
	reviewSubject,
	loading = false,
}) => {
	const [selectedRow, setSelectedRow] = useState<number | null>(null)

	const history = useHistory()

	// reset on semester change
	useEffect(() => {
		setSelectedRow(null)
	}, [records])

	const buildSubjectLink = (record: Record) => {
		return buildSubjectPageURI(
			record.course,
			record.specialization,
			record.code,
		)
	}

	const recordList = (
		<List>
			{records.map((record, row) => (
				<React.Fragment key={row}>
					<ListItem
						button
						selected={selectedRow === row}
						onClick={() =>
							setSelectedRow(selectedRow === row ? null : row)
						}>
						<ListItemText
							primary={
								<Link
									color="secondary"
									href={buildSubjectLink(record)}>
									{record.code}
								</Link>
							}
							secondary={
								<CompressedTextWithTooltip
									text={record.name}
									maxCharacters={32}
								/>
							}
						/>
						<ListItemSecondaryAction>
							<RedIf condition={record.grade < 5}>
								{record.grade.toFixed(1)}
							</RedIf>
						</ListItemSecondaryAction>
					</ListItem>
					<Collapse
						in={selectedRow === row}
						timeout="auto"
						unmountOnExit>
						<div className="pad1">
							<Typography>
								<Link
									color="textPrimary"
									href={buildSubjectLink(record)}
									target="_blank">
									{' '}
									{record.name}{' '}
								</Link>
							</Typography>
						</div>
						<Grid
							container
							justify="center"
							spacing={1}
							className="pad1">
							<Grid item>
								<Grid
									container
									direction="column"
									alignItems="center">
									<span className="prompt"> MÉDIA </span>
									<span className="prompt">
										<RedIf condition={record.grade < 5}>
											{record.grade.toFixed(1)}
										</RedIf>
									</span>
								</Grid>
							</Grid>
							<Grid item>
								<Grid
									container
									direction="column"
									alignItems="center">
									<span className="prompt"> FREQUÊNCIA </span>
									<span className="prompt">
										<RedIf
											condition={record.frequency < 70}>
											{record.frequency}%
										</RedIf>
									</span>
								</Grid>
							</Grid>
							<Grid item>
								<Grid
									container
									direction="column"
									alignItems="center">
									<span className="prompt"> STATUS </span>
									<span className="prompt">
										<RedIf
											condition={
												record.frequency < 70 ||
												record.grade < 5
											}>
											{record.frequency < 70 ||
											record.grade < 5
												? 'REPROVADO'
												: 'APROVADO'}
										</RedIf>
									</span>
								</Grid>
							</Grid>
						</Grid>
						<Grid
							container
							spacing={2}
							justify="center"
							alignItems="center">
							<Grid item>
								<Typography align="center">
									Gostou da disciplina?
								</Typography>
							</Grid>
							<Grid item style={{ height: 64 }}>
								<Grid
									className="full-height"
									container
									justify="center"
									alignItems="center">
									<VoteButtonGroup
										record={record}
										color="secondary"
										size="default"
									/>
								</Grid>
							</Grid>
						</Grid>
						<Grid container spacing={2}>
							<Grid item xs={6}>
								<Button
									color="secondary"
									size="medium"
									fullWidth
									variant="outlined"
									onClick={() =>
										history.push(
											buildOfferingsPageURI(
												record.course,
												record.specialization,
												record.code,
											),
										)
									}
									startIcon={
										<SvgIcon
											color="secondary"
											component={ReviewsIcon}
											viewBox="0 0 24 24"
										/>
									}>
									AVALIAÇÕES
								</Button>
							</Grid>
							<Grid item xs={6}>
								<Button
									color="secondary"
									size="medium"
									fullWidth
									variant="outlined"
									onClick={() =>
										reviewSubject({
											course: record.course,
											specialization:
												record.specialization,
											code: record.code,
											name: record.name,
										})
									}
									startIcon={
										<SvgIcon
											color="secondary"
											component={WriteCommentIcon}
											viewBox="5 5 32 32"
										/>
									}
									endIcon={
										record.reviewed ? (
											<DoneIcon
												color="secondary"
												fontSize="small"
												style={{
													position: 'relative',
													bottom: 2,
												}}
											/>
										) : null
									}>
									AVALIAR
								</Button>
							</Grid>
						</Grid>
						<p />
					</Collapse>
					<Divider variant="fullWidth" component="li" />
				</React.Fragment>
			))}
		</List>
	)

	return (
		<div>
			<Typography variant="body1">{semester + 1}º semestre</Typography>
			<Divider variant="fullWidth" />
			{loading ? <SkeletonProgress /> : recordList}
		</div>
	)
}

export default TranscriptList
