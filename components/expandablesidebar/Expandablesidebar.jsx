import React from 'react';
import './Expandablesidebar.css';
import DehazeIcon from '@material-ui/icons/Dehaze';


class Expandablesidebar extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {
			isClicked: false
		};
		this.displayCategories = this.displayCategories.bind(this);
	}

	displayCategories(e) {
		this.setState((prevState) => {
			return {
				isClicked: !prevState.isClicked
			}
		})
	}

	render() {
		return (
			<div className="expandButton">
				<DehazeIcon onClick={this.displayCategories}/>
				{this.state.isClicked ? this.props.categories : ""}
			</div>
		)
	}
}

export default Expandablesidebar;
