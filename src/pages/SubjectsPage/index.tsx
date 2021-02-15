import React, { useState, useMemo, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import Container from '@material-ui/core/Container'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Grid from '@material-ui/core/Grid'
import ListItemText from '@material-ui/core/ListItemText'
import Paper from '@material-ui/core/Paper'
import MuiAccordion from '@material-ui/core/Accordion'
import MuiAccordionDetails from '@material-ui/core/AccordionDetails'
import MuiAccordionSummary from '@material-ui/core/AccordionSummary'
import CircularProgress from '@material-ui/core/CircularProgress'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import withSubjectsData, { SubjectsDataContext } from 'HOCs/withSubjectsData'
import { SubjectInfo } from 'types/Subject'
import { CourseInfo } from 'types/Course'

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

function renderRow (c: string, s: SubjectInfo, clickCallback: Function) {
	return <MyListItem button key={s.code} onClick={() => clickCallback(c, s.code)}>
		<ListItemText primary={s.code + ' - ' + s.name} disableTypography/>
	</MyListItem>
}

interface SubjectListProps {
	arr: CourseInfo
}
const SubjectList: React.FC<SubjectListProps> = ({ arr }) => {
	const [open, setOpen] = useState<boolean>(false)

	const history = useHistory()
	const clickItem = (courseCode: string, code: string) => {
		history.push(`${history.location.pathname}/${courseCode}/${code}`)
	}
	const list = useMemo(() => {
		const code = arr.code
		return arr.subjects.map(s => renderRow(code, s, clickItem))
	}, [])

	return <Accordion square expanded={open} onChange={() => { setOpen(!open) }} TransitionProps={{ timeout: 20 }}>
		<AccordionSummary expandIcon={<ExpandMoreIcon />}><Typography><strong>{arr.name}</strong></Typography></AccordionSummary>
		<AccordionDetails>
			<List style={{ width: '100%', fontFamily: 'Raleway, sans-serif' }} disablePadding>
				{list}
			</List>
		</AccordionDetails>
	</Accordion>
}

const Accordions = () => {
	const coursesData = useContext(SubjectsDataContext)

	if (!coursesData.length) return <Grid container justify='center' alignItems='center'><Grid item><CircularProgress /></Grid></Grid>
	else return coursesData.map((c: CourseInfo) => <SubjectList key={c.name} arr={c}/>)
}

const SubjectsPage = () => {
	return <div className="main">
		<main>
			<Navbar key='navbar'/>
			<div style={{ height: '150px' }}></div>

			<Container>
				<Typography> As disciplinas estão organizadas por curso: </Typography>
				<br></br>
				<Paper variant='outlined'>
					{withSubjectsData(<Accordions/>)}
				</Paper>
			</Container>
		</main>
		<Footer text='Made with love by Preischadt and Turci'/>
	</div>
}

export default SubjectsPage
