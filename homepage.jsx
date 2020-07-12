import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './components/homepage/Homepage.jsx';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import mainTheme from './mainTheme';

ReactDOM.render(
	<HashRouter>
	    <ThemeProvider theme={mainTheme}>
			<Homepage />
	    </ThemeProvider>
	</HashRouter>,   
	document.getElementById("root")
);