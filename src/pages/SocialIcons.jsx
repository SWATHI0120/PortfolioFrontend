import React, { useState, useRef, useEffect } from 'react';
import '../styles/socialicons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const SocialIcons = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [copied, setCopied] = useState(false);
  const popupRef = useRef(null);
  const email = "swathin2023it@sece.ac.in";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="social-icons">
      <a href="https://www.linkedin.com/in/swathi-n-240712291/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      
      <a href="https://github.com/SWATHI0120" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} />
      </a>

      <div className="email-container" ref={popupRef}>
        <a onClick={() => setShowPopup(!showPopup)}>
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        {showPopup && (
          <div className="email-popup">
            <p>{email}</p>
            <button onClick={copyToClipboard} className="copy-btn">
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        )}
 

      </div>
      
    </div>
   
    
  );
};

export default SocialIcons;
