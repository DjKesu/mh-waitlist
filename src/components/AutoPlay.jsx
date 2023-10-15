import React, { useEffect, useState } from 'react';
import '../styles/AutoPlayVideo.css';
import intro from "../videos/memhav.mp4";
import { Navbar } from 'react-bootstrap';
import logo from '../images/icon3.svg';

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
  }, []);

  return (
    showVideo ? (
      <div className="video-container">
        <video
          className="video"
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
        >
          <source src={intro} type="video/mp4" />
        </video>
      </div>
    ) : null
  );
};

export default AutoplayVideo;
