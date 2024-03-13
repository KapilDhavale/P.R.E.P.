// gmail.jsx

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './gmail.css'; // Import your CSS file

const Gmail = () => {
  return (
    <div className="gmail">
      <h1>Complete Your Registration Process</h1>
      <p>Go to your Gmail Id Account and Verify the Link</p>
      <a className="gmailButton" href="https://mail.google.com" target="_blank" rel="noopener noreferrer">Go to Gmail</a>
    </div>
  );
}

export default Gmail;
