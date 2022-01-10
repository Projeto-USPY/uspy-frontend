import React, { useState, useEffect } from 'react'

import Paper from '@material-ui/core/Paper'
import Popover from '@material-ui/core/Popover'

import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts'

interface PropsType {
    approval: number
    neutral: number
    disapproval: number
    noStatsMessage?: string
	showQuestionMark?: boolean
}

function toPercentage (x: number): string {
	return (100 * x).toFixed(0) + '%'
}

const OfferingApprovalDonut: React.FC<PropsType> = ({ approval, neutral, disapproval, noStatsMessage = 'Não existem avaliações suficientes para este professor', showQuestionMark = false }: PropsType) => {
	let missingData = false
	let errorMessage = ''
	if (!approval && !neutral && !disapproval) {
		missingData = true
		neutral = 1.0
		approval = disapproval = 0.0
	} else if (approval + neutral + disapproval !== 1) {
		errorMessage = 'Dados incoerentes'
		neutral = 1.0
		approval = disapproval = 0.0
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
				errorMessage || (missingData ? noStatsMessage
					: <ul className="donut-tooltip">
						<li> Aprovam: {toPercentage(approval)} </li>
						<li> Desaprovam: {toPercentage(disapproval)} </li>
						<li> Neutros: {toPercentage(neutral)} </li>
					</ul>)
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

	const colors = ['#00910E', '#6a86a3', '#FF0000']

	const wrapperStyle = {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative'
	}

	console.log(`${errorMessage} # ${missingData}`)

	return <>
		<div style={wrapperStyle} onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>
			<ResponsiveContainer aspect={1} height={60}>
				<PieChart width={60} height={60}>
					<Pie dataKey='value' data={data} cx="50%" cy="50%" outerRadius={20} innerRadius={10} startAngle={90} endAngle={450}>
						{
							data.map((_, index) => (
								<Cell key={`cell-${index}`} fill={errorMessage || missingData ? '#DEDEDE' : colors[index]}/>
							))
						}
					</Pie>
				</PieChart>
			</ResponsiveContainer>
			{ showQuestionMark
				? <span style={{ position: 'absolute', color: 'grey' }}>
					?
				</span>
				: null
			}
		</div>
		{popover}
	</>
}

export default React.memo(OfferingApprovalDonut)
