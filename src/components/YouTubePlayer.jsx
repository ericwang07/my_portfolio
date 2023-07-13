import React from 'react';
import YouTube from 'react-youtube'

const YouTubePlayer = ({ videoId }) => {
    const opts = {
      height: '430',
      width: '774',
      playerVars: {
        autoplay: 0,
      },
    };
  
    const onReady = (event) => {
      // Access the player in event.target
      event.target.pauseVideo();
    };
  
    return <YouTube videoId={videoId} opts={opts} onReady={onReady} />;
};
export default YouTubePlayer