import React from 'react';
import './Homepage.css';

import { Route, Switch } from 'react-router-dom';

import posts from '../../database/posts.js';
import categories from '../../database/categories.js';

import Blogpost from '../blogpost/Blogpost.jsx';
import Header from '../header/Header.jsx';
import Sidebar from '../sidebar/Sidebar.jsx';
import About from '../about/About.jsx';

class Homepage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.postsFilterByTag = this.postsFilterByTag.bind(this);
	}

	postsFilterByTag(postItems, tag) {
		let filteredPosts = [];
		for (let i = 0; i < postItems.length; i += 1) {
			let {id, tags, ...rest} = postItems[i];
			if (tags.includes(tag) || tag === undefined) {
				filteredPosts.push(<Blogpost key={id} {...rest}/>)
			}
		}
		return filteredPosts;
	}

	render() {
		return (
			<div className="homepage">
				<Header />
				<Sidebar categories={categories}/>
				<Switch>
					<Route path="/" exact={true} render={() => this.postsFilterByTag(posts)}/>
					<Route path="/about" render={() => <About/>}/>
					<Route 
						path="/:tag" 
						render={(props) => this.postsFilterByTag(posts, props.match.params.tag)}
					/>
				</Switch>
			</div>
		)
	}
}

export default Homepage;