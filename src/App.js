import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home'; 
import About from './components/About';
import Career from './components/Career';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </>
  );
}

export default App;

