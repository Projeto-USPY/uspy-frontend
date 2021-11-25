import React, { useState, useEffect } from 'react'

import Paper from '@material-ui/core/Paper'
import Popover from '@material-ui/core/Popover'

import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts'

interface PropsType {
    approval: number
    neutral: number
    disapproval: number
}

function toPercentage (x: number): string {
	return (100 * x).toFixed(0) + '%'
}

const OfferingApprovalDonut: React.FC<PropsType> = ({ approval, neutral, disapproval }: PropsType) => {
	const missingData = !approval || !neutral || !disapproval
	console.log(approval, neutral, disapproval)
	if (missingData) {
		neutral = 1.0
		approval = 0.0
		disapproval = 0.0
	} else if (approval + neutral + disapproval !== 1) {
		neutral = 1.0
		approval = 0.0
		disapproval = 0.0
		console.error('Statistics of approval must sum up to 1')
	}

	// Popover (tooltip) stuff
	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
	const handlePopoverOpen = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
		setAnchorEl(event.currentTarget)
	}
	const handlePopoverClose = () => {
		setAnchorEl(null)
	}

	useEffect(() => {
		const handleScroll = () => handlePopoverClose()
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const isPopoverOpen = Boolean(anchorEl)
	const popover = <Popover
		anchorEl={anchorEl}
		open={isPopoverOpen}
		style={{
			pointerEvents: 'none'
		}}
		anchorOrigin={{
			vertical: 'top',
			horizontal: 'right'
		}}
		transformOrigin={{
			vertical: 'top',
			horizontal: 'left'
		}}
		onClose={handlePopoverClose}
		disableRestoreFocus
		disableScrollLock
		elevation={3}
	>
		<Paper className="prompt tooltip-card">
			{
				missingData ? 'Não existem avaliações suficientes para este professor'
					: <ul className="donut-tooltip">
						<li> Aprovam: {toPercentage(approval)} </li>
						<li> Desaprovam: {toPercentage(disapproval)} </li>
						<li> Neutros: {toPercentage(neutral)} </li>
					</ul>
			}
		</Paper>
	</Popover>

	const data = [
		{
			value: approval,
			name: 'approval'
		},
		{
			value: neutral,
			name: 'neutral'
		},
		{
			value: disapproval,
			name: 'disapproval'
		}
	]
	const colors = ['#00910E', '#DEDEDE', '#FF0000']

	return <>
		<div onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>
			<ResponsiveContainer aspect={1} height={60}>
				<PieChart width={60} height={60}>
					<Pie dataKey='value' data={data} cx="50%" cy="50%" outerRadius={20} innerRadius={10} startAngle={90} endAngle={450}>
						{
							data.map((_, index) => (
								<Cell key={`cell-${index}`} fill={colors[index]}/>
							))
						}
					</Pie>
				</PieChart>
			</ResponsiveContainer>
		</div>
		{popover}
	</>
}

export default React.memo(OfferingApprovalDonut)
