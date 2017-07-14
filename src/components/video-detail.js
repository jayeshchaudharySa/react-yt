'use strict'

import React from 'react';
import ReactDOM from 'react-dom';

const VideoDetail = (props) => {
	console.log(props.video);
	if (!props.video) {
		return <div>Loading</div>
	} else {
		const ytUrl = `https://www.youtube.com/embed/${props.video.id.videoId}`

		return (

			<div>
				<h1>{props.video.snippet.title}</h1>
				<iframe src={ytUrl} />
				<h5>{props.video.snippet.title}</h5>
			</div>
		)
	}
}

export default VideoDetail;
