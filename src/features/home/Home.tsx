import React from 'react';
import { useSelector } from 'react-redux';

import {
  selectGreeting
} from './homeSlice';

export const Home = () => {
  const greeting = useSelector(selectGreeting);

  return (
    <div>
      <h4>Home</h4>
     <p>{greeting}</p>
    </div>
  );
};
