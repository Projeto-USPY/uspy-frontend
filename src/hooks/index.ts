import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

import Slide from '@material-ui/core/Slide'

import { uspyAlert } from 'actions'
import { useSnackbar } from 'notistack'

export const useMySnackbar = () => {
	const { enqueueSnackbar } = useSnackbar()

	return function (message: string, type: 'success' | 'info' | 'error') {
		enqueueSnackbar(message, {
			variant: type,
			anchorOrigin: {
				vertical: 'bottom',
				horizontal: 'center'
			},
			autoHideDuration: 4000,
			TransitionComponent: Slide
		})
	}
}

export const useQueryParam = () => {
	const { search } = useLocation()

	return useMemo(() => new URLSearchParams(search), [search])
}

export const useErrorDialog = () => {
	const dispatch = useDispatch()

	return function (message: string, title?: string) {
		dispatch(uspyAlert(message, title))
	}
}
