import React, { memo, useEffect, useState } from 'react'
import { SubjectInfo } from 'types/Subject'
import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'
import { ArcherContainer, ArcherElement } from 'react-archer'
import { getSubjectRelations } from 'API'

interface BoxProps {
	name: string
	relations?: any
}
const Box: React.FC<BoxProps> = ({ name, relations }) => {
	const style = {
		height: '30px',
		boxSizing: 'border-box',
		padding: '5px',
		border: '1px solid grey',
		borderRadius: '25px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: '20px',
		width: '60%'
	}
	return <ArcherElement
		id={name}
		relations={relations}
	>
		<div style={style}>
			{name}
		</div>
	</ArcherElement>
}

interface RequirementsGraphProps {
	course: string
	code: string
}
const RequirementsGraph: React.FC<RequirementsGraphProps> = ({ course, code }) => {
	const [predecessors, setPredecessors] = useState<SubjectInfo[]>([])
	const [successors, setSuccessors] = useState<SubjectInfo[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const cardHeight = Math.max(predecessors?.length, successors?.length, 1) * 50 + 30 // calculate cardHeight from size of arrays

	useEffect(() => {
		getSubjectRelations(course, code).then((data) => {
			setPredecessors(data.predecessors || [])
			setSuccessors(data.successors || [])
			setIsLoading(false)
		}).catch(err => {
			setIsLoading(false)
			console.log(`ERROR: ${err}`)
		})
	}, [])
	const mainRelations = successors.map(x => ({
		targetId: x.code,
		targetAnchor: 'left',
		sourceAnchor: 'right'
	}))
	return <ArcherContainer strokeColor="black">
		<Grid container spacing={3} alignItems="stretch" style={{ height: `${cardHeight}px` }} >
			{isLoading ? <Grid container justify='center'><Grid item><CircularProgress/></Grid></Grid>
				: <>
					<Grid container item direction="column" style={{ height: '100%' }} justify="center" alignItems="center" xs={4}>
						{predecessors.map(({ code: c }) => <Box
							key={c}
							name={c}
							relations={[{
								targetId: code,
								targetAnchor: 'left',
								sourceAnchor: 'right'
							}]}
						/>
						)}
					</Grid>
					<Grid container item direction="column" style={{ height: '100%' }} justify="center" alignItems="center" xs={4}>
						<Box
							name={code}
							relations={mainRelations}
						/>
					</Grid>
					<Grid container item direction="column" style={{ height: '100%' }} justify="center" alignItems="center" xs={4}>
						{successors.map(({ code }) =>
							<Box
								key={code}
								name={code}
							/>
						)}
					</Grid>
				</>
			}
		</Grid>

	</ArcherContainer>
}

export default memo(RequirementsGraph)
