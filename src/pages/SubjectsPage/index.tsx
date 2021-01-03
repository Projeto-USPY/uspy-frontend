import React, { useState, useMemo } from 'react'
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
	Code: number
	Subjects: SubjectInfo[]
}

const MyListItem = withStyles(theme => ({
	root: {
		borderBottom: '1px solid #adadad'
	}
}))(ListItem)

function renderRow (c: string, s: SubjectInfo, clickCallback: Function) {
	return <MyListItem button key={s.Code} onClick={() => clickCallback(c, s.Code)}>
		<ListItemText primary={s.Code + ' - ' + s.Name} disableTypography/>
	</MyListItem>
}

interface SubjectListProps {
	idx: number
}
const SubjectList: React.FC<SubjectListProps> = ({ idx }) => {
	const [open, setOpen] = useState<boolean>(false)

	const history = useHistory()
	const clickItem = (courseCode: string, code: string) => {
		history.push(`${history.location.pathname}/${courseCode}/${code}`)
	}

	const list = useMemo(() => {
		const code = CoursesData[idx].Code
		return CoursesData[idx].Subjects.map(s => renderRow(code, s, clickItem))
	}, [])

	return <Accordion square expanded={open} onChange={() => { setOpen(!open) }} TransitionProps={{ timeout: 20 }}>
		<AccordionSummary expandIcon={<ExpandMoreIcon />}><Typography><strong>{CoursesData[idx].Name}</strong></Typography></AccordionSummary>
		<AccordionDetails>
			<List style={{ width: '100%', fontFamily: 'Raleway, sans-serif' }} disablePadding>
				{list}
			</List>
		</AccordionDetails>
	</Accordion>
}

const SubjectsPage = () => {
	const accordions = CoursesData.map((c: CourseInfo, idx: number) => <SubjectList key={c.Name} idx={idx}/>)
	return <div className="main">
		<main>
			<Navbar key='navbar'/>
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
