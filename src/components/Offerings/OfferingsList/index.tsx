import React from 'react'

import Chip from '@material-ui/core/Chip'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import { Offering } from 'types/Offering'

import OfferingApprovalDonut from 'components/Offerings/OfferingApprovalDonut'

interface PropsType {
    list: Offering[]
	selected: Offering | null
	setSelected: (o: Offering) => any
	maxWidth?: number | string
}

function createYearsList (offering: Offering): React.ReactNode {
	return offering.years
		.sort((a: string, b: string) => {
			const aa = parseInt(a)
			const bb = parseInt(b)
			return aa === bb ? 0 : a > b ? -1 : 1
		})
		.slice(0, 5)
		.map(year => <Chip component='span' size='small' variant='outlined' color='secondary' key={year} label={year}/>)
}

const OfferingsList: React.FC<PropsType> = ({ list, selected, setSelected, maxWidth }: PropsType) => {
	return <List style={{ maxWidth, backgroundColor: 'white' }} >
		{list.map(offering => (
			<ListItem button key={offering.code} selected={offering.code === selected?.code} color='secondary' onClick={() => setSelected(offering)}>
				<ListItemText primary={offering.professor} secondary={<>{createYearsList(offering)}</>}/>
				<OfferingApprovalDonut approval={offering.approval} neutral={offering.neutral} disapproval={offering.disapproval}/>
			</ListItem>
		))}
	</List>
}

export default OfferingsList
