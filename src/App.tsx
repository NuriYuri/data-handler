import React from 'react';
import ReactDOM from 'react-dom/client';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Home } from './front-end/Home';
import { Test } from './front-end/Test';

const render = () => {
  const rootDiv = document.getElementById('root') || document.body;
  const root = ReactDOM.createRoot(rootDiv);
  root.render(
    <MemoryRouter>
      <Routes>
        <Route path="test" element={<Test />} />
        <Route element={<Home />} index />
      </Routes>
    </MemoryRouter>
  );
};

render();
