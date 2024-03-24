// App.js
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import LandingPage from './pages/LandingPage.js';
import PicAnalyzer from './pages/PicAnalyzer.js';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<LandingPage/>} />
        <Route path="/pic" element={<PicAnalyzer/>} />
      </Routes>
    </Router>
  );
}

export default App;
