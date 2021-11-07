import React, { useCallback, useState } from 'react'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import { OfferingReview } from 'types/Offering'

import VoteButton from 'components/VoteButton'
import EmoteHated from 'images/hated.svg'
import EmoteIndifferent from 'images/indifferent.png'
import EmoteLiked from 'images/liked.png'
import EmoteLoved from 'images/loved.svg'
import EmoteUnliked from 'images/unliked.png'

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
	locked: boolean
}

const OfferingReviewBalloon: React.FC<PropsType> = ({ review, locked = false }) => {
	const [vote, setVote] = useState<number>(0)
	console.log(review, vote)

	const balance = review.upvotes - review.downvotes + vote
	const handleVote = useCallback((x: number) => {
		if (!locked) {
			setVote(x)
		}
	}, [locked, setVote])

	return <>
		<Grid container direction='column' justify='center' alignItems='center' style={{ width: 45 }}>
			<VoteButton selected={vote === 1} setSelected={() => handleVote(vote === 1 ? 0 : 1)} orientation='up' />
			<Typography variant='body2'> {balance} </Typography>
			<VoteButton selected={vote === -1} setSelected={() => handleVote(vote === -1 ? 0 : -1)} orientation='down' />
		</Grid>
		<Paper square elevation={2} className='offering-review-balloon'>
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
					<Typography variant='caption' color='textSecondary'> {review.timestamp} </Typography>
				</Grid>
			</Grid>
		</Paper>
	</>
}

export default OfferingReviewBalloon
