import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ handleSubjectClick }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showSidePanel, setShowSidePanel] = useState(false);

  const toggleSidePanel = () => {
    setShowSidePanel(!showSidePanel);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="top-rectangle">
      <Link to="/branch/ecs/sem4/homesem4/homesem4" className="prep-text" style={{ textDecoration: 'none' }}>P.R.E.P.</Link>
      <div className="dropdown-container subject"> 
        <Dropdown title="Subject" items={['DSA', 'C&I', 'MPMC', 'EDC', 'M-IV', 'PYT']} onItemClick={handleSubjectClick} />
      </div>
      <div className="dropdown-container practical">
        <Dropdown title="Practical" items={['DSA Lab', 'C&I Lab', 'MPMC Lab', 'EDC Lab', 'M-IV Lab', 'PYT Lab']}onItemClick={handleSubjectClick} />
      </div>
      <div className="dropdown-container project">
        <Dropdown title="Project" items={['Mini Projects', 'LBS', 'Other Projects']} />
      </div>
      <div className="dropdown-container pyqs">
        <Dropdown title="PYQ's" items={['Solved Question Papers', 'Unsolved Question Papers']} />
      </div>
      <div className="dropdown-container more">
        <Dropdown title="More" items={['GATE', 'CAT']} />
      </div>
      <div className="profile"></div>
      {windowWidth <= 800 && (
        <div className={`hamburger-icon ${showSidePanel ? 'active' : ''}`} onClick={toggleSidePanel}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      )}
      {showSidePanel && (
        <div className={`side-panel ${showSidePanel ? 'active' : ''}`}>
          <ul>
            <Dropdown title="Subject" items={['DSA', 'C&I', 'MPMC', 'EDC', 'M-IV', 'PYT']} onItemClick={handleSubjectClick} />
            <Dropdown title="Practical" items={['DSA Lab', 'C&I Lab', 'MPMC Lab', 'EDC Lab', 'M-IV Lab', 'PYT Lab']} onItemClick={handleSubjectClick} />
            <Dropdown title="Project" items={['Mini Projects', 'LBS', 'Other Projects']} onItemClick={handleSubjectClick}/>
            <Dropdown title="PYQ's" items={['Solved Question Papers', 'Unsolved Question Papers']} onItemClick={handleSubjectClick}/>
            <Dropdown title="More" items={['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']} onItemClick={handleSubjectClick} />
          </ul>
        </div>
      )}
    </div>
  );
};

const Dropdown = ({ title, items, onItemClick }) => {
  return (
    <li className="dropdown">
      <div className="dropdown-toggle">{title}</div>
      <div className="dropdown-content">
        {items.map((item, index) => (
          <p key={index} onClick={() => onItemClick(item)}>{item}</p>
        ))}
      </div>
    </li>
  );
};

export default Navbar;
