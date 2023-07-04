import React from 'react'

import Grid, { GridSize } from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'

interface ImageBlockProps {
	imageSource: string
	title: string
	size: 'small' | 'medium' | 'large'
	caption?: string
	center?: boolean
}

const ImageBlock: React.FC<ImageBlockProps> = ({
	imageSource,
	title,
	size,
	caption,
	center = false,
}) => {
	const fullWidth = {
		width: '100%',
	}

	const theme = useTheme()
	const isMD = useMediaQuery(theme.breakpoints.up('md'))

	// number of cols for each size
	let colsXS: GridSize = 10
	let colsMD: GridSize = 10
	let colsLG: GridSize = 10
	if (size === 'small') {
		colsXS = 12
		colsMD = 8
		colsLG = 4
	} else if (size === 'medium') {
		colsXS = 12
		colsMD = 10
		colsLG = 8
	} else {
		colsXS = 12
		colsMD = 10
		colsLG = 10
	}

	const margin = {
		marginLeft: isMD ? '0 1rem' : '0',
		marginRight: isMD ? '0 1rem' : '0',
		marginTop: '2rem',
		marginBottom: '2rem',
	}

	return (
		<Grid
			style={margin}
			container
			justify={center ? 'center' : 'flex-start'}>
			<Grid item xs={colsXS} md={colsMD} lg={colsLG}>
				<div className="figure" style={fullWidth}>
					<div>
						<img src={imageSource} alt={title} style={fullWidth} />
					</div>
					<figcaption>
						{' '}
						<Typography variant="caption"> {caption} </Typography>
					</figcaption>
				</div>
			</Grid>
		</Grid>
	)
}

export default ImageBlock
