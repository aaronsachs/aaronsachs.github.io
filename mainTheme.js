import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';


const mainTheme = createMuiTheme({
	palette: {
		primary: {
			main: blue[200]
		}, 
		secondary: {
			main: blue["A200"]
		}
	}, 
	typography: {
		fontFamily: [
		  "monospace"
		].join(',')
	}
})

export default mainTheme;