import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './views/HomePage';
import LandingPage from './views/LandingPage';
import AllProjectsPage from './views/AllProjectsPage';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/land" element={<LandingPage />} />
        <Route path="/all-projects" element={<AllProjectsPage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
