import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import VideoDetail from '../components/video_detail'
import VideoList from '../components/video_list'
import {trainingContent} from '../zfiles/training_content'

class Training extends Component {
	constructor(props){
		super(props);

		this.state=
		{
			videos: trainingContent,
			selectedVideo: null
		};

	}

	componentDidMount(){
		this.setState({ selectedVideo: this.state.videos[0]})
	}


	render(){

		return(
			<div>
				<h1> Training Page </h1>
				<VideoDetail video={this.state.selectedVideo}/>

				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos} />
			</div>
		);
	}

}

export default Training;