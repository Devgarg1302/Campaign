import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleLoginPage from './GoogleLoginPage';
import AudienceCreation from './AudienceCreation';
import CampaignHistory from './CampaignHistory';
import Groups from './Groups';
import { Navigate } from "react-router-dom";
import Navbar from './Navbar';

// const RequireAuth = ({ children }) => {
//   // Check if the token exists in localStorage
//   const isAuthenticated = localStorage.getItem("token");

//   if (!isAuthenticated) {
//       // Redirect to login if not authenticated
//       return <Navigate to="/login" replace />;
//   }

//   // If authenticated, render the children components
//   return children;
// };

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<AudienceCreation />} />
          <Route path="/campaigns" element={<CampaignHistory />} />
          <Route path="/group" element={<Groups />} />

        </Routes>
      </Router>
  );
}

export default App;
