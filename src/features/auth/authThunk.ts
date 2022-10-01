import { createAsyncThunk } from '@reduxjs/toolkit';
import authApi from '../../apis/auth';
import { StorageConstants } from '../../utils/constants';

interface UserState {
  email: String;
  password: String;
}

export const fetchLogin = createAsyncThunk(
  'auth/fetchLogin',
  async (payload: Partial<UserState>, { rejectWithValue }) => {
    try {
      const response = await authApi.login(payload);
      localStorage.setItem(
        StorageConstants.ACCESS_TOKEN,
        JSON.stringify(response.data.token)
      );
      localStorage.setItem(
        StorageConstants.CURRENT_USER,
        JSON.stringify(response.data.user)
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
