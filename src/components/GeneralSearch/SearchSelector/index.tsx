import React from 'react'

import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'

interface PropsType {
	options: any[]
	onChange: (o: any) => void
	getOptionLabel: (o: any) => string
	value: { code: string; name: string }
	label: string
	hidden: boolean
}

const SearchSelector: React.FC<PropsType> = ({
	options,
	onChange,
	getOptionLabel,
	value,
	label,
	hidden,
}) => {
	return (
		<Autocomplete
			autoHighlight
			clearText="Limpar"
			clearOnEscape
			className="coursefield"
			freeSolo
			openOnFocus
			size="small"
			style={{
				display: hidden ? 'none' : 'block',
			}}
			value={value}
			options={options}
			getOptionLabel={getOptionLabel}
			onChange={(_evt, value) => onChange(value)}
			renderInput={params => (
				<TextField
					{...params}
					color="secondary"
					label={label}
					variant="outlined"
					required={true}
				/>
			)}
		/>
	)
}

export default SearchSelector
