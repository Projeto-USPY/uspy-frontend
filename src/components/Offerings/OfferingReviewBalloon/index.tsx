import React, { useContext, useEffect, useState } from 'react'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ReportIcon from '@material-ui/icons/FlagOutlined'

import { OfferingReview } from 'types/Offering'

import api from 'API'
import VoteButton from 'components/VoteButton'
import OfferingContext from 'contexts/OfferingContext'
import EmoteHated from 'images/hated.svg'
import EmoteIndifferent from 'images/indifferent.png'
import EmoteLiked from 'images/liked.png'
import EmoteLoved from 'images/loved.svg'
import EmoteUnliked from 'images/unliked.png'
import { getRelativeDate } from 'utils/time'

const RATE_TO_EMOJI = [
	null,
	EmoteHated,
	EmoteUnliked,
	EmoteIndifferent,
	EmoteLiked,
	EmoteLoved
]

interface PropsType {
    review: OfferingReview
	locked?: boolean
}

const OfferingReviewBalloon: React.FC<PropsType> = ({ review, locked = false }) => {
	const [vote, setVote] = useState<number>(0)
	console.log(review, vote)
	const { professor, course, specialization, code } = useContext(OfferingContext)

	useEffect(() => {
		api.getOfferingReviewUserVote(course, specialization, code, professor, review.uuid).then(vote => {
			setVote(vote.type === 'upvote' ? 1 : -1)
		}).catch(err => {
			if (err !== 404) {
				console.log(err)
			}
		})
	}, [])

	const balance = review.upvotes - review.downvotes + vote
	const handleVote = (x: number) => {
		setVote(x)
	}

	const handleReport = () => {
		alert('Tem certeza que deseja reportar?')
	}

	return <>
		<Paper square elevation={2} className={`offering-review-balloon${locked ? '-locked' : ''}`}>
			<Grid container direction='column' alignItems='stretch' className='full-height'>
				<Grid item container alignItems='center' xs>
					<Grid item xs>
						<Typography variant='body1'>
							{review.body}
						</Typography>
					</Grid>
					<Grid item xs='auto'>
						<img src={RATE_TO_EMOJI[review.rating]} height={30}/>
					</Grid>
				</Grid>
				<Grid item container direction='row-reverse' xs='auto'> {/* Timestamp */}
					<Typography variant='caption' color='textSecondary'> <i> {getRelativeDate(new Date(review.timestamp))} {review.edited ? '(Editado)' : null} </i> </Typography>
				</Grid>
			</Grid>
		</Paper>
		<Grid container direction='column' justify='space-around' alignItems='center' style={{ width: 45 }}>
			<Grid item container direction='column' alignItems='center'>
				<VoteButton disabled={locked} selected={vote === 1} setSelected={() => handleVote(vote === 1 ? 0 : 1)} orientation='up' />
				<Typography variant='body1'> {balance} </Typography>
				<VoteButton disabled={locked} selected={vote === -1} setSelected={() => handleVote(vote === -1 ? 0 : -1)} orientation='down' />
			</Grid>
			{
				locked
					? null
					: <Grid item> <ReportIcon onClick={handleReport} className='cursor-pointer' /> </Grid>
			}

		</Grid>
	</>
}

export default OfferingReviewBalloon
