import React from 'react';
import './Blogtags.css';
import { Chip, Avatar } from '@material-ui/core';


class Blogtags extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {};
	}

	render() {
		return (
			<div>
				{this.props.tags.map(
					(tag) => 
						<Chip 
							key={tag} 
							variant="outlined" 
							avatar ={<Avatar alt="icon" src="images/cow.png"/>}
							label={tag}
						/>
				)}
			</div>
		)
	}
}

export default Blogtags;
