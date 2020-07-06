import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {};
	}

	render() {
		return (
			<div className="sidebar">
				{
					this.props.categories.map(
						({name, link}, idx) => {
							return (
								<Link to={link} key={idx}>
									<div className="category">{name}</div>
								</Link>
							)
						}
					)
				}
			</div>
		)
	}
}

export default Sidebar;