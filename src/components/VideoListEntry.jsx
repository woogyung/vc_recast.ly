import React from 'react';

export default class VideoListEntry extends React.Component{

  render(){
    return(
      <div className="video-list-entry">
        <div className="media-left media-middle">
          <img className="media-object" src={this.props.videoThumbnailURL} alt="" />
        </div>
        <div className="media-body">
          <div className="video-list-entry-title" onClick={ ()=> this.props.videoTitleOnClick(this.props.index) }>
            {this.props.videoTitle}
          </div>
          <div className="video-list-entry-detail">{this.props.videoDescription}</div>
        </div>
      </div>
    );
  }
}

// PropType은 다른 개발자에게 component가 받을수 있는 `props'를 알려줍니다.
// 정의 된 규칙을 위반하면 경고가 콘솔에 표시됩니다.
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};
