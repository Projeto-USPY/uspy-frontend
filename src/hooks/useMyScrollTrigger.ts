import * as React from 'react'

function getTrigger (store: React.MutableRefObject<any>, direction: 'up' | 'down') {
	const previous = store.current

	store.current = window.pageYOffset

	if (previous !== undefined) {
		if (direction === 'down' && store.current < previous) {
			return false
		} else if (direction === 'up' && store.current > previous) {
			return false
		}
	}

	return direction === 'down'
		? store.current > 100
		: store.current < document.body.scrollHeight - document.body.clientHeight - 50
}

export default function useMyScrollTrigger (direction: 'up' | 'down') {
	const store = React.useRef()
	const [trigger, setTrigger] = React.useState(() => getTrigger(store, direction))

	React.useEffect(() => {
		const handleScroll = () => {
			setTrigger(getTrigger(store, direction))
		}

		handleScroll() // Re-evaluate trigger when dependencies change
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
		// See Option 3. https://github.com/facebook/react/issues/14476#issuecomment-471199055
	}, [getTrigger])

	return trigger
}
