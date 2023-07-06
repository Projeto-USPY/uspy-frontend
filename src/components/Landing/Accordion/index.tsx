import React from 'react'

import MuiAccordion from '@material-ui/core/Accordion'
import MuiAccordionDetails from '@material-ui/core/AccordionDetails'
import MuiAccordionSummary from '@material-ui/core/AccordionSummary'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

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

const AccordionDetails = withStyles(theme => ({
	root: {
		padding: theme.spacing(2),
	},
}))(MuiAccordionDetails)

interface AccordionCardPropsType {
	id: string
	header: string
	description: string
	expanded: boolean

	handleChange: (
		panel: string,
	) => (event: React.ChangeEvent<unknown>, expanded: boolean) => void
}

const AccordionCard: React.FC<AccordionCardPropsType> = ({
	id,
	header,
	description,
	expanded,
	handleChange,
}) => {
	return (
		<Accordion square expanded={expanded} onChange={handleChange(id)}>
			<AccordionSummary
				aria-controls={`${id}-content`}
				id={`${id}-header`}>
				<Typography align="justify">{header}</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Typography align="justify">{description}</Typography>
			</AccordionDetails>
		</Accordion>
	)
}

const FAQ: React.FC = () => {
	const [expanded, setExpanded] = React.useState<string | false>('panel1')

	const handleChange =
		(panel: string) => (_: unknown, newExpanded: boolean) => {
			setExpanded(newExpanded ? panel : false)
		}

	return (
		<div>
			<AccordionCard
				id="panel1"
				header="O que é o USPY? Como ele é diferente do JupiterWeb?"
				description="O USPY é uma plataforma colaborativa, isto é, os dados coletados no cadastro e a interação dos usuários possibilitam
                determinar indicadores e estatísticas que podem ajudar outros alunos. Esse caráter colaborativo é o maior diferencial em relação ao JupiterWeb, onde
                as informações estão esparsas e a experiência do aluno é confusa."
				expanded={expanded === 'panel1'}
				handleChange={handleChange}
			/>
			<AccordionCard
				id="panel2"
				header="O USPY é uma ferramenta oficial?"
				description=" É importante ressaltar que o USPY não é uma ferramenta oficial e não possui vínculo
                com a USP. Nós desenvolvedores somos alunos como você! Portanto o USPY sempre será gratuito e o seu foco sempre será os alunos."
				expanded={expanded === 'panel2'}
				handleChange={handleChange}
			/>
			<AccordionCard
				id="panel3"
				header="O USPY é seguro? Posso confiar nele?"
				description="Com certeza. Seus dados são criptografados e armazenados com carinho.
                O uso de dados e política de cookies são descritos com mais detalhes nos nossos termos de uso.

                Além diso, o projeto é open source e agradecemos quaisquer contribuições."
				expanded={expanded === 'panel3'}
				handleChange={handleChange}
			/>
			<AccordionCard
				id="panel4"
				header="Fiz/faço mais de um curso, qual histórico utilizar no cadastro?"
				description="A ordem não faz diferença. Cadastre aquele que está cursando atualmente e caso queira adicionar seus outros históricos,
                pode fazer isso na sua página de perfil a qualquer momento."
				expanded={expanded === 'panel4'}
				handleChange={handleChange}
			/>
			<AccordionCard
				id="panel5"
				header="Porque o meu curso não aparece no USPY?"
				description="O USPY está em uma fase inicial, onde estamos avaliando as funcionalidades mais desejadas e realizando melhorias.
                Atualmente, a plataforma já possui suporte a outros institutos, porém esses serão adicionados em um futuro breve."
				expanded={expanded === 'panel5'}
				handleChange={handleChange}
			/>
		</div>
	)
}

export default FAQ
