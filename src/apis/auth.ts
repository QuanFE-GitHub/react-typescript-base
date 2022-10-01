import axiosClient from './axiosClient';

const authApi = {
  registerAuth(data: any) {
    const url = `/auth/register`;
    return axiosClient.post(url, data);
  },
  login(params: any) {
    const url = `auth/login`;
    return axiosClient.post(url, params);
  },
};

export default authApi;
