import { useState, useEffect } from "react";
import "./App.css";
import intro from "./videos/memhav.mp4";
import logo from "./images/icon3.svg";
import { createRecord } from "./backend/airtable.js";

function App() {
  const [showLogo, setShowLogo] = useState(false);
  const [fade, setFade] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setFade(true);
    }, 10000);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (fade) {
      setTimeout(() => {
        setShowLogo(true);
      }, 1000);
    }
  }, [fade]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    setEmail(event.target.value);
    // console.log(email);
    createRecord(email)
      .then(() => {
        setSubmitted(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className={`App ${fade ? "fade-out" : ""}`}>
      {showLogo ? (
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo" />
          {submitted ? (
            <form onSubmit={handleSubmit}>
              <div className="input-container">
                <input
                  type="email"
                  placeholder="Join the waitlist!"
                  value={email}
                  onChange={handleEmailChange}
                  className="email-input"
                />
                <button
                  type="submit"
                  className="join-button"
                >
                  Join
                </button>
              </div>
            </form>
          ) : (
            <div>
              <h2
                style={{
                  color: "white",
                  fontFamily: "Swiss 721 Thin" ,
                  fontSize: 20,
                }}
              >
                Thank you for joining the waitlist!
              </h2>
            </div>
          )}
        </div>
      ) : (
        <div className="video-container">
          <h1 className="title">Every second is a memory worth keeping</h1>
          <video src={intro} type="video/mp4" autoPlay={true} muted={true} />
        </div>
      )}
    </div>
  );
}

export default App;
