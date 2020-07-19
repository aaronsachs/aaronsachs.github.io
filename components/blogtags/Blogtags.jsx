import React from 'react';
import './Blogtags.css';
import { Chip, Avatar, Hidden } from '@material-ui/core';


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
						<Hidden smDown key={tag}>
							<Chip  
								variant="outlined" 
								avatar ={<Avatar alt="icon" src="images/cow.png"/>}
								label={tag}
							/>
						</Hidden>
				)}
			</div>
		)
	}
}

export default Blogtags;
