import React, { memo, useEffect, useState } from 'react'
import { ArcherContainer, ArcherElement } from 'react-archer'
import { useHistory, useParams } from 'react-router'

import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Popover from '@material-ui/core/Popover'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/styles'

import { SubjectRequirement } from 'types/Subject'

import api from 'API'
import MessagePanel from 'components/MessagePanel'
import RequirementGraphCaption from 'images/requirements_graph_captions.svg'
import { URLParameter, buildURI as buildSubjectURI } from 'pages/SubjectPage'

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
		height: isLink ? '30px' : '40px',
		boxSizing: 'border-box',
		padding: isLink ? '5px' : '10px',
		border: '1px solid grey',
		background: '#346d34',
		color: 'white',
		borderRadius: '25px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: '20px',
		cursor: 'pointer'
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
	})

	const params = useParams<URLParameter>() // get subject parameters
	const handleClick = () => {
		history.push(buildSubjectURI(params.course, params.specialization, code))
	}

	const popoverActive = isDesktop
	const isPopoverOpen = Boolean(anchorEl)

	const popover = <Popover
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
			{isLink ? <Typography variant='caption'> Requisito {strong ? 'forte' : 'fraco'} </Typography> : null}
		</Paper>
	</Popover>

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
	name: string
}
const RequirementsGraph: React.FC<RequirementsGraphProps> = ({ course, specialization, code, name }) => {
	const [predecessors, setPredecessors] = useState<SubjectRequirement[]>([])
	const [successors, setSuccessors] = useState<SubjectRequirement[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(true)

	const noRequirement = !successors.length && !predecessors.length
	const cardHeight = Math.max(predecessors?.length, successors?.length, 1) * 50 + 30 // calculate cardHeight from size of arrays

	useEffect(() => {
		setPredecessors([])
		setSuccessors([])
		setIsLoading(true)

		api.getSubjectRelations(course, specialization, code).then((data) => {
			setPredecessors((data.predecessors && data.predecessors[0]) || []) // for now get only the first set of requirements
			setSuccessors(data.successors || [])
			setIsLoading(false)
		}).catch(err => {
			setIsLoading(false)
			console.error(`ERROR: ${err}`)
		})
	}, [course, specialization, code])

	const mainRelations = successors.map(x => ({
		targetId: x.code,
		targetAnchor: 'left',
		sourceAnchor: 'right',
		style: x.strong ? { strokeWidth: 2.5 } : {}
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
					sourceAnchor: 'right',
					style: req.strong ? { strokeWidth: 2.5 } : {}
				}]}
			/>
			)}
		</Grid>
		<Grid container item direction="column" style={{ height: '100%' }} justify="center" alignItems="center" xs={4}>
			<Box
				code={code}
				name={name}
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

	return <>

		<div style={{ width: '100%', display: noRequirement ? 'none' : 'block' }}>
			<br/>
			<img src={RequirementGraphCaption} style={{ float: 'right' }} height={50} />
		</div>
		<ArcherContainer strokeColor="black" strokeWidth={1}>

			{isLoading ? <Grid container justify='center'><Grid item><CircularProgress/></Grid></Grid>
				: noRequirement
					? <MessagePanel height={200} message="Sem requisitos ou trancamentos"/>
					: content}

		</ArcherContainer>
	</>
}

export default memo(RequirementsGraph)
