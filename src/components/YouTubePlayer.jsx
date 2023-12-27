import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';

const YouTubePlayer = ({ videoId }) => {
  const [opts, setOpts] = useState({    
    height: 9/16 * (Math.min(774, window.innerWidth * 0.9)),
    width: (Math.min(774, window.innerWidth * 0.9)),
    playerVars: {
      autoplay: 0,
    },
  });


  const getVideoDimensions = () => {    
    const videoWidth = 16;
    const videoHeight = 9;
    return { width: videoWidth, height: videoHeight };
  };

  const onReady = (event) => {    
    event.target.pauseVideo();    
  };

  // Update the size of the player on window resize
  useEffect(() => {    
    const updatePlayerSize = () => {
      const { width: videoWidth, height: videoHeight } = getVideoDimensions();
      const containerWidth = Math.min(774, window.innerWidth * 0.9);
  
      // Calculate the aspect ratio
      const aspectRatio = videoHeight / videoWidth;
  
      // Calculate the new height based on the aspect ratio and container width
      const newHeight = aspectRatio * containerWidth;
  
      setOpts({
        ...opts,
        height: newHeight.toString(),
        width: containerWidth.toString(),
      });
    };
    
    window.addEventListener('resize', updatePlayerSize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', updatePlayerSize);
    };
  }, [opts]);

  
  return <YouTube videoId={videoId} opts={opts} onReady={onReady} />;
  
};

export default YouTubePlayer;