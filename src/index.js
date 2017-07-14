'use strict'

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';
import VideoDetail from './components/video-detail';
import VideoList from './components/video-list';
import YTSearch from 'youtube-api-search';

import _ from 'lodash';

const API_KEY = "AIzaSyBoWEcp6KtSDz4YxVKMv8JPhkMwy_kCdoM";
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('surfboards');
	}

	videoSearch(term) {
		YTSearch({ key: API_KEY, term: term }, (videos) => {
			console.log(videos, this);
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}


	render() {
		const t = _.debounce((term) => { this.videoSearch(term) }, 300);
		return (
			<div>
				<SearchBar onSearchBarChange={t} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList videos={this.state.videos} onVideoClick={selectedVideo => { this.setState({ selectedVideo }) }} />
			</div>
		)
	}
}



ReactDOM.render(<App />, document.querySelector('.container'));