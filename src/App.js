import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Results from './pages/Results';
import Drivers from './pages/Drivers';
import Teams from './pages/Teams';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/schedule' element={<Schedule />} />
          <Route path='/results' element={<Results />} />
          <Route path='/drivers' element={<Drivers />} />
          <Route path='/teams' element={<Teams />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>    
  );
};

export default App;