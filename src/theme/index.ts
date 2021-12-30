import { createMuiTheme } from '@material-ui/core/styles'

// To find out light and dark variations of colors: https://material-ui.com/pt/customization/color/#picking-colors
const primaryColor = '#68417f'
const secondaryColor = '#415c77'
const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#866798',
			main: primaryColor,
			dark: '#482d58',
			contrastText: '#fff'
		},
		secondary: {
			light: '#677c92',
			main: secondaryColor,
			dark: '#2d4053',
			contrastText: '#000'
		}
	},
	overrides: {
		MuiCardHeader: {
			action: {
				marginTop: 0,
				marginRight: 0
			}
		},
		MuiCollapse: {
			/* Used for notistack-snackbar centering on mobile. */
			wrapper: {
				justifyContent: 'center',
				alignItems: 'center'
			}
		},
		MuiContainer: {
			root: {
				paddingLeft: 8,
				paddingRight: 8
			}
		},
		MuiTableCell: {
			head: {
				fontSize: '1.125rem'
			},
			root: {
				fontSize: '1rem'
			}
		}
	}

})

export default theme
