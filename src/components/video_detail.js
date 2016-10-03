import React from 'react';

const VideoDetail = ({video}) => {
	if (!video){
		return <h1>Loading... </h1>
	}
	return(
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={video.videoURL}></iframe>
			</div>
			<div className="text col-md-8">{video.text}</div>
		</div>
	);
}

export default VideoDetail;