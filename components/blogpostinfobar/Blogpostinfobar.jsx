import React from 'react';
import './Blogpostinfobar.css';
import { Typography } from '@material-ui/core';
import Likebutton from '../likebutton/Likebutton';


class Blogpostinfobar extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

	render() {
		let date = this.props.date;
		let month = date.toLocaleString("default", {month: "long"});
		let day = date.getDate();
		let year = date.getFullYear();
		return (
			<div className="blogpostInfoBar">
			    <Typography variant={this.props.variant}>
			    	<div>{`${month} ${day}, ${year}`}</div>
			    </Typography>
			    <Likebutton likes={this.props.likes}/>
			</div>			
		)
	}
}

export default Blogpostinfobar;


