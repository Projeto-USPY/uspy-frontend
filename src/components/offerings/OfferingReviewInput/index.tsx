import React from 'react'

import './style.css'

interface PropsType {
	content: string
	onChange: (s: string) => void
	limit: number
	rows: number
	placeholder: string
	disabled: boolean
}

const OfferingReviewInput: React.FC<PropsType> = ({
	content,
	limit,
	rows,
	onChange,
	placeholder,
	disabled,
}) => {
	const ref1 = React.useRef(null)
	const ref2 = React.useRef(null)

	const style = {
		height: `${1.1876 * rows}em`,
	}

	const update = (evt: React.SyntheticEvent) => {
		onChange(ref1.current.innerText)
		ref2.current.scrollTop = ref1.current.scrollTop
	}

	return (
		<div
			className="offering-review-input-wrapper"
			style={disabled ? { color: 'rgba(0, 0, 0, 0.38)' } : {}}
		>
			{React.useMemo(
				() => (
					<div
						ref={ref1}
						style={style}
						contentEditable={!disabled}
						suppressContentEditableWarning
						onScroll={update}
						onInput={update}
					>
						{content}
					</div>
				),
				[disabled, disabled ? content : '', rows],
			)}
			<div ref={ref2} style={style} className="highlight-mirror">
				{content.substr(0, limit)}
				<span>{content.substr(limit)}</span>
			</div>
			<div className="placeholder">
				{content.length ? '' : placeholder}
			</div>
			<span style={{ display: 'block', marginTop: 12 }}>
				{content.length > limit ? (
					<span style={{ color: 'red' }}>{content.length}</span>
				) : (
					content.length
				)}
				/{limit}
			</span>
		</div>
	)
}

export default OfferingReviewInput
