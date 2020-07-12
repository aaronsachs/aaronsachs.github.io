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
			<Box boxShadow={4} className="header" bgcolor="secondary.main" borderRadius="borderRadius">
			    <Box boxShadow={4} bgcolor="primary.main">
			      <Typography variant="h3">
				      Welcome to Aaron's Website!
				  </Typography>
				</Box>
			</Box>
		)
	}
}

export default Header;