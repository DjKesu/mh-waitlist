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
    // console.log(email);
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
                  placeholder="Join the waitlist"
                  value={email}
                  onChange={handleEmailChange}
                />
                <button
                  type="submit"
                  className="join-button"
                  style={{ fontFamily: "Montserrat" }}
                >
                  Join
                </button>
              </div>
            </form>
          ) : (
            <div>
              <h1
                className="title"
                style={{
                  color: "white",
                  fontFamily: "EB Garamond",
                  fontSize: 70,
                }}
              >
                Memory Haven
              </h1>
              <h2 style={{color: "white",
                  fontFamily: "EB Garamond",
                  fontSize: 30,}}>
                Thank you for joining the waitlist!
                See you soon
              </h2>
            </div>
          )}
        </div>
      ) : (
        <div className="video-container">
          <h1
            className="title"
            style={{ color: "white", fontFamily: "EB Garamond", fontSize: 70 }}
          >
            Every second is a memory worth keeping
          </h1>
          <video src={intro} type="video/mp4" autoPlay={true} muted={true} />
        </div>
      )}
    </div>
  );
}

export default App;
