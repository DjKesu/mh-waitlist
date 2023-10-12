import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Form } from "react-bootstrap";
import "../styles/FeatureComponent.css";
const FeatureComponent = ({ imageSrc, title, caption }) => {
  const [showInput, setShowInput] = useState(false);
  const [email, setEmail] = useState("");

  const toggleInput = () => {
    setShowInput(!showInput);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="feature-component">
      <div className="text-side">
        <h2>{title}</h2>
        <p>{caption}</p>
        {showInput ? (
          <Form.Control
            type="email"
            placeholder="Enter your email to join waitlist"
            value={email}
            onChange={handleEmailChange}
          />
        ) : (
          <Button
            className="feature-button"
            variant="outline-dark"
            onClick={toggleInput}
          >
            {email ? "Email submitted" : "Get the app"}
          </Button>
        )}
      </div>
      <div className="image-side">
        <img src={imageSrc} alt="Feature" />
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
