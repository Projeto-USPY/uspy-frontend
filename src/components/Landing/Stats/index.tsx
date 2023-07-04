import React, { useEffect, useState } from 'react'

import Grid from '@material-ui/core/Grid'

import { Stats as APIStats } from 'types/Stats'

import api from 'API'
import commentStatIcon from 'images/comment_stat_icon.svg'
import gradeStatIcon from 'images/grade_stat_icon.svg'
import offeringStatIcon from 'images/offering_stat_icon.svg'
import subjectStatIcon from 'images/subject_stat_icon.svg'
import userStatIcon from 'images/user_stat_icon.svg'

const Stats: React.FC = () => {
	const [stats, setStats] = useState({} as APIStats)

	useEffect(() => {
		api.getStats().then((res) => {
			setStats(res)
		})
	}, [])

	return (
		<Grid
			container
			justify="center"
			alignItems="center"
			style={{ gap: '15px' }}>
			<Grid item>
				<img
					style={{ maxHeight: '3em', height: 'auto' }}
					src={subjectStatIcon}
					alt="Icone de um livro"
				/>
				<p>{stats.subjects ?? '0'} disciplinas</p>
			</Grid>
			<Grid item>
				<img
					style={{ maxHeight: '3em', height: 'auto' }}
					src={offeringStatIcon}
					alt="Icone de uma silhueta com um interrogação"
				/>
				<p>{stats.offerings ?? '0'} oferecimentos</p>
			</Grid>
			<Grid item>
				<img
					style={{ maxHeight: '3em', height: 'auto' }}
					src={userStatIcon}
					alt="Icone de um capelo"
				/>
				<p>{stats.users ?? '0'} usuários</p>
			</Grid>
			<Grid item>
				<img
					style={{ maxHeight: '3em', height: 'auto' }}
					src={gradeStatIcon}
					alt="Icone de uma folha de prova"
				/>
				<p>{stats.grades ?? '0'} notas</p>
			</Grid>
			<Grid item>
				<img
					style={{ maxHeight: '3em', height: 'auto' }}
					src={commentStatIcon}
					alt="Icone de um balão de comentário"
				/>
				<p>{stats.comments ?? '0'} comentários</p>
			</Grid>
		</Grid>
	)
}

export default Stats
