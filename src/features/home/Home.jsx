import React from 'react';
import { useSelector } from 'react-redux';

export const Home = () => {
  const greeting = useSelector(state => state.home.greeting);

  return (
    <div>
      <h4>Home</h4>
     <p>{greeting}</p>
    </div>
  );
};
