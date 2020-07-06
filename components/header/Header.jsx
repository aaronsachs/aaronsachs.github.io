import React from 'react';
import './Header.css';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="header">
				<h1>Welcome to Aaron's Website!</h1>
			</div>
		)
	}
}

export default Header;