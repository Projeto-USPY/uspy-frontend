import React from 'react'

import Paper from '@material-ui/core/Paper'

import {
	ResponsiveContainer,
	XAxis,
	YAxis,
	AreaChart,
	Area, Label, ReferenceLine,
	Tooltip
} from 'recharts'

interface ReferenceLineLabelProps {
	message: string
	margin?: number
}

const ReferenceLineLabel: React.FC<ReferenceLineLabelProps> = ({ message, margin = 0 }) => {
	return <div style={{ height: '20px', backgroundColor: 'orange', color: 'white', marginTop: `${margin}px` }}>
		<p>{message}</p>
	</div>
}

function keepDecimalCases (n: number, d: number) {
	return Math.round(n * Math.pow(10, d)) / Math.pow(10, d)
}

const CustomTooltip = ({ active, payload, label, total }: any) => {
	return active ? <Paper elevation={2} style={{ padding: '1rem' }}>
		Nota {label}: {payload ? keepDecimalCases(100 * payload[0].value / total, 1) : null}%
	</Paper> : null
}

interface GradeDistributionChartProps {
	grades: any
	averageGrade: number
	yourGrade: number | null
}

const GradeDistributionChart: React.FC<GradeDistributionChartProps> = ({ grades, averageGrade, yourGrade }) => {
	for (let i = 0.0; i <= 10; i += 0.1) if (grades[keepDecimalCases(i, 1).toFixed(1)] === undefined) grades[keepDecimalCases(i, 1).toFixed(1)] = 0
	const data = Object.keys(grades).reduce((cur, key) => [...cur, { x: keepDecimalCases(parseFloat(key), 1), grade: grades[key] }], [])

	data.sort((x, y) => x.x - y.x)
	const total = Object.keys(grades).reduce((cur, key) => (cur + grades[key]), 0)
	return <div style={{ height: '320px', width: '100%', marginLeft: '-20px', paddingTop: '20px' }}>
		<ResponsiveContainer>
			<AreaChart data={data}>
				<Area type="monotone" dataKey="grade" fill="#68417F77" stroke="#00000000"activeDot={{ r: 2 }}/>
				<XAxis dataKey="x" tickLine={false} tickCount={5} type="number" domain={[0, 10]}>
					<Label value="Notas" position="insideBottom" offset={-5}/>
				</XAxis>
				<YAxis dataKey="grade" tickLine={false}>
					<Label value="Quantidade" angle={-90} position='insideLeft' offset={20}/>
				</YAxis>
				<Tooltip content={<CustomTooltip total={total}/>}/>
				{yourGrade ? <ReferenceLine x={yourGrade} isFront stroke="red">
					<Label position="top" offset={50} content={({ viewBox }) => {
						return (
							<foreignObject {...viewBox} width={100}>
								<ReferenceLineLabel message="Você está aqui" margin={-15}/>
							</foreignObject>
						)
					}}></Label>
					<Label position="bottom" value={yourGrade}/>
				</ReferenceLine> : null}

				<ReferenceLine x={averageGrade} isFront stroke="red">
					<Label position="top" offset={50} content={({ viewBox }) => {
						return (
							<foreignObject {...viewBox} width={50}>
								<ReferenceLineLabel message="Média" margin={5}/>
							</foreignObject>
						)
					}}></Label>
					<Label position="bottom" value={keepDecimalCases(averageGrade, 1)}/>
				</ReferenceLine>

			</AreaChart>
		</ResponsiveContainer>
	</div>
}

export default GradeDistributionChart
