import React, { useState } from 'react';
import Navbar from '../../../../navbarsem4';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './homesem4.css';
import '../../../../navbarsem4.css';

const Homesem4 = () => {
  const [showSidePanel, setShowSidePanel] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const toggleSidePanel = () => {
    setShowSidePanel(!showSidePanel);
  };

  const handleSubjectClick = (item) => {
    if (item === 'DSA') {
      // Navigate to the subject page programmatically
      navigate('/branch/ecs/sem4/subjectsem4/subjectpagedsa');
    }
    if (item === 'C&I') {
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

    </div>
  );
};

export default Homesem4;
