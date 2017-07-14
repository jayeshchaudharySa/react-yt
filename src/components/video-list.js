'use strict'

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import VideoItem from './video-item'

class VideoList extends Component {
	getList() {
		return this.props.videos.map(
			(video) => {
				return <VideoItem key={video.id.videoId} video={video} onVideoClick={video => { this.onVideoClick(video) }} />
			}
		);
	}

	onVideoClick(video) {
		this.props.onVideoClick(video);
	}

	render() {

		return (
			<ul>
				{this.getList()}
			</ul>
		)
	}
}

export default VideoList;
