import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/home/home';
import Quote from './components/quotes/quotes';
import NavBar from './components/NavBar';

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/Calculator" element={<Calculator />} />
      <Route path="/Quote" element={<Quote />} />
    </Routes>
  </BrowserRouter>

);
export default App;
