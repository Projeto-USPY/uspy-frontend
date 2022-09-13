import React from 'react'

import Grid from '@material-ui/core/Grid'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import contribute from 'images/contribute.svg'
import explore from 'images/explore.svg'
import stats from 'images/stats.svg'
import subjectReview from 'images/subject_review.gif'
import trackProgress from 'images/track_progress.gif'

import ContributeButton from './ContributeButton'

import './style.css'
import FAQ from './Accordion'
import Stats from './Stats'

interface LandingProps {}

const Landing: React.FC<LandingProps> = () => {
	const theme = useTheme()
	const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))

	return (
		<Grid
			container
			direction="column"
			justify="center"
			align="center"
			alignItems="center"
			style={{
				gap: '75px',
				paddingLeft: !isDesktop ? '15px' : 0,
				paddingRight: !isDesktop ? '15px' : 0
			}}
			spacing={3}
		>
			<Grid
				item
				container
				style={{ gap: '75px' }}
				direction={isDesktop ? 'row' : 'column'}
				justify="center"
				alignItems="center">
				{/** review professors */}
				<Grid item xs>
					<h1>Avalie seus professores prediletos</h1>
					<p>
						Compartilhe sua opiniões e ajude outros colegas que
						precisam passar pelo que você já passou!
					</p>
				</Grid>
				<Grid item xs>
					<img
						src={subjectReview}
						alt="Popup de avaliação de oferecimento"
						style={{
							borderRadius: '15px',
							boxShadow: '1px 1px 5px 0px rgb(0, 0, 0, .25)',
							maxWidth: isDesktop ? '100%' : '80%',
							height: 'auto',
							width: 'auto'
						}}
					/>
				</Grid>
			</Grid>

			<Grid
				item
				container
				style={{ gap: '75px' }}
				direction={isDesktop ? 'row' : 'column'}
				justify="center"
				alignItems="center">
				{/** track your progress */}
				<Grid item container justify="center" xs>
					<h1>Acompanhe seu progresso na USP</h1>
					<p>
						O USPY oferece ferramentas para você acompanhar de
						pertinho a sua jornada acadêmica!
					</p>
				</Grid>

				<Grid item container justify="center" xs>
					<img
						src={trackProgress}
						alt="Animação de um celular acessando o histórico do aluno"
						style={{
							transform: 'rotate(1deg)',
							borderRadius: '15px',
							boxShadow: '1px 1px 5px 0px rgb(0, 0, 0, .25)',
							maxWidth: isDesktop ? '350px' : '70%',
							height: 'auto',
							width: 'auto'
						}}
					/>
				</Grid>
			</Grid>

			<Grid
				item
				container
				direction={isDesktop ? 'row' : 'column'}
				justify="center"
				alignItems="center">
				{/** explore subjects */}
				<Grid item container justify="center" align="center" xs>
					<h1>Explore as disciplinas do seu curso</h1>
					<p>
						Saiba tudo sobre as disciplinas que você precisará
						cursar, seus professores e visualize métricas úteis!
					</p>
					<p>
						E não se preocupe: tudo é anônimo! Apenas dados
						coletivos são compartilhados, de forma a trazer o máximo
						de informações sem prejudicar a privacidade dos
						usuários.
					</p>
				</Grid>

				<Grid item container justify="center" align="center" xs>
					<img
						src={explore}
						alt="Imagens mostrando as funcionalidades de explore da plataorma"
						style={{
							maxHeight: '700px',
							maxWidth: '100%',
							height: 'auto',
							width: 'auto'
						}}
					/>
				</Grid>
			</Grid>

			{/** stats */}
			<Grid
				item
				container
				direction={isDesktop ? 'row' : 'column'}
				wrap={'nowrap'}
				justify="center"
				alignItems="center"
				style={{ gap: '30px' }}
			>

				<Grid item container direction="column">
					<Grid item>
						<h1>Fique por dentro de tudo!</h1>
					</Grid>
					<Stats></Stats>
				</Grid>
				<Grid item container justify="center" alignItems="center">
					<img
						src={stats}
						alt="Imagens mostrando uma pessoa explorando estatísticas"
						style={{
							maxHeight: '500px',
							maxWidth: '100%',
							height: 'auto',
							width: 'auto',
							contain: 'content'
						}}
					/>
				</Grid>
			</Grid>

			<Grid
				item
				container
				direction={isDesktop ? 'row' : 'column'}
				wrap={'nowrap'}
				justify="center"
				alignItems="center">
				{/** by students, for students */}
				<Grid item container justify="center" align="center" xs>
					<h1>De alunos para alunos</h1>
					<p>
						O maior objetivo do USPY é tornar a vida acadêmica do
						uspiano mais prática e divertida. Tudo é totalmente
						gratuito e quanto mais estudantes se cadastrarem, mais
						informativa fica a plataforma.
					</p>
					<p>
						Se você tem interesse em contribuir, seja como
						desenvolvedor ou apenas dando uma sugestão, acesse o
						nosso{' '}
						<a
							className="link"
							href=""
							style={{ color: theme.palette.primary.main }}>
							GitHub
						</a>{' '}
						ou entre em contato conosco{' '}
						<a
							className="link"
							href=""
							style={{ color: theme.palette.primary.main }}>
							aqui
						</a>
						.
					</p>
					<Grid
						item
						container
						direction="row"
						justify="center"
						align="center"
						spacing={1}
						style={{ margin: '10px 0 10px 0' }}>
						<Grid item>
							<ContributeButton
								text="QUERO ME CADASTRAR!"
								url="/cadastro"></ContributeButton>
						</Grid>
						<Grid item>
							<ContributeButton
								text="QUERO CONTRIBUIR!"
								url="https://github.com/Projeto-USPY/"></ContributeButton>
						</Grid>
					</Grid>
				</Grid>

				<Grid item container justify="center" alignItems="center" xs>
					<img
						src={contribute}
						alt="Imagem mostrando um laptop com alguns bonequinhos contribuindo"
						style={{
							maxHeight: '500px',
							maxWidth: '100%',
							height: 'auto',
							width: 'auto',
							contain: 'content'
						}}
					/>
				</Grid>
			</Grid>

			<Grid
				item
				container
				direction="column"
				justify="center"
				alignItems="center"
				style={{ margin: '50px 0 100px 0' }}>
				{/** FAQ */}
				<h1>Perguntas Frequentes</h1>
				<Grid item>
					<FAQ />
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Landing
