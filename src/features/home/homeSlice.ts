import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';

interface HomeState {
  greeting: string;
  // cipher: ({ key: string, value: string[] })[];
}

const initialState: HomeState = {
  greeting: 'Hello World!',
  // cipher: 
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
  },
});

export const selectGreeting = (state: RootState) => state.home.greeting;

export default homeSlice.reducer;
