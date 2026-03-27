/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Component, ReactNode } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import TrackingPage from './pages/Tracking';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Inspections from './pages/Inspections';
import { GlobalInteractive } from './components/Interactive/GlobalInteractive';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rastreo" element={<TrackingPage />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/inspecciones" element={<Inspections />} />
      </Routes>
      <GlobalInteractive />
    </BrowserRouter>
  );
}
