import React from 'react';
import VideoListEntry from './VideoListEntry.jsx';

export default class VideoList extends React.Component {
  render(){
    return(
        <div className="video-list media">
          <VideoListEntry 
            videoThumbnailURL={this.props.videoThumbnailURL}
            videoTitle={this.props.videoTitle}
            videoDescription = {this.props.videoDescription}
            index = {this.props.index}
            videoTitleOnClick = { this.props.videoTitleOnClick.bind(this) }
          />
          }
        </div>
    );
  }
}

// PropType은 다른 개발자에게 component가 받을수 있는 `props'를 알려줍니다.
// 정의 된 규칙을 위반하면 경고가 콘솔에 표시됩니다.
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};
