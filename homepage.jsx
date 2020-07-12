import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './components/homepage/Homepage.jsx';
import { HashRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/core/styles';
import mainTheme from './mainTheme';


ReactDOM.render(
	<HashRouter>
	    <ThemeProvider theme={mainTheme}>
	        <Typography component={"div"}>
			    <Homepage />
			</Typography>
	    </ThemeProvider>
	</HashRouter>,   
	document.getElementById("root")
);