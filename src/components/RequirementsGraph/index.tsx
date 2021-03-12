import React, { memo, useEffect, useState } from 'react'
import { SubjectRequirement } from 'types/Subject'
import CircularProgress from '@material-ui/core/CircularProgress'
import Popover from '@material-ui/core/Popover'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { ArcherContainer, ArcherElement } from 'react-archer'
import { getSubjectRelations } from 'API'
import MessagePanel from 'components/MessagePanel'

import { useTheme } from '@material-ui/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useHistory } from 'react-router'

interface BoxProps {
	code: string
	isLink: boolean
	name?: string
	strong?: boolean
	relations?: any
}
const Box: React.FC<BoxProps> = ({ code, name, isLink, strong, relations }) => {
	// Style stuff
	const theme = useTheme()
	const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))
	const history = useHistory()

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
		width: '60%',
		cursor: 'pointer'
	}

	// Popover (tooltip) stuff
	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
	const handlePopoverOpen = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
		setAnchorEl(event.currentTarget)
	}
	const handlePopoverClose = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
		setAnchorEl(null)
	}

	const handleClick = () => {
		const path = history.location.pathname
		const lastSlash = path.lastIndexOf('/')
		history.push(path.substr(0, lastSlash) + '/' + code)
	}

	const popoverActive = isLink && isDesktop
	const isPopoverOpen = Boolean(anchorEl)

	const popover = isPopoverOpen ? <Popover
		anchorEl={anchorEl}
		open={isPopoverOpen}
		style={{
			pointerEvents: 'none'
		}}
		anchorOrigin={{
			vertical: 'bottom',
			horizontal: 'left'
		}}
		transformOrigin={{
			vertical: 'top',
			horizontal: 'left'
		}}
		onClose={handlePopoverClose}
		disableRestoreFocus
		disableScrollLock
	>
		<Paper elevation={2} className="prompt tooltip-card">
			<Typography color='secondary'><strong> {code}</strong></Typography>
			<Typography variant='body2'>{name}</Typography>
			<Typography variant='caption'> Requisito {strong ? 'forte' : 'fraco'} </Typography>
		</Paper>
	</Popover> : null

	return <>
		<ArcherElement
			id={code}
			relations={relations}
		>
			<div
				style={style}
				onMouseEnter={popoverActive ? handlePopoverOpen : null}
				onMouseLeave={popoverActive ? handlePopoverClose : null}
				onClick={handleClick}
			>
				{code}
			</div>
		</ArcherElement>
		{popoverActive ? popover : null}
	</>
}

interface RequirementsGraphProps {
	course: string
	specialization: string
	code: string
}
const RequirementsGraph: React.FC<RequirementsGraphProps> = ({ course, specialization, code }) => {
	const [predecessors, setPredecessors] = useState<SubjectRequirement[]>([])
	const [successors, setSuccessors] = useState<SubjectRequirement[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(true)

	const noRequirement = !successors.length && !predecessors.length
	const cardHeight = Math.max(predecessors?.length, successors?.length, 1) * 50 + 30 // calculate cardHeight from size of arrays

	useEffect(() => {
		setPredecessors([])
		setSuccessors([])
		setIsLoading(true)

		getSubjectRelations(course, specialization, code).then((data) => {
			setPredecessors((data.predecessors && data.predecessors[0]) || []) // for now get only the first set of requirements
			setSuccessors(data.successors || [])
			setIsLoading(false)
		}).catch(err => {
			setIsLoading(false)
			console.log(`ERROR: ${err}`)
		})
	}, [course, specialization, code])

	const mainRelations = successors.map(x => ({
		targetId: x.code,
		targetAnchor: 'left',
		sourceAnchor: 'right'
	}))

	const content = <Grid container spacing={3} alignItems="stretch" style={{ height: `${cardHeight}px` }} >
		<Grid container item direction="column" style={{ height: '100%' }} justify="center" alignItems="center" xs={4}>
			{predecessors.map(req => <Box
				key={req.code}
				code={req.code}
				name={req.name}
				strong={req.strong}
				isLink
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
				code={code}
				isLink={false}
				relations={mainRelations}
			/>
		</Grid>
		<Grid container item direction="column" style={{ height: '100%' }} justify="center" alignItems="center" xs={4}>
			{successors.map(req =>
				<Box
					key={req.code}
					code={req.code}
					name={req.name}
					strong={req.strong}
					isLink
				/>
			)}
		</Grid>
	</Grid>

	return <ArcherContainer strokeColor="black">
		{isLoading ? <Grid container justify='center'><Grid item><CircularProgress/></Grid></Grid>
			: noRequirement
				? <MessagePanel height={200} message="Sem requerimentos ou trancamentos"/>
				: content}

	</ArcherContainer>
}

export default memo(RequirementsGraph)
