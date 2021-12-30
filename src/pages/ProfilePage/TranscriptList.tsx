import React from 'react'

interface PropsType {
    semester: number
}

const TranscriptList: React.FC<PropsType> = ({ semester }) => {
	return <div>
		{semester}
	</div>
}

export default TranscriptList
