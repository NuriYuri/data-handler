import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <p>
      <span>This is a home</span>
      <a role="button" onClick={() => navigate('/test', { replace: true })}>
        Click
      </a>
    </p>
  );
};
