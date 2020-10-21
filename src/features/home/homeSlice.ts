import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  greeting: 'Hello World!',
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
  },
});

export default homeSlice.reducer;
