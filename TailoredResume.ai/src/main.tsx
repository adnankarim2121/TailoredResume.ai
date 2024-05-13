import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResumeTailored from './Components/ResumeTailored';

const Main: React.FC = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<ResumeTailored />} />
      </Routes>
    </Router>
  );
};

export default Main;
