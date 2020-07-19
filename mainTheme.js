import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const defaultTheme = createMuiTheme();

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
			lineHeight: "3rem", 
			[defaultTheme.breakpoints.down('sm')]: {
				fontSize: "1.3rem", 
				lineHeight: "3rem"
			}, 
			[defaultTheme.breakpoints.down('xs')]: {
				fontSize: "0.9rem", 
				lineHeight: "2rem"
			}
		}, 
		body2: {
			fontSize: "1.5rem", 
			lineHeight: "2.5rem", 
			[defaultTheme.breakpoints.down('sm')]: {
				fontSize: "1rem", 
				lineHeight: "1.5rem"
			}, 
			[defaultTheme.breakpoints.down('xs')]: {
				fontSize: "0.6rem", 
				lineHeight: "1rem"
			}
		}, 
		h1: {
			fontSize: "3rem", 
			[defaultTheme.breakpoints.down('sm')]: {
				fontSize: "2rem",
			}, 
			[defaultTheme.breakpoints.down("xs")]: {
				fontSize: "1.5rem",
			}

		},  
		h2: {
			fontSize: "4rem", 
			[defaultTheme.breakpoints.down('sm')]: {
				fontSize: "3rem"
			}, 
			[defaultTheme.breakpoints.down('xs')]: {
				fontSize: "2.2rem"
			}
		}, 
		h3: {
			fontSize: "2rem", 
			[defaultTheme.breakpoints.down('sm')]: {
				fontSize: "1.2rem"
			}, 
			[defaultTheme.breakpoints.down('xs')]: {
				fontSize: "0.8rem"
			}
		}, 
		h4: {
			fontSize: "1.5rem", 
			[defaultTheme.breakpoints.down('sm')]: {
				fontSize: "1rem"
			}, 
			[defaultTheme.breakpoints.down('xs')]: {
				fontSize: "0.6rem"
			}
		}, 
		h5: {
			fontSize: "2rem", 
			[defaultTheme.breakpoints.down('md')]: {
				fontSize: "1.5rem"
			}, 
			[defaultTheme.breakpoints.down('sm')]: {
				fontSize: "1.2rem"
			}, 
			[defaultTheme.breakpoints.down('xs')]: {
				fontSize: "1.0rem"
			}
		},
	}
})

export default mainTheme;
