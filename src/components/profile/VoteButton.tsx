import React, { useEffect, useState } from 'react'

import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import ThumbDownIcon from '@material-ui/icons/ThumbDown'
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined'
import Skeleton from '@material-ui/lab/Skeleton'

import { Record } from 'types/Record'
import { SubjectReview } from 'types/Subject'

import api from 'API'

interface VoteButtonPropsType {
	type: 'up' | 'down'
	filled: boolean
	onClick: () => void
	color?: 'primary' | 'secondary'
	size?: 'default' | 'small' | 'large'
}

const ICONS = [
	[ThumbDownOutlinedIcon, ThumbDownIcon],
	[ThumbUpOutlinedIcon, ThumbUpIcon]
]

export const VoteButton: React.FC<VoteButtonPropsType> = ({ type, filled, onClick, color = 'primary', size = 'small' }) => {
	const Icon = ICONS[+(type === 'up')][+filled]

	return <Tooltip title={`${type === 'up' ? 'G' : 'Não g'}ostei dessa disciplina`} placement='top'>
		<IconButton onClick={onClick}>
			<Icon color={color} fontSize={size}/>
		</IconButton>
	</Tooltip>
}

interface VoteButtonGroupPropsType {
	record: Record
	color?: 'primary' | 'secondary'
	size?: 'default' | 'small' | 'large'
}

export const VoteButtonGroup: React.FC<VoteButtonGroupPropsType> = ({ record, color = 'primary', size = 'small' }) => {
	const [subjectReview, setSubjectReview] = useState<SubjectReview | null>(null)
	const [pending, setPending] = useState<boolean>(true)

	const { course, specialization, code } = record

	useEffect(() => {
		api.getSubjectReview(course, specialization, code).then((rev) => {
			setSubjectReview(rev)
			setPending(false)
		}).catch(err => {
			if (err.code !== 'not_found') { // either user is not logged in or user
				// was not enrolled in subject, so this should never happen
				console.error(err)
			}
			setPending(false)
		})
	}, [record])

	const handleReviewSubject = (rev: 'up' | 'down') => {
		const review: SubjectReview = {
			categories: {
				worth_it: rev === 'up'
			}
		}
		api.makeSubjectReview(course, specialization, code, review)
		setSubjectReview(review)
	}

	if (pending) {
		return <Skeleton variant='text' width={50}/>
	}

	return <>
		{['down', 'up'].map(type => <VoteButton
			type={type as 'up' | 'down'}
			key={type}
			color={color}
			size={size}
			filled={subjectReview?.categories.worth_it === (type === 'up')}
			onClick={() => handleReviewSubject(type as 'up' | 'down')}
		/>)}
	</>
}
