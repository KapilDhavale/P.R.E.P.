import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SemBranchSelection from './SemBranchSelection'; // Import the SemBranchSelection component
import Home from './branch/ecs/sem3/home/home';
import Homesem4 from './branch/ecs/sem4/homesem4/homesem4'; 
import SubjectPageDSA from './branch/ecs/sem4/subjectsem4/subjectpagedsa';// Import the Home component for sem 3 ECS
import SubjectPageMIII from './branch/ecs/sem3/subject/subjectpageM-III';
import SubjectPageED from './branch/ecs/sem3/subject/subjectpageED';
import SubjectPageEDlab from './branch/ecs/sem3/practical/practicalEDlab';
import PDFViewer from './PDFViewer'; // Import PDFViewer component
import Gmail from './gmail';

// Components from index.js
import CreateAccount from './CreateAccount';
import Login from './Login';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for the login page */}
        <Route path="/" element={<Login />} />

        {/* Routes for other pages */}
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/sembranchselection" element={<SemBranchSelection />} />
        <Route path="/branch/ecs/sem3/home/home" element={<Home />} />
        <Route path="/branch/ecs/sem4/homesem4/homesem4" element={<Homesem4 />} />
        <Route path="/branch/ecs/sem3/subject/subjectpageM-III" element={<SubjectPageMIII />} />
        <Route path="/branch/ecs/sem3/subject/subjectpageED" element={<SubjectPageED />} />
        <Route path="/branch/ecs/sem3/practical/practicalEDlab" element={<SubjectPageEDlab />} />
        <Route path="/branch/ecs/sem4/subject/subjectpagedsa" element={<SubjectPageDSA />} />
        <Route path="/pdfViewer/:pdfFileName" element={<PDFViewer />} />
        <Route path="/gmail" element={<Gmail />} />

        {/* Additional Routes */}

      </Routes>
    </Router>
  );
};
export default App;