import React, { useContext, useMemo } from 'react'

import './style.css'
import OfferingContext from 'contexts/OfferingContext'

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

	const { professor, course, specialization, code } =
		useContext(OfferingContext)


	const style = {
		height: `${1.1876 * rows}em`,
	}

	const update = (evt: React.SyntheticEvent) => {
		onChange(ref1.current.innerText)
		ref2.current.scrollTop = ref1.current.scrollTop
	}

	const [reRenderEditor, setReRenderEditor] = React.useState(0)
	React.useEffect(() => {
		setReRenderEditor(reRenderEditor + 1)
	}, [disabled, course, specialization, code, professor])

	const editorDiv = useMemo(() => {
		return <div
			ref={ref1}
			style={style}
			key={reRenderEditor}
			contentEditable={!disabled}
			suppressContentEditableWarning
			onScroll={update}
			onInput={update}
		>
			{content}
		</div>
	}, [reRenderEditor])

	return (
		<div
			className="offering-review-input-wrapper"
			style={disabled ? { color: 'rgba(0, 0, 0, 0.38)' } : {}}
		>
			{editorDiv}
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
