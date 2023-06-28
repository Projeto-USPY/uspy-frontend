import React, { useEffect, useRef } from 'react'

interface props { }

const LoadingEllipsis: React.FC<props> = () => {
    const ref = useRef(null);

    useEffect(() => {
        setInterval(() => {
            if (ref.current.innerText === '...') {
                ref.current.innerText = ''
            } else {
                ref.current.innerText += '.'
            }
        }, 1000)
    })

    return <span ref={ref} />
}

export default LoadingEllipsis