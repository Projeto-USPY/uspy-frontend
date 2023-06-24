import React from 'react'

import Tooltip, { TooltipProps } from '@material-ui/core/Tooltip'

interface PropsType {
	text: string
	maxCharacters: number
	tooltipProps?: Partial<TooltipProps>
	component?: React.ElementType
}

const CompressedTextWithTooltip: React.FC<PropsType> = ({
	text,
	maxCharacters,
	tooltipProps = null,
	component: Node = 'span',
}) => {
	const isBigger = text.length > maxCharacters
	return (
		<Tooltip title={text} placement="top" {...tooltipProps}>
			<Node>
				{' '}
				{isBigger
					? text.substr(0, maxCharacters - 3) + '...'
					: text}{' '}
			</Node>
		</Tooltip>
	)
}

export default CompressedTextWithTooltip
