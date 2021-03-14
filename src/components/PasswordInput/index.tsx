import React, { useState } from 'react'

import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

const PasswordInput = (props: any) => {
	const [visible, setVisible] = useState<boolean>(false)

	const handleClickShowPassword = () => {
		setVisible(!visible)
	}

	const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
	}

	return <TextField
		{...props}
		type={visible ? 'text' : 'password'}
		InputProps={{
			endAdornment: <InputAdornment position="end">
				<IconButton
					aria-label="toggle password visibility"
					onClick={handleClickShowPassword}
					onMouseDown={handleMouseDownPassword}
					disableFocusRipple
					tabIndex={-1}
				>
					{visible ? <Visibility /> : <VisibilityOff />}
				</IconButton>
			</InputAdornment>
		}}
	/>
}

export default PasswordInput
