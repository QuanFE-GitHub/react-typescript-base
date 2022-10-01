import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../stores/store';
import { StorageConstants } from '../../utils/constants';
import { fetchLogin } from './authThunk';

interface UserState {
  userRole: {} | any;
  accessToken: null | any;
}

const roleLocal: any = localStorage.getItem(StorageConstants.CURRENT_USER);

const initialState: UserState = {
  userRole: JSON.parse(roleLocal) || '',
  accessToken: localStorage.getItem(StorageConstants.ACCESS_TOKEN) || '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchLogin.pending, (state, action) => {})
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.userRole = action.payload.user;
        state.accessToken = action.payload.token;
      })
      .addCase(fetchLogin.rejected, (state, action) => {});
  },
});

export const AuthSliceAction = authSlice.actions;

export const selectFetchUserRole = (state: RootState) =>
  state.auth.userRole.role;
export const selectFetchUserToken = (state: RootState) =>
  state.auth.accessToken;

const authReducer = authSlice.reducer;

export default authReducer;
