import React, { useState } from 'react'
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

interface TeacherInfo {
	nome: string
	dep: string
	id: number
}

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

const teachersSCC: TeacherInfo[] = [{
	id: 0,
	nome: 'Joao Batista',
	dep: 'SCC'
}, {
	id: 1,
	nome: 'Joao Batista',
	dep: 'SCC'
}, {
	id: 2,
	nome: 'Joao Batista',
	dep: 'SCC'
}, {
	id: 3,
	nome: 'Joao Batista',
	dep: 'SCC'
}]

const teachersSSC: TeacherInfo[] = [{
	id: 0,
	nome: 'Joao Batista',
	dep: 'SSC'
}, {
	id: 1,
	nome: 'Joao Batista',
	dep: 'SSC'
}, {
	id: 2,
	nome: 'Joao Batista',
	dep: 'SSC'
}, {
	id: 3,
	nome: 'Joao Batista',
	dep: 'SSC'
}]

const teachersSMA: TeacherInfo[] = [{
	id: 0,
	nome: 'Joao Batista',
	dep: 'SMA'
}, {
	id: 1,
	nome: 'Joao Batista',
	dep: 'SMA'
}, {
	id: 2,
	nome: 'Joao Batista',
	dep: 'SMA'
}, {
	id: 3,
	nome: 'Joao Batista',
	dep: 'SMA'
}]

const teachers = {
	SMA: teachersSMA,
	SCC: teachersSCC,
	SSC: teachersSSC
}

const MyListItem = withStyles(theme => ({
	root: {
		borderBottom: '1px solid #adadad'
	}
}))(ListItem)

function renderRow (t: TeacherInfo, clickCallback: Function) {
	return <MyListItem button key={t.id} onClick={() => clickCallback(t.id)}>
		<ListItemText primary={t.nome} disableTypography/>
	</MyListItem>
}

const TeachersPage = () => {
	const clickItem = (id: number) => {
		console.log('Clicou no id = ', id)
	}

	const [expandedAccordions, setExpandedAccordions] = useState({})

	const handleAccordionClick = (key: string, state: boolean) => {
		setExpandedAccordions({
			...expandedAccordions,
			[key]: state
		})
	}
	const accordions = Object.keys(teachers).map((key: string) => {
		const isExpanded = !!expandedAccordions[key]
		return <Accordion key={key} square expanded={isExpanded} onChange={() => { handleAccordionClick(key, !isExpanded) }}>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}><Typography><strong>{key}</strong></Typography></AccordionSummary>
			<AccordionDetails>
				<List style={{ width: '100%', fontFamily: 'Raleway, sans-serif' }} disablePadding>
					{teachers[key].map(t => renderRow(t, clickItem))}
				</List>
			</AccordionDetails>
		</Accordion>
	})
	return <div className="main">
		<main>
			<Navbar/>
			<div style={{ height: '150px' }}></div>

			<Container>
				<Typography> Dentro de cada departamento, a lista é organizada alfabeticamente </Typography>
				<br></br>
				<Paper variant='outlined'>
					{accordions}
				</Paper>
			</Container>
		</main>
		<Footer text='Made with love by Preischadt and Turci'/>
	</div>
}

export default TeachersPage
