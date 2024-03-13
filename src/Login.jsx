import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      setLoginError('');
      // Set isLoggedIn to true upon successful login
      localStorage.setItem('isLoggedIn', 'true'); // Store isLoggedIn state in localStorage
      navigate('/sembranchselection');
    } catch (error) {
      console.error('Error signing in:', error.message);
      setLoginError('Invalid email or password');
    }
    console.log('Login component rendered');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container">
      <div className="black-box">
        <div className="top-text">VESIT LOGIN</div>
        <div className="red-box">
          <div className="input-box-container">
            <label htmlFor="vesId" className="label">&nbsp;Student VES_ID :</label>
            <input type="text" id="vesId" className="input-box" value={email} onChange={handleEmailChange} />
          </div>
          <div className="input-box-container">
            <label htmlFor="newPassword" className="label">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Password:&nbsp;</label>
            <div className="password-input-container">
              <input type={showPassword ? "text" : "password"} id="newPassword" className="input-box" value={password} onChange={handlePasswordChange} />
              <button className="toggle-password-btn" onClick={togglePasswordVisibility}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
        </div>
        <button className="create-account-btn" onClick={handleLogin}>Login</button>
        <div className="bottom-text">
          <Link to="/create-account" className="create">Create a New Account</Link>
        </div>
        {loginError && <div className="login-error">{loginError}</div>}
      </div>
    </div>
  );
};

export default Login;
