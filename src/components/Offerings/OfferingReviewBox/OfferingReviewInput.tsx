import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const OfferingReviewInput = withStyles(theme => ({
	root: {
		border: '1px solid #e2e2e1',
		overflow: 'hidden',
		borderRadius: 10,
		backgroundColor: '#fcfcfb',
		transition: theme.transitions.create(['border-color', 'box-shadow']),
		padding: '1rem',
		boxSizing: 'border-box',
		'&:hover': {
			backgroundColor: '#fff'
		}
	}
}))(TextField)

export default OfferingReviewInput
