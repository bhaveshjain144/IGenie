import axios, { AxiosRequestHeaders } from "axios";

axios.interceptors.request.use(async (config) => {
  const headers: AxiosRequestHeaders = {
    'Authorization': await localStorage.getItem('accessToken') || ''
  }

  config.headers = headers;
  return config;
}, (error) => {
  // Do something with request error
  return Promise.reject(error);
});