import React from 'react';
import VideoListEntry from './VideoListEntry.jsx';

var VideoList = () => (
  <div className="video-list media">
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />
  </div>
);

// PropType은 다른 개발자에게 component가 받을수 있는 `props'를 알려줍니다.
// 정의 된 규칙을 위반하면 경고가 콘솔에 표시됩니다.
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};
