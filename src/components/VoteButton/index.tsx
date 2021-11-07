import React from 'react'

import PlayArrowIcon from '@material-ui/icons/PlayArrow'

interface PropsType {
    selected: boolean
    setSelected: () => void
    orientation?: 'up' | 'down' | 'left' | 'right'
}

const ORIENTATION_TO_DEGREE = {
	right: 0,
	up: 90,
	left: 180,
	down: 270
}

const VoteButton: React.FC<PropsType> = ({ selected, setSelected, orientation = 'right' }) => {
	const style = {
		transform: `rotate(-${ORIENTATION_TO_DEGREE[orientation]}deg)`,
		cursor: 'pointer'
	}

	return <PlayArrowIcon
		fontSize='large'
		htmlColor={selected ? '#A5A5A5' : '#D5D5D5'}
		style={style}
		onClick={setSelected}
	/>
}

export default VoteButton
