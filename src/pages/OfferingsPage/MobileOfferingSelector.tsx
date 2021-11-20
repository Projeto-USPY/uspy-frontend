import React, { useState } from 'react'

import Button from '@material-ui/core/Button'
import Slide from '@material-ui/core/Slide'

import { Offering } from 'types/Offering'

import OfferingsList from 'components/Offerings/OfferingsList'
// import Grid from '@material-ui/core/Grid'

interface PropsType {
    open: boolean
    close: () => void
	selected: Offering | null
	offerings: Offering[] | null
	setSelected: (o: Offering) => void
}

const MobileOfferingSelector: React.FC<PropsType> = ({ open, close, offerings, selected, setSelected }) => {
	const [isClosing, setIsClosing] = useState<boolean>(false)
	const handleClose = () => {
		setIsClosing(true)
		setTimeout(() => close(), 500)
	}
	const handleSelect = (o: Offering) => {
		setSelected(o)
		handleClose()
	}
	return <div >
		<div className='full-width  teste'>
			<Slide direction='down' in={open && !isClosing} mountOnEnter unmountOnExit timeout={500}>
				<div>
					<OfferingsList list={offerings} selected={selected} setSelected={handleSelect} />
				</div>
			</Slide>
		</div>
		<div className='full-width teste2'>
			<Slide direction='up' in={open && !isClosing} mountOnEnter unmountOnExit>
				<div className='full-width full-height' style={{ backgroundColor: 'white' }}>
					<Button
						fullWidth
						color='secondary'
						size='large'
						onClick={handleClose}
						variant='outlined'
					>
						CANCELAR
					</Button>
				</div>
			</Slide>
		</div>
	</div>
}

export default MobileOfferingSelector
