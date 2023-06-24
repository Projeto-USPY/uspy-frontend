import React from 'react'

import Paper from '@material-ui/core/Paper'

import {
	ResponsiveContainer,
	XAxis,
	YAxis,
	BarChart,
	Bar,
	Label,
	ReferenceLine,
	Tooltip,
} from 'recharts'

interface ReferenceLineLabelProps {
	viewBox: any
	width: number
	message: string
	margin?: number
	x: number
}

// Renders the flag for average and "you are here" reference lines
const ReferenceLineLabel: React.FC<ReferenceLineLabelProps> = ({
	viewBox,
	width,
	message,
	margin = 0,
	x,
}) => {
	return (
		<>
			<line
				x1={viewBox.x}
				x2={viewBox.x}
				stroke="#FFFFFFFF"
				fill="none"
				strokeOpacity={1}
				strokeWidth={2}
				y1={viewBox.y + margin - 15}
				y2={viewBox.y}
			></line>
			<foreignObject
				{...viewBox}
				width={width}
				x={x < 5 ? viewBox.x : viewBox.x - width}
			>
				<div
					style={{
						height: '18px',
						backgroundColor: 'orange',
						color: 'white',
						marginTop: `${margin - 15}px`,
						whiteSpace: 'nowrap',
						fontSize: '11pt',
					}}
				>
					<p>{message}</p>
				</div>
			</foreignObject>
		</>
	)
}

const CustomTooltip = ({ active, payload, label, total }: any) => {
	return active ? (
		<Paper elevation={2} style={{ padding: '1rem' }}>
			Entre {(label - 1).toFixed(0) + '-' + (label + 1).toFixed(0)}:{' '}
			{payload ? ((100 * payload[0].value) / total).toFixed(1) : null}%
		</Paper>
	) : null
}

interface GradeDistributionChartProps {
	grades: any
	averageGrade: number
	yourGrade: number | null
}

const GradeDistributionChart: React.FC<GradeDistributionChartProps> = ({
	grades,
	averageGrade,
	yourGrade,
}) => {
	const cnt = [0, 0, 0, 0, 0] // [0, 2), [2, 4), [4, 6), [6, 8), [8, 10]
	for (let i = 0.0; i <= 10; i += 0.1) {
		if (grades[i.toFixed(1)] === undefined) {
			grades[i.toFixed(1)] = 0
		}
		cnt[Math.floor(i / 2) - (i === 10 ? 1 : 0)] += grades[i.toFixed(1)]
	}
	const data = cnt.reduce(
		(cur, val, idx) => [...cur, { x: idx * 2 + 1, grade: val }],
		[],
	)
	data.sort((x, y) => x.x - y.x)
	const total = cnt.reduce((cur, val) => cur + val, 0)
	const maxVal = cnt.reduce((cur, val) => Math.max(cur, val), 0)

	const referenceLines = [
		{
			message: 'Você está aqui',
			grade: yourGrade,
			width: 100,
			margin: 35,
		},
		{
			message: 'Média',
			grade: averageGrade,
			width: 50,
			margin: 0,
		},
	]

	if ((yourGrade ?? 0) > averageGrade) {
		// whichever is greater should be rendered last, so flag is not crossed by red lines
		referenceLines.reverse()
	}

	return (
		<div
			style={{
				height: '320px',
				width: '100%',
				marginLeft: '-20px',
				paddingTop: '20px',
				overflow: 'visible',
			}}
		>
			<ResponsiveContainer>
				<BarChart data={data}>
					<Bar barSize={200} dataKey="grade" fill="#68417FCC" />
					<XAxis
						dataKey="x"
						tickLine={false}
						ticks={[0, 2, 4, 6, 8, 10]}
						type="number"
						domain={[0, 10]}
					>
						<Label
							value="Notas"
							position="insideBottom"
							offset={-5}
						/>
					</XAxis>
					<YAxis
						dataKey="grade"
						tickLine={false}
						domain={[0, Math.ceil(1.3 * maxVal)]}
					>
						<Label
							value="Quantidade"
							angle={-90}
							position="insideLeft"
							offset={20}
						/>
					</YAxis>
					<Tooltip content={<CustomTooltip total={total} />} />

					{referenceLines.map((lineProps, idx) =>
						lineProps.grade ? (
							<ReferenceLine
								x={lineProps.grade}
								key={idx}
								isFront
								stroke="red"
							>
								<Label
									position="insideTopRight"
									content={({ viewBox }) => (
										<ReferenceLineLabel
											viewBox={viewBox}
											width={lineProps.width}
											message={lineProps.message}
											margin={lineProps.margin}
											x={lineProps.grade}
										/>
									)}
								/>
							</ReferenceLine>
						) : null,
					)}
				</BarChart>
			</ResponsiveContainer>
		</div>
	)
}

export default GradeDistributionChart
