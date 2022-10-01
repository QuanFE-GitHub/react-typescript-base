import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { StorageConstants, baseURL } from '../utils/constants';
import { authRoutes } from '../utils/routers';

const axiosClient = axios.create({
  baseURL: `${baseURL}/api`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    // Do something before request is sent
    if (!config?.headers) {
      throw new Error(
        "Expected 'config' and 'config.headers' not to be undefined"
      );
    }
    const token = localStorage.getItem(StorageConstants.ACCESS_TOKEN);
    // const token = process.env.TOKEN;
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response: AxiosResponse) {
    return response.data;
  },

  function (error) {
    if (
      (error.response.status === 401 &&
        error.response.data.message === 'Unauthorized') ||
      (error.response.status === 500 &&
        error.response.data.message === 'Error: invalid signature') ||
      (error.response.status === 500 &&
        error.response.data.message === 'Error: Permission denied')
    ) {
      window.location.href = authRoutes[0]?.path;

      window.localStorage.clear();
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
