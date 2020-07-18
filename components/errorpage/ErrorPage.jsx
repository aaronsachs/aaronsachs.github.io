import React from 'react';
import './ErrorPage.css';


class ErrorPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (<h1>An error occurred</h1>)
	}
}

export default ErrorPage;