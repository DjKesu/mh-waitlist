import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Form } from "react-bootstrap";
import "../styles/FeatureComponent.css";
import SendIcon from "@mui/icons-material/Send";
import { createRecord } from "../backend/airtable";

const FeatureComponent = ({ imageSrc, title, caption }) => {
  const [showInput, setShowInput] = useState(false);
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const toggleShowInput = () => {
    setShowInput(!showInput);
  };

  const handleEmailSubmit = async () => {
    if (email) {
      const d = await createRecord(email);
      console.log(d);
      setShowInput(false);
      setEmailSubmitted(true);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEmailSubmit();
  };

  return (
    <div className="feature-component">
      <div className="white-box">
        <div className="text-side">
          <h2>{title}</h2>
          <p>{caption}</p>
          {showInput ? (
            <div className="form-input">
              <Form onSubmit={handleSubmit}>
                <Form.Control
                  type="email"
                  placeholder="Enter email to join waitlist"
                  value={email}
                  onChange={handleEmailChange}
                />
                <SendIcon className="send-icon" fontSize="large"/>
              </Form>
            </div>
          ) : (
            <Button
              className="feature-button"
              variant="outline-dark"
              onClick={toggleShowInput}
            >
              {emailSubmitted ? "waitlist joined!" : "Get the app"}
            </Button>
          )}
        </div>
        <div className="image-side">
          <img src={imageSrc} alt="Feature" />
        </div>
      </div>
    </div>
  );
};

FeatureComponent.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};

export default FeatureComponent;
