import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SemBranchSelection.css'; // Assuming you have separate CSS for this component

const SemBranchSelection = () => {
  const [branch, setBranch] = useState('');
  const [semester, setSemester] = useState('');
  const [showBranchOptions, setShowBranchOptions] = useState(false);
  const [showSemesterOptions, setShowSemesterOptions] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const branchOptions = ["ECS", "CMPN"];
  const semesterOptions = ["Sem 3", "Sem 4"];

  const handleBranchChange = (option) => {
    setBranch(option);
    setShowBranchOptions(false);
  };

  const handleSemesterChange = (option) => {
    setSemester(option);
    setShowSemesterOptions(false);
  };

  const handleSubmit = () => {
    if (branch === 'ECS' && semester === 'Sem 3') {
      navigate('/branch/ecs/sem3/home/home');
    } else if (branch === 'ECS' && semester === 'Sem 4') {
      navigate('/branch/ecs/sem4/homesem4/homesem4');
    } else if (branch === 'CMPN' && semester === 'Sem 3') {
      navigate('/sem3cmpn');
    } else if (branch === 'CMPN' && semester === 'Sem 4') {
      navigate('/sem4cmpn');
    }
  };

  return (
    <div className="container">
      <div className="black-box">
        <div className="top-text">
          Please Enter Your
        </div>
        <div className="red-box">
          <div className="input-box-container">
            <label htmlFor="branch" className="label">&nbsp;&nbsp;&nbsp;Branch:</label>
            <div className="custom-input-box">
              <input
                type="text"
                id="branch"
                className="input-box"
                value={branch}
                placeholder="Select Branch"
                onClick={() => setShowBranchOptions(!showBranchOptions)}
                readOnly
              />
              {showBranchOptions && (
                <div className="dropdown">
                  {branchOptions.map(option => (
                    <div key={option} className="option" onClick={() => handleBranchChange(option)}>
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="input-box-container">
            <label htmlFor="semester" className="label">Semester:</label>
            <div className="custom-input-box">
              <input
                type="text"
                id="semester"
                className="input-box"
                value={semester}
                placeholder="Select Semester"
                onClick={() => setShowSemesterOptions(!showSemesterOptions)}
                readOnly
              />
              {showSemesterOptions && (
                <div className="dropdown">
                  {semesterOptions.map(option => (
                    <div key={option} className="option" onClick={() => handleSemesterChange(option)}>
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <button className="create-account-btn" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default SemBranchSelection;
