import { useState, useEffect, useRef } from "react";
import "./App.css";
import AutoplayVideo from "./components/AutoPlay";
import Logo from "./components/Logo";
import { Button } from "react-bootstrap";
import SwipeDownAltRoundedIcon from "@mui/icons-material/SwipeDownAltRounded";
import FeatureComponent from "./components/FeatureComponent";
import memhaven from "./images/memhavmain.png";
import Navbar from "./components/Navbar";

function App() {
  const [showExplore, setShowExplore] = useState(false);
  const featureRef = useRef(null);

  function handleExploreClick() {
    window.scrollTo(0, featureRef.current.offsetTop - 50);
  }

  useEffect(() => {
    setTimeout(() => {
      setShowExplore(true);
    }, 5000);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="video-container">
        <AutoplayVideo />
      </div>
      <div className="content-container">
        {/* <div className="logo-container">
          <Logo />
        </div>
        <h1 className="title">MEMORY HAVEN</h1> */}
        <SwipeDownAltRoundedIcon className="swipe-icon" />
        {showExplore ? (
          <div className="explore-container">
            <Button className="btn explore" onClick={handleExploreClick}>
              Explore
            </Button>
          </div>
        ) : null}
      </div>
      {showExplore && (
        <div className="features">
          <div className="feature-container" ref={featureRef}>
            <FeatureComponent
              imageSrc={memhaven}
              title="Feature Title"
              caption="Feature Caption goes here."
            />
          </div>
          <div className="feature-container">
            <FeatureComponent
              imageSrc={memhaven}
              title="Feature Title"
              caption="Feature Caption goes here."
            />
          </div>
          <div className="feature-container">
            <FeatureComponent
              imageSrc={memhaven}
              title="Feature Title"
              caption="Feature Caption goes here."
            />
          </div>
          <div className="feature-container">
            <FeatureComponent
              imageSrc={memhaven}
              title="Feature Title"
              caption="Feature Caption goes here."
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
