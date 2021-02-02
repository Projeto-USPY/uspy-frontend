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

function buildRandomData () {
	const data = []
	for (let i = 0.0; i <= 10; i += 0.5) {
		data.push({
			x: i,
			grade: (Math.random() * 50)
		})
	}
	return data
}

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

const CustomTooltip = ({ active, payload, label }: any) => {
	return active ? <Paper elevation={2} style={{ padding: '1rem' }}>
		Nota {label}: {payload ? keepDecimalCases(payload[0].value, 1) : null}%
	</Paper> : null
}

const GradeDistributionChart = () => {
	const data = buildRandomData()

	const yourGrade = 5.5
	const average = 4.6

	return <div style={{ height: '320px', width: '100%', marginLeft: '-20px', paddingTop: '20px' }}>
		<ResponsiveContainer>
			<AreaChart data={data}>
				<Area type="monotone" dataKey="grade" fill="#82ca9d" activeDot={{ r: 2 }}/>
				<XAxis dataKey="x" tickLine={false} tickCount={5} type="number" domain={[0, 10]}>
					<Label value="Notas" position="insideBottom" offset={-5}/>
				</XAxis>
				<YAxis dataKey="grade" tickLine={false}>
					<Label value="Frequência" angle={-90} position='insideLeft' offset={20}/>
				</YAxis>
				<Tooltip content={<CustomTooltip/>}/>
				<ReferenceLine x={yourGrade} isFront stroke="red">
					<Label position="top" offset={50} content={({ value, viewBox }) => {
						return (
							<foreignObject {...viewBox} width={100}>
								<ReferenceLineLabel message="Você está aqui" margin={-15}/>
							</foreignObject>
						)
					}}></Label>
					<Label position="bottom" value={yourGrade}/>
				</ReferenceLine>

				<ReferenceLine x={average} isFront stroke="red">
					<Label position="top" offset={50} content={({ value, viewBox }) => {
						return (
							<foreignObject {...viewBox} width={50}>
								<ReferenceLineLabel message="Média" margin={5}/>
							</foreignObject>
						)
					}}></Label>
					<Label position="bottom" value={average}/>
				</ReferenceLine>

			</AreaChart>
		</ResponsiveContainer>
	</div>
}

export default GradeDistributionChart
