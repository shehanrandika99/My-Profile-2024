import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './views/HomePage';
import LandingPage from './views/LandingPage';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/land" element={<LandingPage />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
