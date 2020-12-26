import React, { ReactElement, useState } from 'react'
import Link from '@material-ui/core/Link'

interface Props {
	Child: ReactElement
	childrenProps: any
	text: string
	maxCharacters: number
}

const CollapsibleText: React.FC<Props> = ({ Child, childrenProps, text, maxCharacters }) => {
	const [collapsed, setCollapsed] = useState<boolean>(true)

	return <>
		<Child {...childrenProps}>
			{collapsed ? text.substr(0, maxCharacters) + '...' : text}

			<Link variant='caption' color='secondary' style={{ cursor: 'pointer' }} onClick={() => setCollapsed(!collapsed)}> {collapsed ? 'Ver mais' : 'Ver menos'}</Link>
		</Child>

	</>
}

export default CollapsibleText
