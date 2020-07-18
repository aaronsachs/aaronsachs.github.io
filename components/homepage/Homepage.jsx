import React from 'react';
import './Homepage.css';

import { Route, Switch } from 'react-router-dom';

import posts from '../../database/posts.js';
import categories from '../../database/categories.js';

import Blogpage from '../blogpage/Blogpage.jsx';
import Blogpost from '../blogpost/Blogpost.jsx';
import Header from '../header/Header.jsx';
import Sidebar from '../sidebar/Sidebar.jsx';
import About from '../about/About.jsx';
import Noposts from '../noposts/Noposts.jsx';
import ErrorPage from '../errorpage/ErrorPage.jsx';


class Homepage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.postsFilterByTag = this.postsFilterByTag.bind(this);
		this.postsFilterRecent = this.postsFilterRecent.bind(this);
		this.postsFilter = this.postsFilter.bind(this);
		this.filterID = this.filterID.bind(this);
	}

	filterID(postItems, blogID) {
		let matchBlogs = postItems.filter((post) => post.id === blogID);
		if (matchBlogs.length === 0) {
			return <Noposts/>
		} else if (matchBlogs.length === 1) {
			return <Blogpage {...matchBlogs[0]}/>
		} else {
			return <ErrorPage/>
		}
	}

	postsFilter(postItems, filterFunc) {
		let filteredPosts = postItems.filter(filterFunc).map(
			(post) => <Blogpost key={post.id} {...post} />
		);
		return filteredPosts.length > 0 ? filteredPosts : (<Noposts/>);
	}

	postsFilterByTag(postItems, filterTag) {
		return this.postsFilter(
			postItems, 
			(post) => post.tags.includes(filterTag) || filterTag === undefined
		)
	}

	postsFilterRecent(postItems) {
		let daysInTwoWeeks = 14;
		let nowDate = new Date(Date.now());
		let twoWeeksAgo = new Date(nowDate.setDate(nowDate.getDate() - daysInTwoWeeks));
		return this.postsFilter(postItems, (post) => post.date >= twoWeeksAgo);
	}

	render() {
		return (
			<div className="homepage">
				<Header />
				<Sidebar categories={categories}/>
				<Switch>
					<Route path="/" exact={true} render={() => this.postsFilterByTag(posts)}/>
					<Route path="/about" render={() => <About/>}/>
					<Route path="/recent" render={() => this.postsFilterRecent(posts)}/>
					<Route 
						path="/blog/:blogID" 
						render={(props) => this.filterID(posts, props.match.params.blogID)}
					/>
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
