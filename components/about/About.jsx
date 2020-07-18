import React from 'react';
import './About.css';


class About extends React.Component {
	constructor(props) {
		super(props); 
		this.state = {};
	}

	render() {
		return (
			<div className="about">
				<p>Please excuse our appearance while the About Me page is under construction</p>
				<img className="aboutCow" src="images/cow.png" alt="cow"/>
			</div>
		)
	}
}

export default About;