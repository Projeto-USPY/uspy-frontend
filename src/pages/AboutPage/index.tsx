import React, { ReactElement } from 'react'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'

import Navbar from 'components/Navbar'
import Image1 from 'images/aboutpage1.svg'
import Image2 from 'images/aboutpage2.svg'
import Image3 from 'images/aboutpage3.svg'
import Image4 from 'images/aboutpage4.svg'

import './style.css'

interface RowContent {
	title: string
	text: ReactElement
	image: string
}

const content: RowContent[] = [
	{
		title: 'O que é?',
		text: (
			<>
				<p>
					O <b>USPY</b> é uma plataforma colaborativa onde alunos de
					graduação podem se informar sobre disciplinas, professores,
					oferecimentos e seu progresso acadêmico como um todo. O seu
					propósito principal é fornecer ferramentas que tornem tudo
					isso mais fácil.
				</p>
			</>
		),
		image: Image1,
	},
	{
		title: 'Por que?',
		text: (
			<>
				<p>
					Identificamos que as informações acadêmicas são distribuídas
					de maneira pouco intuitiva e muito desorganizada. O{' '}
					<b>USPY</b> vem para mudar tudo isso!
				</p>

				<p>
					Queremos simplificar a busca por esses dados e criar
					indicadores a partir das experiências dos nossos usuários
					como estudantes.{' '}
				</p>
			</>
		),
		image: Image2,
	},
	{
		title: 'Posso me tornar um usuário?',
		text: (
			<>
				<p>
					No momento qualquer aluno de graduação da USP consegue se
					cadastrar, mas algumas funcionalidades da plataforma só
					serão úteis para alunos do ICMC, pois ainda não possuímos
					suporte para os dados de outros institutos.
				</p>

				<p>
					Nosso objetivo primordial é construir um ambiente amigável e
					útil para todos, portanto muitas mudanças estão por vir e
					qualquer sugestão é muito bem vinda.
				</p>
			</>
		),
		image: Image3,
	},
	{
		title: 'Quais dados são coletados?',
		text: (
			<>
				<p>
					O <b>USPY</b> é uma ferramenta colaborativa e portanto
					muitas das suas funcionalidades só estão disponíveis para
					aqueles que se cadastrarem.
				</p>

				<p>
					Quando é feito o cadastro, o sistema coleta o número USP e
					as notas do estudante através de seu resumo escolar. Isso é
					necessário para que possamos criar o perfil do estudante e
					calcular os indicadores de cada disciplina. Nenhum outro
					dado é coletado e tudo é armazenado de maneira segura e com
					muito carinho.
				</p>

				<p>
					Além disso, buscaremos sempre o máximo de transparência: o
					projeto é totalmente open source e se encontra no{' '}
					<Link
						color="secondary"
						target="_blank"
						href="https://github.com/projeto-uspy">
						GitHub
					</Link>
					. Qualquer dúvida ou colaboração será recebida com muito
					prazer.
				</p>
			</>
		),
		image: Image4,
	},
]

interface RowProps extends RowContent {
	imageLeft: boolean
}

const Row: React.FC<RowProps> = ({ title, text, image, imageLeft }) => {
	return (
		<Paper className="about-block" elevation={0}>
			<Grid
				container
				direction={imageLeft ? 'row' : 'row-reverse'}
				alignItems="center"
				spacing={5}>
				<Grid item xs={12} sm={'auto'}>
					<center>
						<img src={image} />
					</center>
				</Grid>
				<Grid item xs>
					<h3>{title}</h3>
					{text}
				</Grid>
			</Grid>
		</Paper>
	)
}

export function getMeta(): any {
	return {
		title: 'Sobre o USPY',
		description:
			'Leia sobre por que o USPY foi criado e como se tornar um usuário.',
		robots: ['index', 'follow'],
	}
}

export function buildURI(): string {
	return '/sobre'
}

const AboutPage = () => {
	return (
		<main>
			<Navbar />
			<div style={{ height: '100px' }}></div>
			<Container>
				<h2> Sobre o USPY </h2>

				<Grid container direction="column" spacing={3}>
					{content.map((item: RowContent, idx: number) => (
						<Grid item key={idx}>
							<Row
								title={item.title}
								text={item.text}
								image={item.image}
								imageLeft={idx % 2 === 0}
							/>
						</Grid>
					))}
				</Grid>
			</Container>
		</main>
	)
}

export default AboutPage
