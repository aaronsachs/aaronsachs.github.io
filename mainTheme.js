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
		].join(','), 
		body1: {
			fontSize: "1.8rem", 
			lineHeight: "3rem"
		}, 
		body2: {
			fontSize: "1.5rem", 
			lineHeight: "2.5rem"
		}
	}
})

export default mainTheme;
