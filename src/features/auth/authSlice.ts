import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '~/stores/store';

interface IAuthState {
  token: string;
}

// Define the initial state using that type
const initialState: IAuthState = {
  token: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {},
    loginSuccess: (state, action: PayloadAction<string>) => {
      state.token = 'has token';
    },
  },
});

export const { login, loginSuccess } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectToken = (state: RootState) => state.counter.token;

export default authSlice.reducer;
