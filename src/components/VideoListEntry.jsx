import React from 'react';

var VideoListEntry = () => (
  <div className="video-list-entry">
    <div className="media-left media-middle">
      <img className="media-object" src="https://i.ytimg.com/vi/dQw4w9WgXcQ/default.jpg" alt="" />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title">Video Title</div>
      <div className="video-list-entry-detail">Video Description</div>
    </div>
  </div>
);

// PropType은 다른 개발자에게 component가 받을수 있는 `props'를 알려줍니다.
// 정의 된 규칙을 위반하면 경고가 콘솔에 표시됩니다.
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};
