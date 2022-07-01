import React from 'react'

import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'

interface PropsType {
    options: any[]
    onChange: (o: any) => void
    getOptionLabel: (o: any) => string
    label: string
}

const SearchSelector: React.FC<PropsType> = ({ options, onChange, getOptionLabel, label }) => {
	return <Autocomplete
		autoHighlight
		clearText='Limpar'
		clearOnEscape
		className="coursefield"
		freeSolo
		openOnFocus
		size='small'

		options={options}
		getOptionLabel={getOptionLabel}

		onChange={(evt, value) => onChange(value)}

		renderInput={(params) => <TextField
			{...params}
			color='secondary'
			label={label}
			variant="outlined"
			margin="normal"
			required={true}
		/>}
	/>
}

export default SearchSelector
