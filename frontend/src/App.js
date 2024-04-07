// App.js
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import LandingPage from './pages/LandingPage.js';
// import PicAnalyzer from './pages/PicAnalyzer.js';
import VideoAnalyzer from './pages/VideoAnalyzer.js';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<LandingPage/>} />
        <Route path="/pic" element={<VideoAnalyzer/>} />
      </Routes>
    </Router>
  );
}

export default App;
