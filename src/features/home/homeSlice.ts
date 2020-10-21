import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';

interface HomeState {
  greeting: string;
}

const initialState: HomeState = {
  greeting: 'Hello World!',
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
  },
});

export const selectGreeting = (state: RootState) => state.home.greeting;

export default homeSlice.reducer;
