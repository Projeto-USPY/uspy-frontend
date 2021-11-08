import Slide from '@material-ui/core/Slide'

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
