import React from 'react';
import './Blogpost.css';
import Blogtags from '../blogtags/Blogtags.jsx';
import { Box, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Blogpostinfobar from '../blogpostinfobar/Blogpostinfobar.jsx';


class Blogpost extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

	render() {
		return (
			<Box className="blogpost" boxShadow={10} bgcolor="primary.main" borderRadius="borderRadius">
				<Typography variant="h3">
					<div className="title">{this.props.title}</div>
				</Typography>

				<Blogpostinfobar variant="h4" date={this.props.date} likes={this.props.likes}/>
				<Blogtags tags={this.props.tags}/>

				<Typography variant="body2" component="div">
					<p>
						{this.props.body.slice(0, 100)}
						<Link to={`/blog/${this.props.id}`} style={{textDecoration: 'none', color: 'inherit'}}>
							<span>...Read More</span>
						</Link>
					</p>
				</Typography>
			</Box>
		)
	}
}


export default Blogpost;
