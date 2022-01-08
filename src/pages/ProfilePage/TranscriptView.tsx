import React, { useEffect, useMemo, useState } from 'react'

import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'
import { useTheme } from '@material-ui/core/styles'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'

import { Record } from 'types/Record'
import { SubjectKey } from 'types/Subject'

import api from 'API'
import MessagePanel from 'components/MessagePanel'
import OfferingReviewModal from 'components/Offerings/OfferingReviewModal'
import TranscriptList from 'pages/ProfilePage/TranscriptList'
import TranscriptTable from 'pages/ProfilePage/TranscriptTable'
import { unique } from 'utils'

interface TranscriptViewPropsType {
    semesters: number[] // a semester is semesters[i]/2.semesters[i]%2
}

const disclosure = `* O histórico pode não mostrar disciplinas cursadas por você 
que foram alteradas ou deixaram de existir, portanto pode estar incompleto`

const TranscriptView: React.FC<TranscriptViewPropsType> = ({ semesters }) => {
	const [selectedTab, setSelectedTab] = useState<number>(0)
	const [pending, setPending] = useState<boolean>(true)
	const [selectedSemester, setSelectedSemester] = useState<number>(0)
	const [records, setRecords] = useState<Record[] | null>(null)
	const [errorMessage, setErrorMessage] = useState<string>('')
	const [subjectInReview, setSubjectInReview] = useState<SubjectKey | null>(null)

	const years = useMemo(() => unique(semesters.map(sem => Math.floor(sem / 2))), [semesters])
	const selectedYear = years[selectedTab]

	useEffect(() => {
		setPending(true)
		api.getRecords(selectedYear, selectedSemester + 1).then(records => {
			setRecords(records)
			setPending(false)
		}).catch(err => {
			if (err.code === 'not_found') {
				setErrorMessage('Não foram encontradas disciplinas para este curso')
			} else {
				setErrorMessage(`Algo deu errado (${err.message}). Tente novamente mais tarde`)
			}
			setPending(false)
		})
	}, [selectedYear, selectedSemester])

	const reviewSubject = (subject: SubjectKey) => {
		setSubjectInReview(subject)
	}

	const theme = useTheme()
	const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))
	const changeTab = (_: React.ChangeEvent, tab: number) => {
		setSelectedTab(tab)
		const sem = semesters.find(val => Math.floor(val / 2) === years[tab])
		setSelectedSemester(sem % 2 || 0)
	}

	const next = () => {
		const idx = semesters.indexOf(2 * selectedYear + selectedSemester)
		if (idx + 1 < semesters.length) {
			const newSemester = semesters[idx + 1]
			const yearIdx = years.indexOf(Math.floor(newSemester / 2))
			setSelectedTab(yearIdx)
			setSelectedSemester(newSemester % 2)
		}
	}

	const previous = () => {
		const idx = semesters.indexOf(2 * selectedYear + selectedSemester)
		if (idx - 1 >= 0) {
			const newSemester = semesters[idx - 1]
			const yearIdx = years.indexOf(Math.floor(newSemester / 2))
			setSelectedTab(yearIdx)
			setSelectedSemester(newSemester % 2)
		}
	}

	const semesterSelector =
		<ButtonGroup size={isDesktop ? 'large' : 'medium'} color="secondary" variant='outlined' fullWidth={!isDesktop} >
			{[0, 1].map(idx =>
				<Button
					key={idx}
					disabled={pending || semesters.indexOf(2 * selectedYear + idx) === -1}
					onClick={() => setSelectedSemester(idx)}
					style={selectedSemester === idx ? {
						color: 'white',
						backgroundColor: '#415C7788'
					} : {}}
				>
					{idx + 1}º Semestre
				</Button>)}
		</ButtonGroup>

	const navigator = isDesktop
		? <Grid container justify='space-between'>
			<Grid item>
				{semesterSelector}
			</Grid>
			<Grid item>
				<div>
					{[KeyboardArrowLeftIcon, KeyboardArrowRightIcon].map((Icon, idx) =>
						<IconButton
							color='secondary'
							key={idx}
							onClick={idx === 0 ? previous : next}
							disabled={2 * selectedYear + selectedSemester === (idx === 0 ? semesters[0] : semesters[semesters.length - 1])}
						>
							<Icon fontSize={isDesktop ? 'default' : 'large'}/>
						</IconButton>
					)}
				</div>
			</Grid>
		</Grid>
		: semesterSelector

	return <div className='full-width'>
		<Paper className='transcript-tabs' style={{ backgroundColor: theme.palette.primary.main, borderRadius: '10px' }}>
			<Tabs
				value={selectedTab}
				onChange={changeTab}
				indicatorColor="primary"
				variant='scrollable'
				scrollButtons='on'
				style={{ color: 'white' }}
			>
				{years.map((year, idx) => <Tab key={idx} label={<b>{year}</b>} />)}
			</Tabs>
		</Paper>
		<Paper
			variant={isDesktop ? 'outlined' : 'elevation'}
			elevation={isDesktop ? 1 : 0}
			className='transcript-body'
		>
			<div className='pad'>
				{navigator}
			</div>
			<Grid container direction='row-reverse' className='disclosure' style={{ textAlign: 'center' }}>
				{disclosure}
			</Grid>
			<br/>
			{
				!errorMessage
					? isDesktop
						? <TranscriptTable reviewSubject={reviewSubject} semester={selectedSemester} records={records || []} loading={pending}/>
						: <TranscriptList reviewSubject={reviewSubject} semester={selectedSemester} records={records || []} loading={pending} />
					: <MessagePanel message={errorMessage} height={300}/>
			}
			{isDesktop
				? null
				: <Grid container justify='space-around' className='transcript-arrow-navigator'>
					<Grid item>
						<Button
							color='secondary'
							startIcon={<KeyboardArrowLeftIcon/>}
							onClick={previous}
							disabled={2 * selectedYear + selectedSemester === semesters[0]}
						>
							Anterior
						</Button>
					</Grid>
					<Grid item>
						<Button
							color='secondary'
							endIcon={<KeyboardArrowRightIcon/>}
							onClick={next}
							disabled={2 * selectedYear + selectedSemester === semesters[semesters.length - 1]}
						>
							Próximo
						</Button>
					</Grid>
				</Grid>
			}
		</Paper>
		{ !subjectInReview
			? null
			: <OfferingReviewModal
				close={() => setSubjectInReview(null)}
				subject={subjectInReview}
			/>
		}

	</div>
}

export default TranscriptView
