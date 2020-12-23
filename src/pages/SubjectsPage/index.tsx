import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import Container from '@material-ui/core/Container'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Paper from '@material-ui/core/Paper'
import MuiAccordion from '@material-ui/core/Accordion'
import MuiAccordionDetails from '@material-ui/core/AccordionDetails'
import MuiAccordionSummary from '@material-ui/core/AccordionSummary'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import CoursesData from '__mocks__/AllSubjects'

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

interface SubjectInfo {
	Name: string
	Code: string
}

interface CourseInfo {
	Name: string
	Subjects: SubjectInfo[]
}

const MyListItem = withStyles(theme => ({
	root: {
		borderBottom: '1px solid #adadad'
	}
}))(ListItem)

function renderRow (s: SubjectInfo, clickCallback: Function) {
	return <MyListItem button key={s.Code} onClick={() => clickCallback(s.Code)}>
		<ListItemText primary={s.Code + ' - ' + s.Name} disableTypography/>
	</MyListItem>
}

const SubjectsPage = () => {
	const [expandedAccordions, setExpandedAccordions] = useState(new Array(CoursesData.length).fill(false)) // array de inteiros
	const history = useHistory()
	const clickItem = (code: string) => {
		history.push(`${history.location.pathname}/${code}`)
	}
	const handleAccordionClick = (idx: number, state: boolean) => {
		setExpandedAccordions([
			...expandedAccordions.slice(0, idx),
			state,
			...expandedAccordions.slice(idx + 1)
		])
	}
	const accordions = CoursesData.map((c: CourseInfo, idx: number) => {
		const isExpanded = !!expandedAccordions[idx]
		return <Accordion key={c.Name} square expanded={isExpanded} onChange={() => { handleAccordionClick(idx, !isExpanded) }} TransitionProps={{ timeout: 200 }}>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}><Typography><strong>{c.Name}</strong></Typography></AccordionSummary>
			<AccordionDetails>
				<List style={{ width: '100%', fontFamily: 'Raleway, sans-serif' }} disablePadding>
					{c.Subjects.map(s => renderRow(s, clickItem))}
				</List>
			</AccordionDetails>
		</Accordion>
	})
	return <div className="main">
		<main>
			<Navbar/>
			<div style={{ height: '150px' }}></div>

			<Container>
				<Typography> As disciplinas estão organizadas por curso: </Typography>
				<br></br>
				<Paper variant='outlined'>
					{accordions}
				</Paper>
			</Container>
		</main>
		<Footer text='Made with love by Preischadt and Turci'/>
	</div>
}

export default SubjectsPage
