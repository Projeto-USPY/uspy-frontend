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
	}

})

export default theme
