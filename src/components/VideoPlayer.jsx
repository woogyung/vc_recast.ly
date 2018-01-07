import React from 'react';

export default class VideoPlayer extends React.Component {
  render(){
    return(
      <div className="video-player">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={this.props.videoUrl} allowFullScreen></iframe>
        </div>
        <div className="video-player-details">
          <h3>{this.props.videoTitle}</h3>
          <div>{this.props.videoDescription}</div>
        </div>
      </div>
    );
  }
}

// PropType은 다른 개발자에게 component가 받을수 있는 `props'를 알려줍니다.
// 정의 된 규칙을 위반하면 경고가 콘솔에 표시됩니다.
VideoPlayer.propTypes = {
  video: React.PropTypes.object.isRequired
};
