import React, { useState, useEffect } from 'react';
import './subjectpageED.css';
import { Link, useNavigate, useLocation } from 'react-router-dom'; // Import useNavigate
import Navbar from '../../../../navbar';
import axios from 'axios';
const SubjectPageED = () => {
  const navigate = useNavigate();
  const [moduleContent, setModuleContent] = useState({
    module1: false,
    module2: false,
    module3: false,
    module4: false,
    module5: false,
    module6: false,
  });

  const toggleModuleContent = (module) => {
    setModuleContent({
      ...moduleContent,
      [module]: !moduleContent[module],
    });
  };

  const handleSubjectClick = (item) => {
    if (item === 'M-III') {
      // Navigate to the subject page programmatically
      navigate('/branch/ecs/sem3/subject/subjectpageM-III');
    }
    if (item === 'ED') {
      // Navigate to the subject page programmatically
      navigate('/branch/ecs/sem3/subjectpageED');
    }
    if (item === 'ED Lab') {
      // Navigate to the subject page programmatically
      navigate('/branch/ecs/sem3/practical/practicalEDlab');
    }
  };

  const handlePDFClick = async (pdfFileId) => {
    try {
      const response = await axios.get(`./files/${pdfFileId}`, {
        responseType: 'arraybuffer',
      });
      const blob = new Blob([response.data], { type: 'application/pdf' });
      const baseURL = 'https://56313209-c28c-4f2f-9319-f4d79fe2074f-00-w6ctl3hhgklj.pike.replit.dev/files/';
      const url = `${baseURL}${pdfFileId}`;

      // const url = 'https://56313209-c28c-4f2f-9319-f4d79fe2074f-00-w6ctl3hhgklj.pike.replit.dev/files/65ec4acb0915728c0a400d5e';
      window.open(url, '_blank');
    } catch (error) {
      console.error('Error fetching PDF file:', error);
      console.error('Response:', error.response); // Log Axios response details
    }
  };

  return (
    <div className="bg-container">
      <Navbar handleSubjectClick={handleSubjectClick} />
      <div className="subject-name">
        <h2>Electronic Devices</h2>
      </div>
      <div className="box"></div>
      <div className="blue-box">
        <div className="module">
          <h3>Modules :</h3>
        </div>
        <div className="allmodules">
          <div className="row1module">
            <div className={`module1 ${moduleContent.module1 ? 'expanded' : ''}`} onClick={() => toggleModuleContent('module1')}>
              <h5>Module 1 : P-N Junction Diode & Applications                   </h5>
              {moduleContent.module1 && (
                <div className='options'>              
                  <ul className="pdfs-list">
                    <li className='pdfs' onClick={() => handlePDFClick('65ec4106edf7b4912c55be14')}>PDFs</li> {/* Pass the correct PDF file ID */}
                  </ul>
                  <ul className="videos-list">
                    <li className='pdfs' >Videos</li> {/* Placeholder for videos */}
                  </ul>
                </div>
              )}
            </div>
 <div className={`module2 ${moduleContent.module2 ? 'expanded' : ''}`} onClick={() => toggleModuleContent('module2')}>
              <h5>Module2: Special Semiconductor Devices</h5>
              {moduleContent.module2 && (
                <div>
                  <ul className="pdfs-list">
                    <li className='pdfs' onClick={() => handlePDFClick('65ec46803aa9c33a58778ec8')}>PDFs</li>
                  </ul>
                  <ul className="videos-list">
                    <li className='pdfs' onClick={() => handlePDFClick('inverse_laplace_transform.mp4')}>Videos</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="row2module">
            {/* Modules 3 and 4 */}
            <div className={`module3 ${moduleContent.module3 ? 'expanded' : ''}`} onClick={() => toggleModuleContent('module3')}>
              <h5>Module3: Bipolar Junction Transistor (BJT)</h5>
              {moduleContent.module3 && (
                <div>
                  <ul className="pdfs-list">
                    <li className='pdfs' onClick={() => handlePDFClick('65ec4acb0915728c0a400d5e')}>PDFs</li>
                  </ul>
                  <ul className="videos-list">
                    <li className='pdfs' onClick={() => handlePDFClick('inverse_laplace_transform.mp4')}>Videos</li>
                  </ul>
                </div>
              )}
            </div>
            <div className={`module4 ${moduleContent.module4 ? 'expanded' : ''}`} onClick={() => toggleModuleContent('module4')}>
              <h5>Module 4: Field Effect Devices (FET)</h5>
              {moduleContent.module4 && (
                <div>
                  <ul className="pdfs-list">
                    <li className='pdfs' onClick={() => handlePDFClick('65ec7e6d13e7907411e9a504')}>PDFs</li>
                  </ul>
                  <ul className="videos-list">
                    <li className='pdfs' onClick={() => handlePDFClick('inverse_laplace_transform.mp4')}>Videos</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="row3module">
            {/* Modules 5 and 6 */}
            <div className={`module5 ${moduleContent.module5 ? 'expanded' : ''}`} onClick={() => toggleModuleContent('module5')}>
              <h5>Module 5: Frequency Response of Amplifiers</h5>
              {moduleContent.module5 && (
                <div>
                  <ul className="pdfs-list">
                    <li className='pdfs' onClick={() => handlePDFClick('65ec7e7513e7907411e9a506')}>PDFs</li>
                  </ul>
                  <ul className="videos-list">
                    <li className='pdfs' onClick={() => handlePDFClick('inverse_laplace_transform.mp4')}>Videos</li>
                  </ul>
                </div>
              )}
            </div>
            <div className={`module6 ${moduleContent.module6 ? 'expanded' : ''}`} onClick={() => toggleModuleContent('module6')}>
              <h5>Module 6: Rectifiers & Filters</h5>
              {moduleContent.module6 && (
                <div>
                  <ul className="pdfs-list">
                    <li className='pdfs' onClick={() => handlePDFClick('65ec48c9e1e6b43cace76774')}>PDFs</li>
                  </ul>
                  <ul className="videos-list">
                    <li className='pdfs' onClick={() => handlePDFClick('inverse_laplace_transform.mp4')}>Videos</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubjectPageED;