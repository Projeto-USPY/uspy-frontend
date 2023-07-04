import React, { useEffect, useRef } from 'react'

interface LoadingEllipsisProps {
	interval?: number
}
const LoadingEllipsis = ({ interval = 1000 }: LoadingEllipsisProps) => {
	const ref = useRef(null)

	useEffect(() => {
		const intervalID = setInterval(() => {
			if (ref.current == null) return
			if (ref.current.innerText === '...') {
				ref.current.innerText = ''
			} else {
				ref.current.innerText += '.'
			}
		}, interval)

		return () => {
			clearInterval(intervalID)
		}
	})

	return <span ref={ref} />
}

export default LoadingEllipsis
