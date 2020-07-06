import React from 'react';
import './Blogpost.css';

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
		return (
			<div className="blogpost" onClick={this.handlePostClick}>
				<h1 className="title">{this.props.title}</h1>
				<h2 className="date">{this.props.date}</h2>
				<p className="body">
				    {this.state.bodyPreview}
				    <span>{this.state.expandButtonText}</span>
				</p>
			</div>
		)
	}
}


export default Blogpost;