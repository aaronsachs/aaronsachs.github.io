import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@material-ui/core';
import Expandablesidebar from '../expandablesidebar/Expandablesidebar';


class Sidebar extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {};
	}

	render() {
		let categories = this.props.categories.map(
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

		return (
			<Box className="sidebar" bgcolor="secondary.main" boxShadow={3}>
				<div className="sidebarFull">{categories}</div>
				<Expandablesidebar categories={categories}/>
			</Box>
		)
	}
}

export default Sidebar;
