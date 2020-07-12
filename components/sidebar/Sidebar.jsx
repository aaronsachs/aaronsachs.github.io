import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@material-ui/core';


class Sidebar extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {};
	}

	render() {
		return (
			<Box className="sidebar" bgcolor="secondary.main" boxShadow={3}>
				{
					this.props.categories.map(
						({name, link}, idx) => {
							return (
								<Link to={link} style={{textDecoration: 'none', color: 'inherit'}} key={idx}>
								    <Box boxShadow={4} bgcolor="primary.main">
								    <Typography variant="h5">
								        <div className="category">{name}</div>
								    </Typography>
									 </Box>
								</Link>
							)
						}
					)
				}
			</Box>
		)
	}
}

export default Sidebar;