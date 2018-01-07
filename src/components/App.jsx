import React from 'react';
import Nav from './Nav.jsx';
import VideoPlayer from './VideoPlayer.jsx';
import VideoList from './VideoList.jsx';
import VideoData from '../data/exampleVideoData.js';
import {YOUTUBE_API_KEY} from '../config/youtube.js';
import {searchYouTube} from '../lib/searchYouTube.js';

export default class App extends React.Component{
	constructor(props){
	    super(props)
	    this.state = {
	    	videoData : null,
	        videoUrl : null,
	        videoTitle : null,
	        videoDescription : null,
	        loading : false,
	    };
  	};

  	onClickSearchButton(term){
		this.searchYT(term)
	};

	searchYT(term){
		searchYouTube({key: YOUTUBE_API_KEY, searchTxt : term , max: 5 }, data => {
				this.setState({
					videoData : data.items
				});
		});
	};

  	videoTitleOnClick(index){
    	this.setState({
    		videoUrl : `https://www.youtube.com/embed/${this.state.videoData[index].id.videoId}?autoplay=1`,
    		videoTitle : this.state.videoData[index].snippet.title,
	        videoDescription : this.state.videoData[index].snippet.description
    	});
  	};

	render(){
		return(
			<div>
			    <Nav 
					onClickSearchButton = {this.onClickSearchButton.bind(this)}
			    />
			    <div className="col-md-7">
			      <VideoPlayer
				  	videoUrl = {this.state.videoUrl}
				  	videoTitle = {this.state.videoTitle}
				  	videoDescription = {this.state.videoTitle}
			      />
			    </div>
			    <div className="col-md-5">
			      {	
			      	this.state.videoData !== null &&
		            this.state.videoData.map((data, i) => {
		              return <VideoList
		                videoThumbnailURL={data.snippet.thumbnails.default.url}
		                videoTitle={data.snippet.title}
		                videoDescription={data.snippet.description}
		                key={i}
		                index={i}
		                videoTitleOnClick = {this.videoTitleOnClick.bind(this)}
		              />
		            })
		          }	
			    </div>
			</div>
		);
	}
}


