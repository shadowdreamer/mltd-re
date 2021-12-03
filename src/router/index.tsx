import React, { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import Index from '../pages/index'
const About = lazy(() => import('../pages/about'));
const Card = lazy(() => import('../pages/card'));
function Router() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/card/:id" element={
        <Suspense fallback={'loading'}>
          <Card />
        </Suspense>
      } />
      <Route path="/about" element={
        <Suspense fallback={'loading'}>
          <About />
        </Suspense>
      } />
    </Routes>
  );
}

export default Router;
