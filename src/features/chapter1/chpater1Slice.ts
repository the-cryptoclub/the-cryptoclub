import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';

interface Chapter1State {
  alpha_letters: string[],
  origin_letters: string[],
  cipher: number,
  text: string,
  encoding: boolean,
}

const initialState: Chapter1State = {
  alpha_letters: [
    'a', 'b','c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x',
    'y', 'z'
  ],
  origin_letters: [
    'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z'
  ],
  cipher: 3,
  text: 'hi hello',
  encoding: false,
};

export const chapter1Slice = createSlice({
  name: 'chapter1',
  initialState,
  reducers: {
    incrementCipherByAmount: (state, action) => {
      state.cipher = action.payload;
    },
    incrementCipher: (state) => {
      state.cipher += 1;
      // if (state.cipher === state.origin_letters.length) {
      //   state.cipher = 0;
      // }
    },
    decrementCipher: (state) => {
      state.cipher -= 1;
      // if (state.cipher < 0) {
      //   state.cipher = state.origin_letters.length - 1;
      // }
    },
  },
});

export const {
  incrementCipher,
  decrementCipher,
} = chapter1Slice.actions;

export const selectAlpha = (state: RootState) => state.chapter1.alpha_letters;
export const selectCipher = (state: RootState) => state.chapter1.cipher;
export const selectCipherMove = (state: RootState) => {
  let result = (state.chapter1.cipher % state.chapter1.origin_letters.length);
  if (result < 0) {
    result += state.chapter1.origin_letters.length;
  }
  return result;
}

export default chapter1Slice.reducer;
