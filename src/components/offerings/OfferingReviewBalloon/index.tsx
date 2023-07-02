import React, { useContext, useEffect, useState, useCallback } from 'react'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import DeleteIcon from '@material-ui/icons/Delete'
import ReportIcon from '@material-ui/icons/FlagOutlined'
import withStyles from '@material-ui/core/styles/withStyles'

import { OfferingReview } from 'types/Offering'

import api from 'API'
import OfferingReviewReportDialog from 'components/offerings/OfferingReviewReportDialog'
import VoteButton from 'components/VoteButton'
import OfferingContext from 'contexts/OfferingContext'
import ReviewContext from 'contexts/ReviewContext'
import { useMySnackbar } from 'hooks'
import EmoteHated from 'images/hated.svg'
import EmoteIndifferent from 'images/indifferent.svg'
import EmoteLiked from 'images/liked.svg'
import EmoteLoved from 'images/loved.svg'
import EmoteUnliked from 'images/unliked.svg'
import { getRelativeDate } from 'utils/time'

const MyDeleteIcon = withStyles({
	root: {
		fontSize: '1.25rem',
		color: '#00000077',
	},
})(DeleteIcon)

const RATE_TO_EMOJI = [
	null,
	EmoteHated,
	EmoteUnliked,
	EmoteIndifferent,
	EmoteLiked,
	EmoteLoved,
]

interface PropsType {
	review: OfferingReview
	locked?: boolean
}

const OfferingReviewBalloon: React.FC<PropsType> = ({
	review,
	locked = false,
}) => {
	const [vote, setVote] = useState<number>(0)
	const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState<boolean>(false)
	const [voteRegistered, setVoteRegistered] = useState<number>(0)
	const [updatedVote, setUpdatedVote] = useState<boolean>(false)
	const [reporting, setReporting] = useState<boolean>(false)

	const { professor, course, specialization, code } =
		useContext(OfferingContext)
	const { setUserReview } = useContext(ReviewContext)

	const notify = useMySnackbar()

	useEffect(() => {
		api.getOfferingReviewUserVote(
			course,
			specialization,
			code,
			professor,
			review.uuid,
		)
			.then((vote) => {
				setVoteRegistered(vote.type === 'upvote' ? 1 : -1)
			})
			.catch((err) => {
				if (err.code !== 'not_found') {
					console.error(err)
				}
			})
	}, [])

	const balance =
		review.upvotes -
		review.downvotes +
		(updatedVote ? vote - voteRegistered : 0)
	const handleVote = (x: number) => {
		api.submitOfferingReviewUserVote(
			course,
			specialization,
			code,
			professor,
			review.uuid,
			{
				type: x === 0 ? 'none' : x === 1 ? 'upvote' : 'downvote',
			},
		)
		setVote(x)
		setUpdatedVote(true)
	}

	const getVote = useCallback(
		() => (updatedVote ? vote : voteRegistered),
		[vote, updatedVote, voteRegistered],
	)
	const deleteComment = () => {
		api.deleteOfferingReview(course, specialization, code, professor)
			.then(() => {
				setIsDeleteDialogOpen(false)
				setUserReview(null)
				notify('Sua avaliação foi removida com sucesso!', 'success')
			})
			.catch((err) => {
				setIsDeleteDialogOpen(false)
				notify(
					`Algo deu errado (${err.message}). Tente novamente mais tarde!`,
					'error',
				)
			})
	}
	return (
		<>
			<Dialog
				onClose={() => setIsDeleteDialogOpen(false)}
				open={isDeleteDialogOpen}
			>
				<DialogTitle> Excluir comentário </DialogTitle>
				<DialogContent>
					<DialogContentText>
						Você tem certeza que deseja excluir seu comentário?
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button
						id="dismiss-error-dialog"
						onClick={() => setIsDeleteDialogOpen(false)}
						color="secondary"
					>
						Cancelar
					</Button>
					<Button
						id="dismiss-error-dialog"
						onClick={() => deleteComment()}
						color="secondary"
					>
						Confirmar
					</Button>
				</DialogActions>
			</Dialog>
			<Paper
				square
				elevation={2}
				className={`offering-review-balloon${locked ? '-locked' : ''}`}
			>
				<Grid
					container
					direction="column"
					alignItems="stretch"
					className="full-height"
				>
					<Grid item container alignItems="center" xs>
						<Grid item xs>
							<Typography variant="body1">
								{review.body}
							</Typography>
						</Grid>
						<Grid item xs="auto" className="pad">
							<img
								src={RATE_TO_EMOJI[review.rating]}
								height={30}
							/>
						</Grid>
					</Grid>
					<Grid
						item
						container
						direction="row-reverse"
						alignItems="flex-end"
						xs="auto"
					>
						{' '}
						{/* Timestamp */}
						{locked ? (
							<IconButton
								onClick={() => setIsDeleteDialogOpen(true)}
								size="small"
								style={{ margin: '0 -1rem 0 1rem' }}
							>
								<Tooltip title="Deletar comentário">
									<MyDeleteIcon
										style={{ fontSize: '1rem' }}
									/>
								</Tooltip>
							</IconButton>
						) : null}
						<Typography variant="caption" color="textSecondary">
							{' '}
							<i>
								{' '}
								{getRelativeDate(
									new Date(review.timestamp),
								)}{' '}
								{review.edited ? '(Editado)' : null}{' '}
							</i>{' '}
						</Typography>
					</Grid>
				</Grid>
			</Paper>
			<Grid
				container
				direction="column"
				justify="space-around"
				alignItems="center"
				style={{ width: 45 }}
			>
				<Grid item container direction="column" alignItems="center">
					<VoteButton
						disabled={locked}
						selected={getVote() === 1}
						setSelected={() => handleVote(getVote() === 1 ? 0 : 1)}
						orientation="up"
					/>
					<Typography variant="body1"> {balance} </Typography>
					<VoteButton
						disabled={locked}
						selected={getVote() === -1}
						setSelected={() =>
							handleVote(getVote() === -1 ? 0 : -1)
						}
						orientation="down"
					/>
				</Grid>
				{locked ? null : (
					<Grid item>
						{' '}
						<ReportIcon
							onClick={() => setReporting(true)}
							className="cursor-pointer"
						/>{' '}
					</Grid>
				)}
			</Grid>
			{locked ? null : (
				<OfferingReviewReportDialog
					isOpen={reporting}
					close={() => setReporting(false)}
					review={review.uuid}
				/>
			)}
		</>
	)
}

export default OfferingReviewBalloon
