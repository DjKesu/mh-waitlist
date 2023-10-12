import React, { useEffect, useState } from 'react';
import '../styles/AutoPlayVideo.css';
import intro from "../videos/memhav.mp4";

const AutoplayVideo = () => {
  const [showVideo, setShowVideo] = useState(true);

  const handleVideoEnd = () => {
    setShowVideo(false);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowVideo(false);
    }, 6000);

    return () => {
      clearTimeout(timeout);
    };
  } , []);

  return (
    <div className="fadeinout">
      {showVideo && (
        <div className="video-container">
        {/* <h1 className="title">Every second is a memory worth keeping</h1> */}
        <video src={intro} type="video/mp4" autoPlay={true} muted={true} onEnded={handleVideoEnd} />
      </div>
      )}
    </div>
  );
};

export default AutoplayVideo;
