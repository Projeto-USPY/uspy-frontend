import React, { useState, useMemo, useContext } from 'react'
import { useHistory } from 'react-router-dom'

import MuiAccordion from '@material-ui/core/Accordion'
import MuiAccordionDetails from '@material-ui/core/AccordionDetails'
import MuiAccordionSummary from '@material-ui/core/AccordionSummary'
import Box from '@material-ui/core/Box'
import CircularProgress from '@material-ui/core/CircularProgress'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { useTheme } from '@material-ui/styles'

import { CourseWithSubjects } from 'types/Course'
import { SubjectInfo } from 'types/Subject'

import Navbar from 'components/Navbar'
import withSubjectsData, { SubjectsDataContext } from 'HOCs/withSubjectsData'
import { buildURI as buildSubjectPageURI } from 'pages/SubjectPage'

const Accordion = withStyles({
	root: {
		border: '1px solid rgba(0, 0, 0, .125)',
		boxShadow: 'none',
		'&:not(:last-child)': {
			borderBottom: 0
		},
		'&:before': {
			display: 'none'
		},
		'&$expanded': {
			margin: 'auto'
		}
	},
	expanded: {}
})(MuiAccordion)

const AccordionSummary = withStyles({
	root: {
		backgroundColor: 'rgba(0, 0, 0, .03)',
		borderBottom: '1px solid rgba(0, 0, 0, .125)',
		marginBottom: -1,
		minHeight: 56,
		'&$expanded': {
			minHeight: 56
		}
	},
	content: {
		'&$expanded': {
			margin: '12px 0'
		}
	},
	expanded: {}
})(MuiAccordionSummary)

const AccordionDetails = withStyles((theme) => ({
	root: {
		padding: 0
	}
}))(MuiAccordionDetails)

const MyListItem = withStyles(theme => ({
	root: {
		borderBottom: '1px solid #adadad'
	}
}))(ListItem)

function renderRow (course: string, specialization: string, subject: SubjectInfo, clickCallback: Function) {
	return <MyListItem button key={subject.code} onClick={() => clickCallback(course, specialization, subject.code)}>
		<ListItemText primary={subject.code + ' - ' + subject.name} disableTypography/>
	</MyListItem>
}

interface SubjectListProps {
	arr: CourseWithSubjects
	sortByCode: boolean
}

export function buildURI (): string {
	return '/disciplinas'
}

const SubjectList: React.FC<SubjectListProps> = ({ arr, sortByCode }) => {
	const [open, setOpen] = useState<boolean>(false)

	const history = useHistory()
	const clickItem = (courseCode: string, courseSpecialization: string, code: string) => {
		history.push(buildSubjectPageURI(courseCode, courseSpecialization, code))
	}

	const getList = (course: CourseWithSubjects, sortByCode: boolean) => {
		const code = course.code
		const specialization = course.specialization
		course.subjects.sort((s1: SubjectInfo, s2: SubjectInfo) => {
			if (sortByCode) {
				return s1.code < s2.code ? -1 : s1.code === s2.code ? 0 : 1
			} else {
				return s1.name < s2.name ? -1 : s1.name === s2.name ? 0 : 1
			}
		})
		return course.subjects.map(s => renderRow(code, specialization, s, clickItem))
	}

	const listByCode = useMemo(() => getList(arr, true), [])
	const listByName = useMemo(() => getList(arr, false), [])

	return <Accordion square expanded={open} onChange={() => { setOpen(!open) }} TransitionProps={{ timeout: 20 }}>
		<AccordionSummary expandIcon={<ExpandMoreIcon />}><Typography><strong>{arr.name}</strong></Typography></AccordionSummary>
		<AccordionDetails>
			<List style={{ width: '100%', fontFamily: 'Raleway, sans-serif' }} disablePadding>
				<div hidden={sortByCode}> {listByName} </div> {/* for otimization, make two */}
				<div hidden={!sortByCode}> {listByCode} </div>
			</List>
		</AccordionDetails>
	</Accordion>
}

const Accordions = () => {
	const [sortByCode, setSortByCode] = useState<boolean>(true)
	const coursesData = useContext(SubjectsDataContext)

	const theme = useTheme()
	const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))

	if (!coursesData.length) return <Grid container justify='center' alignItems='center'><Grid item><CircularProgress /></Grid></Grid>
	else {
		return <Grid container spacing={3} direction='column'>
			<Grid container item direction='row' justify={isDesktop ? 'flex-end' : 'center'}>
				<Grid item>
					<input type='radio' name='order' id='code' onChange={() => setSortByCode(true)} checked={sortByCode}/>
					<label htmlFor='code'> Ordenar por código </label>
				</Grid>
				<Grid item>
					<input type='radio' name='order' id='name' onChange={() => setSortByCode(false)} checked={!sortByCode}/>
					<label htmlFor='name'> Ordenar por nome </label>
				</Grid>
			</Grid>
			<Grid item>
				{coursesData.map((c: CourseWithSubjects) => <SubjectList key={c.name} arr={c} sortByCode={sortByCode}/>)}
			</Grid>
		</Grid>
	}
}

const SubjectsPage = () => {
	return <div className="main">
		<main>
			<Navbar key='navbar'/>
			<div style={{ height: '150px' }}></div>

			<Container>
				<Typography> As disciplinas estão organizadas por curso: </Typography>
				<br></br>
				<Box>
					{withSubjectsData(<Accordions/>)}
				</Box>
			</Container>
		</main>
	</div>
}

export default SubjectsPage
