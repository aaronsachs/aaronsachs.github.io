import React from 'react';
import './Likebutton.css';
import likeButtonTheme from './Likebuttontheme';

import { Chip, Avatar, Hidden } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';


class Likebutton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			numLikes: props.likes
		}
		this.handleClickLike = this.handleClickLike.bind(this);
	}

	handleClickLike(e) {
		this.setState((prevState) =>{
			return {
				numLikes: prevState.numLikes + 1
			}
		})
	}

	render() {
		return (
			
			<div className="likeButton">
				<ThemeProvider theme={likeButtonTheme}>
					<Hidden smDown>
						<Chip
							avatar={<Avatar alt="like" src="images/cow.png"/>}
							label={`${this.state.numLikes}`}
							clickable
							color="primary"
							deleteIcon={<FavoriteIcon/>}
							onDelete={this.handleClickLike}
							display={{xs: "none"}}
						/>
					</Hidden>
				</ThemeProvider>
			</div>
		)
	}
}

export default Likebutton;