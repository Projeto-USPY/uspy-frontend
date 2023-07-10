import React, { useCallback, useContext, useEffect, useState } from 'react'

import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import Collapse from '@material-ui/core/Collapse'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import useTheme from '@material-ui/core/styles/useTheme'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import LockIcon from '@material-ui/icons/Lock'
import LockOpenIcon from '@material-ui/icons/LockOpen'

import api from 'API'
import OfferingEmotesSelector from 'components/offerings/OfferingEmotesSelector'
import OfferingReviewInput from 'components/offerings/OfferingReviewInput'
import OfferingContext from 'contexts/OfferingContext'
import ReviewContext from 'contexts/ReviewContext'
import { useErrorDialog, useMySnackbar } from 'hooks'

const COMMENT_THRESHOLD = 10
const COMMENT_LIMIT = 500

const OfferingReviewBox = () => {
	const theme = useTheme()
	const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))

	const [isReviewFormOpen, setIsReviewFormOpen] = useState<boolean>(false)
	const [comment, setComment] = useState<string>('')
	const [rate, setRate] = useState<number | null>(null)
	const [pending, setPending] = useState<boolean>(false)
	const [editing, setEditing] = useState<boolean>(false)
	const notify = useMySnackbar()
	const { professor, course, specialization, code } =
		useContext(OfferingContext)
	const {
		userReview: review,
		setUserReview: setReview,
		isGuest,
	} = useContext(ReviewContext)
	const uspyAlert = useErrorDialog()

	// Loaded review
	useEffect(() => {
		setComment(review?.body || '')
		setRate(review?.rating || null)
		setEditing(false)
	}, [review])

	// Reset component when selected professor changes
	useEffect(() => {
		setComment('')
		setRate(null)
		setPending(false)
		setEditing(false)
		setIsReviewFormOpen(false)
	}, [professor])

	const handleCommentChange = (s: string) => {
		setComment(s)
	}

	const handleRateChange = (x: number) => {
		if (x === rate) {
			setRate(null)
		} else {
			setRate(x)
		}
	}

	const handleReviewSubmit = useCallback(() => {
		setPending(true)
		api.submitOfferingReview(
			course,
			specialization,
			code,
			professor,
			comment,
			rate,
		)
			.then(review => {
				notify('Sua avaliação foi enviada!', 'success')
				setReview(review)
				setPending(false)
			})
			.catch(err => {
				if (err.code === 'forbidden') {
					notify(
						'Você precisa ter feito a matéria para avaliar',
						'info',
					)
				} else {
					uspyAlert(
						`Algo de errado aconteceu (${err.message}). Tente novamente mais tarde!`,
					)
				}
				setPending(false)
			})
	}, [comment, rate])

	const isLocked = editing === false && review !== null

	return (
		<div className="full-width offering-review-form-accordion">
			<Grid
				container
				className="offering-review-form-accordion-button"
				direction="row-reverse"
				alignItems="center"
				onClick={() => {
					if (isGuest) {
						notify(
							'Você precisa fazer login para avaliar um oferecimento',
							'info',
						)
						return
					}

					setIsReviewFormOpen(!isReviewFormOpen)
				}}>
				<Grid item>
					{isReviewFormOpen ? (
						<ExpandLessIcon fontSize="large" />
					) : (
						<ExpandMoreIcon fontSize="large" />
					)}
				</Grid>
			</Grid>
			<Collapse in={isReviewFormOpen}>
				<Container>
					<Grid
						container
						direction="column"
						justify="space-evenly"
						alignItems="stretch"
						spacing={2}
						className="offering-review-form-accordion-content">
						<Grid container item justify="center" xs="auto">
							<Typography variant="caption" color="textSecondary">
								{' '}
								Lembre-se: O USPY não se responsabiliza pelas
								avaliações feitas por você, porém desrespeitar
								ou ofender docentes podem resultar na remoção do
								seu comentário e banimento da sua conta.
							</Typography>
						</Grid>
						<Grid item xs>
							<OfferingReviewInput
								content={comment}
								onChange={s => handleCommentChange(s)}
								rows={isDesktop ? 6 : 12}
								limit={COMMENT_LIMIT}
								placeholder="Escreva seu comentário aqui..."
								disabled={isLocked}
								offering={professor}
								savedComment={review?.body || ''}
								pendingSavedComment={review === null}
							/>
							{review ? (
								<Grid
									container
									alignItems="center"
									direction="row-reverse">
									<IconButton
										onClick={() => setEditing(!editing)}>
										<Tooltip
											title={
												editing
													? 'Travar avaliação'
													: 'Editar avaliação'
											}>
											{editing ? (
												<LockOpenIcon color="primary" />
											) : (
												<LockIcon color="primary" />
											)}
										</Tooltip>
									</IconButton>
									<Typography
										variant="body2"
										color="textSecondary">
										{editing ? '' : 'Destrave para editar '}{' '}
										&nbsp;
									</Typography>
								</Grid>
							) : null}
						</Grid>
						<Grid item container justify="space-around" wrap="wrap">
							<OfferingEmotesSelector
								rate={rate}
								setRate={handleRateChange}
								isLocked={isLocked}
								compact={!isDesktop}
							/>
							{isDesktop ? (
								<Grid item style={{ maxWidth: 400 }} xs>
									<Button
										fullWidth
										color="primary"
										size="large"
										variant="contained"
										disabled={
											rate === null ||
											comment.length <
												COMMENT_THRESHOLD ||
											comment.length > COMMENT_LIMIT ||
											isLocked ||
											(comment === review?.body &&
												rate === review?.rating)
										}
										onClick={handleReviewSubmit}>
										{pending ? (
											<CircularProgress color="secondary" />
										) : review === null ? (
											'ENVIAR'
										) : (
											'EDITAR'
										)}
									</Button>
								</Grid>
							) : null}
						</Grid>
					</Grid>
				</Container>
				{!isDesktop ? (
					<Button
						fullWidth
						color="primary"
						size="large"
						variant="contained"
						disabled={
							rate === null ||
							comment.length < COMMENT_THRESHOLD ||
							comment.length > COMMENT_LIMIT ||
							isLocked ||
							(comment === review?.body &&
								rate === review?.rating)
						}
						onClick={handleReviewSubmit}
						style={{ height: 40 }}>
						{pending ? (
							<CircularProgress color="secondary" size={20} />
						) : review === null ? (
							'ENVIAR'
						) : (
							'EDITAR'
						)}
					</Button>
				) : null}
			</Collapse>
		</div>
	)
}

export default OfferingReviewBox
