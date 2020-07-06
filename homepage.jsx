import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './components/homepage/Homepage.jsx';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
	<HashRouter>
		<Homepage />
	</HashRouter>, 
	document.getElementById("root")
);