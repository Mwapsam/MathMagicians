import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CalcuPage from './CalcuPage';
import Home from './Home';
import Navbar from './Navbar';
import Quotes from './Quotes';

const App = () => (
  <Routes>
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="/CalcuPage" element={<CalcuPage />} />
      <Route path="/Quotes" element={<Quotes />} />
    </Route>
  </Routes>
);

export default App;
