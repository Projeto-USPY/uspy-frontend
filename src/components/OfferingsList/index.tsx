import React from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import { Offering } from 'types/Offering'

import OfferingApprovalDonut from 'components/OfferingApprovalDonut'

interface PropsType {
    list: Offering[]
	selected: string
	setSelected: (itemID: string) => any
	maxWidth?: number | string
}

function createYearsList (offering: Offering): string {
	return offering.years
		.sort((a: string, b: string) => {
			const aa = parseInt(a)
			const bb = parseInt(b)
			return aa === bb ? 0 : a > b ? -1 : 1
		})
		.slice(0, 5).join(', ')
}

const OfferingsList: React.FC<PropsType> = ({ list, selected, setSelected, maxWidth }: PropsType) => {
	return <List style={{ maxWidth }}>
		{list.map(offering => {
			return <ListItem button key={offering.code} selected={offering.code === selected} onClick={() => setSelected(offering.code)}>
				<ListItemText primary={offering.professor} secondary={createYearsList(offering)}/>
				<OfferingApprovalDonut approval={offering.approval} neutral={offering.neutral} disapproval={offering.disapproval}/>
			</ListItem>
		})}
	</List>
}

export default OfferingsList
