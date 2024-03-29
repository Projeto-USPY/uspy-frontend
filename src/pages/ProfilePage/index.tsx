import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import useTheme from '@material-ui/core/styles/useTheme'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined'

import { AppState } from 'types/redux'

import api from 'API'
import BreadCrumb from 'components/Breadcrumb'
import MessagePanel from 'components/MessagePanel'
import Navbar from 'components/Navbar'
import UpdateTranscriptModal from 'components/UpdateTranscriptModal'
import TranscriptView from 'pages/ProfilePage/TranscriptView'
import { toSlashSeparatedDate, toTime } from 'utils/time'

export function buildURI(): string {
	return '/perfil'
}

const ProfilePage = () => {
	const [semesters, setSemesters] = useState<number[] | null>(null)
	const [errorMessage, setErrorMessage] = useState<string>('')
	const [updateTranscriptModalOpen, setUpdateTranscriptModalOpen] =
		useState<boolean>(false)

	const lastUpdatedAccount = useSelector(
		(state: AppState) => state.lastUpdatedAccount,
	)
	const user = useSelector((state: AppState) => state.user)

	// get semesters where transcript has records
	useEffect(() => {
		api.getTranscriptYears()
			.then(years => {
				const semesters: number[] = []
				// semesters[i] is semesters[i]/2.semesters[i]%2
				years.forEach(el => {
					el.semesters.forEach(sem => {
						semesters.push(2 * el.year + sem - 1)
					})
				})
				setSemesters(semesters)
				if (!years.length) {
					setErrorMessage(
						'Nenhum registro foi encontrado. Tente atualizar o seu histórico com o botão acima!',
					)
				}
			})
			.catch(err => {
				setErrorMessage(
					`Algo deu errado (${err.message}). Tente novamente mais tarde`,
				)
			})
	}, [lastUpdatedAccount])

	const theme = useTheme()
	const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))

	return (
		<div className="main">
			<main>
				<Navbar />
				<div style={{ height: isDesktop ? '94px' : '64px' }}></div>
				<Container>
					<Grid
						container
						alignItems="center"
						style={{ height: '50px' }}>
						<BreadCrumb
							links={[
								{
									url: '/',
									text: 'Home',
								},
								{
									url: '/Perfil',
									text: 'Perfil',
								},
							]}
						/>
					</Grid>

					<br />
					<br />

					<Card elevation={3}>
						<CardHeader
							title={
								isDesktop ? 'Meu histórico' : 'MEU HISTÓRICO'
							}
							titleTypographyProps={{
								variant: isDesktop ? 'h5' : 'body1',
								style: {
									fontWeight: isDesktop ? 'bold' : 'normal',
									fontFamily: isDesktop
										? ''
										: 'Roboto Condensed, sans-serif',
								},
							}}
							action={
								<Grid
									container
									direction="column"
									alignItems="flex-end"
									spacing={1}>
									<Grid item>
										<Button
											size={isDesktop ? 'large' : 'small'}
											variant="outlined"
											color="secondary"
											onClick={() =>
												setUpdateTranscriptModalOpen(
													true,
												)
											}>
											Atualizar &nbsp;&nbsp;
											<CloudUploadOutlinedIcon fontSize="small" />
										</Button>
									</Grid>
									<Grid item>
										<Typography variant="caption">
											{lastUpdatedAccount
												? 'Última atualização: ' +
												  toSlashSeparatedDate(
														new Date(
															lastUpdatedAccount,
														),
												  ) +
												  (isDesktop
														? ` às ${toTime(
																new Date(
																	lastUpdatedAccount,
																),
														  )}`
														: '')
												: ''}
										</Typography>
									</Grid>
								</Grid>
							}
						/>
						<CardContent
							style={{
								padding: isDesktop ? '16px 32px' : '0 0',
							}}>
							{!errorMessage ? (
								semesters ? (
									<TranscriptView semesters={semesters} />
								) : null
							) : (
								<MessagePanel
									message={errorMessage}
									height={300}
								/>
							)}
						</CardContent>
					</Card>
				</Container>
				<UpdateTranscriptModal
					open={updateTranscriptModalOpen}
					close={() => setUpdateTranscriptModalOpen(false)}
				/>
			</main>
		</div>
	)
}

export default ProfilePage
