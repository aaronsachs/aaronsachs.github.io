import React from 'react';
import './Blogpost.css';
import Blogtags from '../blogtags/Blogtags.jsx';

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
			<div className="blogpost" onClick={this.handlePostClick}>
				<h1 className="title">{this.props.title}</h1>
				<h2 className="date">{`${month} ${day}, ${year}`}</h2>
				<Blogtags tags={this.props.tags}/>
				<p className="body">
				    {this.state.bodyPreview}
				    <span>{this.state.expandButtonText}</span>
				</p>
			</div>
		)
	}
}


export default Blogpost;