import React from 'react'

import Paper from '@material-ui/core/Paper'

import {
	ResponsiveContainer,
	XAxis,
	YAxis,
	BarChart,
	Bar, Label, ReferenceLine,
	Tooltip
} from 'recharts'

interface ReferenceLineLabelProps {
	message: string
	margin?: number
}

const ReferenceLineLabel: React.FC<ReferenceLineLabelProps> = ({ message, margin = 0 }) => {
	return <div style={{ height: '18px', backgroundColor: 'orange', color: 'white', marginTop: `${margin}px`, whiteSpace: 'nowrap', fontSize: '11pt' }}>
		<p>{message}</p>
	</div>
}

const CustomTooltip = ({ active, payload, label, total }: any) => {
	return active ? <Paper elevation={2} style={{ padding: '1rem' }}>
		Nota {(label - 1).toFixed(0) + '..' + (label + 1).toFixed(0)}: {payload ? (100 * payload[0].value / total).toFixed(1) : null}%
	</Paper> : null
}

interface GradeDistributionChartProps {
	grades: any
	averageGrade: number
	yourGrade: number | null
}

const GradeDistributionChart: React.FC<GradeDistributionChartProps> = ({ grades, averageGrade, yourGrade }) => {
	const cnt = [0, 0, 0, 0, 0] // [0, 2), [2, 4), [4, 6), [6, 8), [8, 10]
	for (let i = 0.0; i <= 10; i += 0.1) {
		if (grades[i.toFixed(1)] === undefined) {
			grades[i.toFixed(1)] = 0
		}
		cnt[Math.floor(i / 2) - (i === 10 ? 1 : 0)] += grades[i.toFixed(1)]
	}
	const data = cnt.reduce((cur, val, idx) => [...cur, { x: (idx * 2 + 1), grade: val }], [])
	data.sort((x, y) => x.x - y.x)
	const total = cnt.reduce((cur, val) => (cur + val), 0)

	return <div style={{ height: '320px', width: '100%', marginLeft: '-20px', paddingTop: '20px', overflow: 'visible' }}>
		<ResponsiveContainer>
			<BarChart data={data}>
				<Bar barSize={200} dataKey="grade" fill="#68417FCC" />
				<XAxis dataKey="x" tickLine={false} ticks={[0, 2, 4, 6, 8, 10]} type="number" domain={[0, 10]}>
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
					<Label position="bottom" value={averageGrade.toFixed(1)}/>
				</ReferenceLine>

			</BarChart>
		</ResponsiveContainer>
	</div>
}

export default GradeDistributionChart
