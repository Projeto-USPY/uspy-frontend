import React from 'react'

import Chip from '@material-ui/core/Chip'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import { Offering } from 'types/Offering'

import OfferingApprovalDonut from 'components/offerings/OfferingApprovalDonut'

interface PropsType {
	list: Offering[]
	selected: Offering | null
	setSelected: (o: Offering) => any
	maxWidth?: number | string
	noStatsMessage?: string
	secondary?: string
	showQuestionMark?: boolean
}

function createYearsList(offering: Offering): React.ReactNode {
	return offering.years
		.sort((a: string, b: string) => {
			const aa = parseInt(a)
			const bb = parseInt(b)
			return aa === bb ? 0 : a > b ? -1 : 1
		})
		.slice(0, 5)
		.map((year) => (
			<Chip
				component="span"
				size="small"
				variant="outlined"
				color="secondary"
				key={year}
				label={year}
			/>
		))
}

const OfferingsList: React.FC<PropsType> = ({
	list,
	selected,
	setSelected,
	maxWidth,
	noStatsMessage,
	secondary,
	showQuestionMark = false,
}: PropsType) => {
	return (
		<List style={{ maxWidth, backgroundColor: 'white' }}>
			{list.map((offering) => (
				<ListItem
					button
					key={offering.code}
					selected={offering.code === selected?.code}
					color="secondary"
					onClick={() => setSelected(offering)}
				>
					<ListItemText
						primary={offering.professor}
						secondary={
							<>
								{!secondary
									? createYearsList(offering)
									: secondary}
							</>
						}
					/>
					<OfferingApprovalDonut
						approval={offering.approval}
						neutral={offering.neutral}
						disapproval={offering.disapproval}
						noStatsMessage={noStatsMessage}
						showQuestionMark={showQuestionMark}
					/>
				</ListItem>
			))}
		</List>
	)
}

export default OfferingsList
