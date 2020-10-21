import { configureStore } from '@reduxjs/toolkit';

import homeReducer from '../features/home/homeSlice';
import chapter1Reducer from '../features/chapter1/chpater1Slice';

export const store = configureStore({
  reducer: {
    home: homeReducer,
    chapter1: chapter1Reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
