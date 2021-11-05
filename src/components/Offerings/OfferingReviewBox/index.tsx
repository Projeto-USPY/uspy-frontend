import React, { useState } from 'react'

import Button from '@material-ui/core/Button'
import Collapse from '@material-ui/core/Collapse'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import EmoteHated from 'images/hated.svg'
import EmoteIndifferent from 'images/indifferent.png'
import EmoteLiked from 'images/liked.png'
import EmoteLoved from 'images/loved.svg'
import EmoteUnliked from 'images/unliked.png'

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

const OfferingReviewInput = withStyles(theme => ({
	root: {
		border: '1px solid #e2e2e1',
		overflow: 'hidden',
		borderRadius: 10,
		backgroundColor: '#fcfcfb',
		transition: theme.transitions.create(['border-color', 'box-shadow']),
		padding: '1rem',
		boxSizing: 'border-box',
		'&:hover': {
			backgroundColor: '#fff'
		},
		'&$focused': {
			backgroundColor: '#fff',
			borderColor: theme.palette.primary.main
		}
	},
	focused: {}
}))(TextField)

const OfferingReviewBox = () => {
	const [isReviewFormOpen, setIsReviewFormOpen] = useState<boolean>(false)
	return <div className='full-width offering-review-form-accordion'>
		<Grid container
			className='offering-review-form-accordion-button'
			direction='row-reverse'
			alignItems='center'
			onClick={() => setIsReviewFormOpen(!isReviewFormOpen)}
		>
			<Grid item>
				{isReviewFormOpen
					? <ExpandLessIcon fontSize='large' />
					: <ExpandMoreIcon fontSize='large' />
				}
			</Grid>
		</Grid>
		<Collapse in={isReviewFormOpen}>
			<Container>
				<Grid
					container
					direction='column'
					justify='space-evenly'
					alignItems='stretch'
					spacing={2}
					className='offering-review-form-accordion-content'
				>
					<Grid container item justify='center' xs='auto'>
						<Typography variant='caption'> Lembre-se:
                        O USPY não se responsabiliza pelas avaliações feita por você,
                        porém desrespeitar ou ofender docentes podem resultar no
                        banimento da sua conta e remoção do seu comentário.
						</Typography>
					</Grid>
					<Grid item xs>
						<OfferingReviewInput
							InputProps={{ disableUnderline: true }}
							multiline
							rows={5}
							fullWidth
							helperText='ola'
						/>
					</Grid>
					<Grid item container justify='space-around' wrap='wrap'>
						<Grid
							item xs container
							direction='row'
							justify='space-around'
							style={{ minWidth: 400, maxWidth: 400 }}
						>
							{emotes.map(emote => (
								<Grid
									xs item container
									direction='column'
									justify='center'
									alignItems='center'
									key={emote.caption}
								>
									<img src={emote.emote} height={36}/>
									<Typography variant='caption'>
										{emote.caption}
									</Typography>
								</Grid>
							))}
						</Grid>
						<Grid item style={{ maxWidth: 400 }} xs>
							<Button
								fullWidth
								color="secondary"
								size="large"
								variant="outlined"
							>
                            ENVIAR
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</Collapse>

	</div>
}

export default OfferingReviewBox
