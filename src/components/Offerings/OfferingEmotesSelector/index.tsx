import React from 'react'

import Grid from '@material-ui/core/Grid'
import useTheme from '@material-ui/core/styles/useTheme'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import EmoteHated from 'images/hated.svg'
import EmoteIndifferent from 'images/indifferent.svg'
import EmoteLiked from 'images/liked.svg'
import EmoteLoved from 'images/loved.svg'
import EmoteUnliked from 'images/unliked.svg'

const emotes = [
	{
		emote: EmoteHated,
		caption: 'Odiei'
	},
	{
		emote: EmoteUnliked,
		caption: 'Não gostei'
	},
	{
		emote: EmoteIndifferent,
		caption: 'Indiferente'
	},
	{
		emote: EmoteLiked,
		caption: 'Gostei'
	},
	{
		emote: EmoteLoved,
		caption: 'Amei'
	}
]

interface PropsType {
    rate: number,
    setRate: (rate: number) => void
    isLocked: boolean
	compact?: boolean
}

const OfferingEmotesSelector: React.FC<PropsType> = ({ rate, setRate, isLocked, compact = true }) => {
	const theme = useTheme()
	const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))

	return <Grid
		item xs container
		direction='row'
		justify={compact ? 'space-around' : 'center'}
		spacing={compact ? 1 : 2}
	>
		{emotes.map((emote, idx) => (
			<Grid
				xs="auto"
				item
				key={idx}
			>
				<Grid container
					direction='column'
					justify='center'
					alignItems='center'
				>
					<div tabIndex={idx} className={`
                move-up-hover-parent 
                move-down-on-click-parent 
                ${rate === idx + 1 ? 'img-popped' : ''}
            `}>
						<img
							src={emote.emote}
							height={isDesktop ? 36 : 24}
							className={isLocked ? '' : `cursor-pointer ${rate !== idx + 1 ? 'move-up-hover-child' : ''}`}
							onClick={isLocked ? null : () => setRate(idx + 1)}
						/>
					</div>
					<Typography variant='caption' color={idx + 1 === rate ? 'textPrimary' : 'textSecondary'}>
						{emote.caption}
					</Typography>
				</Grid>
			</Grid>
		))}
	</Grid>
}

export default OfferingEmotesSelector
