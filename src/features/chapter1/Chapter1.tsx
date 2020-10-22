import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  incrementCipher,
  decrementCipher,
  selectAlpha,
  selectCipher,
  selectCipherMove,
} from './chpater1Slice';

export const Chapter1 = () => {
  const dispatch = useDispatch();

  const alpha = useSelector(selectAlpha);
  const cipher = useSelector(selectCipher);
  const move = useSelector(selectCipherMove);

  return (
    <div>
      Chapter1
      <p>{alpha}</p>
      <div>
        <button onClick={() => dispatch(decrementCipher())}>-</button>
        <span>{cipher}</span>
        <button onClick={() => dispatch(incrementCipher())}>+</button>
      </div>
      Move : <span>{move}</span>
    </div>
  );
};
