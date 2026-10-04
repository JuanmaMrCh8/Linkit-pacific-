/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Component, ReactNode } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Inspections from './pages/Inspections';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Sourcing from './pages/services/Sourcing';
import Logistics from './pages/services/Logistics';
import FactoryVisits from './pages/services/FactoryVisits';
import FairAccompaniment from './pages/services/FairAccompaniment';
import ChinaEntry from './pages/services/ChinaEntry';
import Shopping from './pages/services/Shopping';
import Customs from './pages/services/Customs';
import { GlobalInteractive } from './components/Interactive/GlobalInteractive';
import ScrollToTop from './components/ScrollToTop';
import RouteMeta from './components/RouteMeta';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <RouteMeta />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/servicios/sourcing" element={<Sourcing />} />
        <Route path="/servicios/compras" element={<Shopping />} />
        <Route path="/servicios/logistica" element={<Logistics />} />
        <Route path="/servicios/aduanas" element={<Customs />} />
        <Route path="/servicios/entrada-china" element={<ChinaEntry />} />
        <Route path="/servicios/visita-fabricas" element={<FactoryVisits />} />
        <Route path="/servicios/ferias" element={<FairAccompaniment />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/inspecciones" element={<Inspections />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
      <GlobalInteractive />
    </BrowserRouter>
  );
}
