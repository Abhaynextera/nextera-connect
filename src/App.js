import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home'; 
import About from './components/About';
import Career from './components/Career';
import Contact from './components/Contact';
import ProductDevelopment from './components/services/ProductDevelopment';
import Staffing from './components/services/Staffing';
import Middleware from './components/services/Middleware';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/services/product-development" element={<ProductDevelopment />}/>
        <Route path="/services/general-staffing-services" element={<Staffing />}/>
        <Route path="/services/middleware-enterprise-integration" element={<Middleware />}/>
      </Routes>
    </>
  );
}

export default App;

