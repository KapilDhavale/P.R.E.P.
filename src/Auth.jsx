import React from 'react';
import { Link } from 'react-router-dom';


const App = () => (
  <div>
    <h1>Welcome to My App</h1>
    <nav>
      <ul>
        <li><Link to="/create-account">Create Account</Link></li>
        <li><Link to="/login">Login</Link></li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
    {/* Add other components or content for your main application page */}
  </div>
);

export default App;
