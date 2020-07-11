import React from 'react';
import './Noposts.css';

class Noposts extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="noPostsView">
			    <p> No posts right now -- please check back later! </p>
				<img className="noPostsCow" alt="cow" src="images/cow.png"/>
			</div>
		)
	}
}

export default Noposts;