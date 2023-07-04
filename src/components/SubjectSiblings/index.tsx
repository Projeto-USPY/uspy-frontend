import React, { memo, useEffect, useState } from 'react'
import api from 'API'
import { SubjectSibling } from 'types/Subject'
import { Button, CircularProgress, Grid, Tooltip } from '@material-ui/core'
import { getInitials } from 'utils'
import { buildURI as buildSubjectPageURI } from 'pages/SubjectPage'

import { useHistory } from 'react-router'

interface SubjectSiblingsProps {
	code: string
	course: string
	specialization: string
}

interface SiblingProps {
	code: string
	name: string
	optional: boolean
	course: string
	specialization: string
}

const Sibling = ({
	code,
	name,
	optional,
	course,
	specialization,
}: SiblingProps) => {
	const history = useHistory()

	return (
		<Tooltip
			arrow
			title={`${name}${optional ? ' (optativa)' : ''}`}
			placement="top">
			<Button
				fullWidth
				color={optional ? 'primary' : 'secondary'}
				size="medium"
				variant="outlined"
				onClick={() => {
					history.push(
						buildSubjectPageURI(course, specialization, code),
					)
				}}>
				{name.length > 50 ? getInitials(name) : name}
			</Button>
		</Tooltip>
	)
}

const SubjectSiblings: React.FC<SubjectSiblingsProps> = ({
	code,
	course,
	specialization,
}) => {
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [siblings, setSiblings] = useState<SubjectSibling[]>([])

	useEffect(() => {
		api.getSubjectSiblings(code, course, specialization)
			.then(res => {
				setSiblings(res.sort((a, b) => a.name.length - b.name.length))
				setIsLoading(false)
			})
			.catch(err => {
				console.log(err)
			})
	}, [code, course, specialization])

	if (isLoading) {
		return (
			<Grid container justify="center">
				<Grid item>
					<CircularProgress />
				</Grid>
			</Grid>
		)
	}

	return (
		<Grid container spacing={2} alignItems="flex-start">
			{siblings.map(sibling => (
				<Grid item key={sibling.code}>
					<Sibling
						code={sibling.code}
						name={sibling.name}
						optional={sibling.optional}
						course={course}
						specialization={specialization}
					/>
				</Grid>
			))}
			<Grid item></Grid>{' '}
		</Grid>
	)
}

export default memo(SubjectSiblings)
