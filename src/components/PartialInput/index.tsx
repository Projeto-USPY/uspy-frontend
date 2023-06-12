import React, { useState } from 'react'

import InputBase from '@material-ui/core/InputBase'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
	input: {
		fontFamily: 'Courier',
		[theme.breakpoints.up('sm')]: {
			fontSize: '18pt',
			margin: theme.spacing(1)
		},
		[theme.breakpoints.down('sm')]: {
			fontSize: '12pt',
			margin: '2px'
		}

	}
}))

interface PartialInputProps {
	id: number
	value: string
	handlePaste: Function
	handleChange: Function
}
const PartialInput: React.FC<PartialInputProps> = ({ id, value, handlePaste, handleChange }) => {
	const classes = useStyles()
	const [focused, setFocused] = useState(false)

	const onChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		let str = evt.target.value
		str = str.replace(/-/g, '')
		if (/^\w*$/.test(str)) {
			console.log(evt.nativeEvent.inputType)
			if (evt.nativeEvent.inputType === 'insertFromPaste') { // allow to paste input
				handlePaste(id, str)
			} else {
				if (str.length <= 4) handleChange(id, str.toUpperCase())
				if (str.length === 4) {
					const next = document.querySelector(`#auth-code-${id + 1}`)
					if (next) {
						next.focus()
					}
				}
			}
		}
	}

	const inputProps = {
		size: '4',
		style: {
			backgroundColor: '#F7F7F7',
			borderRadius: '2px 2px',
			boxShadow: focused ? 'inset 0 0 2px blue' : 'inset 0 0 2px #000000',
			padding: '5pt'
		}
	}
	return <InputBase
		type='text'
		className={classes.input}
		onFocus={(evt: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			evt.target.select()
			setFocused(true)
		}}
		onBlur={() => setFocused(false)}
		inputProps= {inputProps}
		value={value}
		id={`auth-code-${id}`}
		onChange={evt => onChange(evt)}

	/>
}

export default PartialInput
