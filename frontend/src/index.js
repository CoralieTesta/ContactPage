import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ContactA } from './pages/ContactA/ContactA';
import { ContactB } from './pages/ContactB/ContactB';
import { ContactC } from './pages/ContactC/ContactC';
import { ContactD } from './pages/ContactD/ContactD';
import { ContactE } from './pages/ContactE/ContactE';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/contactA' element={<ContactA />} />
        <Route path='/contactB' element={<ContactB />} />
        <Route path='/contactC' element={<ContactC />} />
        <Route path='/contactD' element={<ContactD />} />
        <Route path='/contactE' element={<ContactE />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

