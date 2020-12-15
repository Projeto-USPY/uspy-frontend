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
	nome: string
	code: string
}

const subjectsBCC: SubjectInfo[] = [{
	nome: 'Introdução à Ciência de Computação I',
	code: 'SCC0221'
}, {
	nome: 'Introdução à Ciência de Computação II',
	code: 'SCC0201'
}, {
	nome: 'Algoritmos e Estruturas de Dados I',
	code: 'SCC0202'
}]

const subjectsBSI: SubjectInfo[] = [{
	nome: 'Introdução à Ciência de Computação I',
	code: 'SSC0501'
}, {
	nome: 'Introdução a Sistemas de Informação	',
	code: 'SSC0530'
}, {
	nome: 'Organização de Computadores Digitais',
	code: 'SSC0511'
}]

const subjectsMat: SubjectInfo[] = [{
	nome: 'Cálculo I',
	code: 'SMA0301'
}, {
	nome: 'Álgebra Linear',
	code: 'SMA0375'
}, {
	nome: 'Elementos de Matemática',
	code: 'SMA0341'
}]

const cursos = {
	BCC: subjectsBCC,
	BSI: subjectsBSI,
	Matemática: subjectsMat
}

const MyListItem = withStyles(theme => ({
	root: {
		borderBottom: '1px solid #adadad'
	}
}))(ListItem)

function renderRow (s: SubjectInfo, clickCallback: Function) {
	return <MyListItem button key={s.code} onClick={() => clickCallback(s.code)}>
		<ListItemText primary={s.code + ' - ' + s.nome} disableTypography/>
	</MyListItem>
}

const SubjectsPage = () => {
	const [expandedAccordions, setExpandedAccordions] = useState({})

	const clickItem = (code: string) => {
		console.log('Clicou no ', code)
	}
	const handleAccordionClick = (key: string, state: boolean) => {
		setExpandedAccordions({
			...expandedAccordions,
			[key]: state
		})
	}
	const accordions = Object.keys(cursos).map((key: string) => {
		const isExpanded = !!expandedAccordions[key]
		return <Accordion key={key} square expanded={isExpanded} onChange={() => { handleAccordionClick(key, !isExpanded) }}>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}><Typography><strong>{key}</strong></Typography></AccordionSummary>
			<AccordionDetails>
				<List style={{ width: '100%', fontFamily: 'Raleway, sans-serif' }} disablePadding>
					{cursos[key].map(t => renderRow(t, clickItem))}
				</List>
			</AccordionDetails>
		</Accordion>
	})
	return <div className="main">
		<main>
			<Navbar/>
			<div style={{ height: '150px' }}></div>

			<Container>
				<Typography> As disciplinas estão organizadas por curso </Typography>
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
