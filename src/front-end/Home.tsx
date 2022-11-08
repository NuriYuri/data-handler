import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="app">
      <div className="tool-bar" />
      <div className="menu" />
      <div className="entry-bar" />
      <main>
        <div className="data-grid">
          <div className="group grid-span4">
            <span>This is a home</span>
            <a role="button" onClick={() => navigate('/test', { replace: true })}>
              Click
            </a>
          </div>
          <div className="group grid-span2">0</div>
          <div className="group grid-span2">0</div>
          <div className="group grid-span1">0</div>
          <div className="group grid-span1">0</div>
          <div className="group grid-span1">0</div>
          <div className="group grid-span1">0</div>
        </div>
      </main>
    </div>
  );
};
