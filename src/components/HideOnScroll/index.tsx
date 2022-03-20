import React, { useEffect, useState } from 'react'

import Slide from '@material-ui/core/Slide'

import useMyScrollTrigger from 'hooks/useMyScrollTrigger'

type AppearScenario = 'bottom' | 'top' | 'scroll-up' | 'scroll-down'
interface PropsType {
	direction: 'up' | 'down'
	appearsWhen: AppearScenario[]
}

const HideOnScroll: React.FC<PropsType> = ({
	direction,
	appearsWhen,
	children
}) => {
	const upTrigger = useMyScrollTrigger('up')
	const downTrigger = useMyScrollTrigger('down')
	const [isBottom, setIsBottom] = useState<boolean>(false)
	const [isTop, setIsTop] = useState<boolean>(true)
	useEffect(() => {
		const handleScroll = () => {
			const at = window.pageYOffset

			if (at > document.body.scrollHeight - document.body.clientHeight - 50) {
				setIsBottom(true)
			} else {
				setIsBottom(false)
			}

			if (at < 50) {
				setIsTop(true)
			} else {
				setIsTop(false)
			}
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	})

	const showing = (appearsWhen.includes('top') && isTop) ||
		(appearsWhen.includes('bottom') && isBottom) ||
		(appearsWhen.includes('scroll-up') && upTrigger) ||
		(appearsWhen.includes('scroll-down') && downTrigger)

	return <Slide appear={false} direction={direction} in={showing}>
		{children}
	</Slide>
}

export default HideOnScroll
