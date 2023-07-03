import React, { useState, useEffect } from 'react'

import MuiAccordion from '@material-ui/core/Accordion'
import MuiAccordionDetails from '@material-ui/core/AccordionDetails'
import MuiAccordionSummary from '@material-ui/core/AccordionSummary'
import Container from '@material-ui/core/Container'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import TeachersData from '__mocks__/AllProfessors'
import Navbar from 'components/Navbar'

interface TeacherInfo {
	Name: string
	Department: string
}

const Accordion = withStyles({
	root: {
		border: '1px solid rgba(0, 0, 0, .125)',
		boxShadow: 'none',
		'&:not(:last-child)': {
			borderBottom: 0,
		},
		'&:before': {
			display: 'none',
		},
		'&$expanded': {
			margin: 'auto',
		},
	},
	expanded: {},
})(MuiAccordion)

const AccordionSummary = withStyles({
	root: {
		backgroundColor: 'rgba(0, 0, 0, .03)',
		borderBottom: '1px solid rgba(0, 0, 0, .125)',
		marginBottom: -1,
		minHeight: 56,
		'&$expanded': {
			minHeight: 56,
		},
	},
	content: {
		'&$expanded': {
			margin: '12px 0',
		},
	},
	expanded: {},
})(MuiAccordionSummary)

const AccordionDetails = withStyles((theme) => ({
	root: {
		padding: 0,
	},
}))(MuiAccordionDetails)

const MyListItem = withStyles((theme) => ({
	root: {
		borderBottom: '1px solid #adadad',
	},
}))(ListItem)

function renderRow(t: TeacherInfo, clickCallback: Function) {
	return (
		<MyListItem
			button
			key={t.Name}
			onClick={() => clickCallback(t.Department)}
		>
			<ListItemText primary={t.Name} disableTypography />
		</MyListItem>
	)
}

export function buildURI(): string {
	// TODO fix this to include teacher code
	return '/professores'
}

const TeachersPage = () => {
	const clickItem = (id: number) => {
		console.log('Clicou no id = ', id)
	}

	const [teachers, setTeachers] = useState<any>({})

	useEffect(() => {
		const arr: any = {}
		TeachersData.forEach((val: TeacherInfo) => {
			if (!arr[val.Department]) arr[val.Department] = []
			arr[val.Department].push(val)
		})
		setTeachers(arr)
	}, [])

	const [expandedAccordions, setExpandedAccordions] = useState<any>({})

	const handleAccordionClick = (key: string, state: boolean) => {
		setExpandedAccordions({
			...expandedAccordions,
			[key]: state,
		})
	}
	const accordions = Object.keys(teachers).map((key: string) => {
		const isExpanded = !!expandedAccordions[key]
		return (
			<Accordion
				key={key}
				square
				expanded={isExpanded}
				onChange={() => handleAccordionClick(key, !isExpanded)}
				TransitionProps={{ timeout: 200 }}
			>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography>
						<strong>{key}</strong>
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<List
						style={{
							width: '100%',
							fontFamily: 'Raleway, sans-serif',
						}}
						disablePadding
					>
						{teachers[key].map((t: TeacherInfo) =>
							renderRow(t, clickItem),
						)}
					</List>
				</AccordionDetails>
			</Accordion>
		)
	})
	return (
		<div className="main">
			<main>
				<Navbar />
				<div style={{ height: '150px' }}></div>

				<Container>
					<Typography>
						{' '}
						Dentro de cada departamento, a lista é organizada
						alfabeticamente{' '}
					</Typography>
					<br></br>
					<Paper variant="outlined">{accordions}</Paper>
				</Container>
			</main>
		</div>
	)
}

export default TeachersPage
