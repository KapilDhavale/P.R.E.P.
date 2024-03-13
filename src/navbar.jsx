import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase'; // Import the auth object from firebase


const Navbar = ({ handleSubjectClick }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showSidePanel, setShowSidePanel] = useState(false);
  const [userInitial, setUserInitial] = useState(null); // State to hold user's initial
  const navigate = useNavigate(); 

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

  useEffect(() => {
    // Fetch the currently signed-in user
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        // If user is signed in, extract initial from email
        const emailInitial = user.email[0].toUpperCase();
        setUserInitial(emailInitial);
      } else {
        // If user is signed out, clear userInitial state
        setUserInitial(null);
      }
    });

    // Cleanup function
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    auth.signOut()
      .then(() => {
        // Sign-out successful.
        console.log('User signed out successfully.');
        // Redirect to the login page after signout
        window.location.href = '/'; // Redirect to the login page
      })
      .catch((error) => {
        // An error happened.
        console.error('Error signing out:', error);
      });
  };

  return (
    <div className="top-rectangle">
      <Link to="/branch/ecs/sem3/home/home" className="prep-text" style={{ textDecoration: 'none' }}>P.R.E.P.</Link>
      <div className="dropdown-container subject"> 
        <Dropdown title="Subject" items={['M-III', 'ED', 'DE', 'DSA', 'DBMS', 'OOPM']} onItemClick={handleSubjectClick} />
      </div>
      <div className="dropdown-container practical">
        <Dropdown title="Practical" items={['M-III Lab', 'ED Lab', 'DE Lab', 'DSA Lab', 'DBMS Lab', 'OOPM Lab']} onItemClick={handleSubjectClick} />
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
     <div className='userSymbol'>
      <div className="dropdown-container userInfo"> 
        {/* Render UserInfo dropdown with userInitial */}
        <Dropdown title={userInitial ? userInitial : "UserInfo"} items={['Sign Out']} onItemClick={handleSignOut} />
      </div>
       </div>



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
            <Dropdown title="Subject" items={['M-III', 'ED', 'DE', 'DSA', 'DBMS', 'OOPM']} onItemClick={handleSubjectClick} />
            <Dropdown title="Practical" items={['M-III Lab', 'ED Lab', 'DE Lab', 'DSA Lab', 'DBMS Lab', 'OOPM Lab']} onItemClick={handleSubjectClick} />
            <Dropdown title="Project" items={['Mini Projects', 'LBS', 'Other Projects']} onItemClick={handleSubjectClick}/>
            <Dropdown title="PYQ's" items={['Solved Question Papers', 'Unsolved Question Papers']} onItemClick={handleSubjectClick}/>
            <Dropdown title="More" items={['GATE', 'CAT']} onItemClick={handleSubjectClick} />
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
