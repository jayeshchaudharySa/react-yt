'use strict'

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class VideoItem extends Component {
	render() {
		const onVideoClick = () => {
			this.props.onVideoClick(this.props.video)
		}

		return (
			<li onClick={onVideoClick}>
				<h3>{this.props.video.snippet.title}</h3>
				<img src={this.props.video.snippet.thumbnails.default.url} />
			</li>
		)
	}
}

export default VideoItem;
