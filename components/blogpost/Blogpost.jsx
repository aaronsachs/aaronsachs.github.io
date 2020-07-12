import React from 'react';
import './Blogpost.css';
import Blogtags from '../blogtags/Blogtags.jsx';
import Likebutton from '../likebutton/Likebutton.jsx';
import { Box, Typography } from '@material-ui/core';


class Blogpost extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {
			isPreview: true, 
			bodyPreview: props.body.slice(0, 100) + "...", 
			expandButtonText: "Read More"
		};

		this.handlePostClick = this.handlePostClick.bind(this);
	}

	handlePostClick(e) {
		this.setState(
			(prevState) => {
				let isPreview = !prevState.isPreview;
				return {
					isPreview, 
					bodyPreview: isPreview ? this.props.body.slice(0, 100) + "..." : this.props.body, 
					expandButtonText: isPreview ? "Read More" : ""
				}
			}
		);

	}

	render() {
		let date = this.props.date;
		let month = date.toLocaleString("default", {month: "long"});
		let day = date.getDate();
		let year = date.getFullYear();
		return (
			<Box bgcolor="secondary.main" boxShadow={4} borderRadius="borderRadius">
				<Box boxShadow={10} className="blogpost" bgcolor="primary.main" borderRadius="borderRadius">
					<Typography variant="h4">
						<div className="title">{this.props.title}</div>
					</Typography>
					
					<div className="blogpostInfoBar">
					    <Typography variant="h6">
					    	<div className="date">{`${month} ${day}, ${year}`}</div>
					    </Typography>
					    <Likebutton likes={this.props.likes}/>
					</div>
					
					<Blogtags tags={this.props.tags}/>
					<Typography variant="body1" component="div">
						<p className="body" onClick={this.handlePostClick}>
						    {this.state.bodyPreview}
						    <span>{this.state.expandButtonText}</span>
						</p>
					</Typography>
				</Box>
			</Box>
		)
	}
}


export default Blogpost;