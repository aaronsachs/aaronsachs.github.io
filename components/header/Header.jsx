import React from 'react';
import './Header.css';
import { Box, Typography } from '@material-ui/core';


class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<Box className="header" boxShadow={4} bgcolor="secondary.main">
				<Typography variant="h1">Welcome to Aaron's Website!</Typography>
			</Box>
		)
	}
}

export default Header;
