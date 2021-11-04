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

const OfferingsList: React.FC<PropsType> = ({ list, selected, setSelected, maxWidth }: PropsType) => {
	return <List style={{ maxWidth }}>
		{list.map(offering => {
			return <ListItem button key={offering.code} selected={offering.code === selected} onClick={() => setSelected(offering.code)}>
				<ListItemText primary={offering.professor}/>
				<OfferingApprovalDonut approval={offering.approval} neutral={offering.neutral} disapproval={offering.disapproval}/>
			</ListItem>
		})}
	</List>
}

export default OfferingsList
