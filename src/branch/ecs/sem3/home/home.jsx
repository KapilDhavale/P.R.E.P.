import React, { useState } from 'react';
import Navbar from '../../../../navbar';
import { useNavigate , useLocation } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './home.css';
import '../../../../navbar.css';
import Chatbot from './chatbot';

const Home = () => {
  const [showSidePanel, setShowSidePanel] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const toggleSidePanel = () => {
    setShowSidePanel(!showSidePanel);
  };

  const handleSubjectClick = (item) => {
    if (item === 'M-III') {
      // Navigate to the subject page programmatically
      navigate('/branch/ecs/sem3/subject/subjectpageM-III');
    }
    if (item === 'ED') {
      // Navigate to the subject page programmatically
      navigate('/branch/ecs/sem3/subject/subjectpageED');
    }
    if (item === 'ED Lab') {
      // Navigate to the subject page programmatically
      navigate('/branch/ecs/sem3/practical/practicalEDlab');
    }
  };

  return (
    <div className="bg-container">
      <Navbar handleSubjectClick={handleSubjectClick} />
      {/* Add other content specific to the Home page here */}
      <img src="/homevector.png" alt="home" />
      renderChatbot && <Chatbot />

    </div>
  );
};

export default Home;
