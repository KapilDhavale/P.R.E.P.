import React, { useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import { auth } from './firebase'; // Import firebaseApp instance
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'; // Import createUserWithEmailAndPassword and sendEmailVerification functions

const CreateAccount = () => {
  const [vesId, setVesId] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleCreateAccount = async () => {
    try {
      if (newPassword !== confirmPassword) {
        throw new Error("Passwords don't match");
      }
if(!vesId.endsWith('@ves.ac.in')){
  throw new Error('Please enter a valid VES ID ending with "@ves.ac.in"')
}
      // Continue with account creation
      const userCredential = await createUserWithEmailAndPassword(auth, vesId, newPassword);

      // Generate OTP
      const randomOTP = Math.floor(100000 + Math.random() * 900000);
      const generatedOTP = randomOTP.toString(); // Convert to string

      // Send email verification with OTP
      await sendEmailVerification(auth.currentUser, {
         url: 'https://c48f9a5e-eb8f-4117-999b-a4ac122863d1-00-39i5yadp1095c.pike.replit.dev/',
          handleCodeInApp: true,// Open the link in the app
      });
      navigate('/gmail');
      console.log('Account created successfully:', userCredential);
      setEmailSent(true);
      setOtp(generatedOTP);
    } catch (error) {
      console.error('Error creating account:', error.message);
      setErrorMessage(error.message); // Set error message
    }
  };

  const handleVesIdChange = (e) => {
    setVesId(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleOTPChange = (e) => {
    setOtp(e.target.value);
  };

  return (
    <div className="container">
      <div className="black-box">
        <div className="top-text">
          VESIT CREATE ACCOUNT
        </div>
        {!emailSent && (
          <div className="red-box">
            <div className="input-box-container">
              <label htmlFor="vesId" className="label">Student VES ID:</label>
              <input type="text" id="vesId" className="input-box" value={vesId} onChange={handleVesIdChange} />
            </div>
            <div className="input-box-container">
              <label htmlFor="newPassword" className="label">New Password:</label>
              <input type="password" id="newPassword" className="input-box" value={newPassword} onChange={handleNewPasswordChange} />
            </div>
            <div className="input-box-container">
              <label htmlFor="confirmPassword" className="label">Confirm Password:</label>
              <input type="password" id="confirmPassword" className="input-box" value={confirmPassword} onChange={handleConfirmPasswordChange} />
            </div>
          </div>
        )}
        {emailSent ? (
          <div>
            <p>An OTP has been sent to your email. Please enter it below:</p>
            <input type="text" value={otp} onChange={handleOTPChange} />
            <button onClick={handleVerifyOTP}>Verify OTP</button>
          </div>
        ) : (
          <button className="create-account-btn" onClick={handleCreateAccount}>Create Account</button>
        )}
        <div className="bottom-text">
          <Link to="/" className="login">Already Have an Account ? Login</Link>
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Display error message */}
      </div>
    </div>
  );
};

export default CreateAccount;