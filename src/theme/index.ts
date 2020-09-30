import { createMuiTheme } from '@material-ui/core/styles'

const primaryColor = '#68417f'
const secondaryColor = '#b2d3e1'
const theme = createMuiTheme({
	palette: {
		primary: {
			main: primaryColor,
			contrastText: '#fff'
		},
		secondary: {
			main: secondaryColor,
			contrastText: '#000'
		}
	}

})

export default theme
