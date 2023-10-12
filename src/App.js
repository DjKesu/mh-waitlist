import { useState, useEffect } from "react";
import "./App.css";
import { createRecord } from "./backend/airtable.js";
import AutoplayVideo from "./components/AutoPlay";
import Logo from "./components/Logo";
import { Button } from "react-bootstrap";
import SwipeDownAltRoundedIcon from "@mui/icons-material/SwipeDownAltRounded";
import FeatureComponent from "./components/FeatureComponent";
import memhaven from "./images/memhavmain.png";

function App() {
  const [showExplore, setShowExplore] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(true);
  const [videoCompleted, setVideoCompleted] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    setEmail(event.target.value);
    createRecord(email)
      .then(() => {
        setSubmitted(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    setTimeout(() => {
      setShowExplore(true);
    }, 5000);
  }, []);

  return (
    <div className="App">
      <div className="video-container">
        <AutoplayVideo onEnded={() => setVideoCompleted(true)} />
      </div>
      <div className="content-container">
        <div className="logo-container">
          <Logo />
        </div>
        <h1 className="title">MEMORY HAVEN</h1>
        {showExplore ? (
          <div className="explore-container">
            <Button
              className="btn explore"
              onClick={() => console.log("clicked")}
            >
              Explore
            </Button>
          </div>
        ) : null}
        <SwipeDownAltRoundedIcon className="swipe-icon" />
      </div>
      {showExplore && (
        <div className="features">
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
