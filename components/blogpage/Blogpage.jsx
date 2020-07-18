import React from 'react';
import './Blogpage.css';
import { Box, Typography } from '@material-ui/core';
import Blogpostinfobar from '../blogpostinfobar/Blogpostinfobar';


class Blogpage extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {};
	}

	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<Box className="blogPage" bgcolor="primary.main" boxShadow={20} borderRadius="borderRadius">
				<Typography variant="h2">{this.props.title}</Typography>
				<Blogpostinfobar variant="h4" date={this.props.date} likes={this.props.likes}/>
				<Typography variant="body1">{this.props.body}</Typography>
			</Box>
		)
	}
}

export default Blogpage;
