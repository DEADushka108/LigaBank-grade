import axios from 'axios';

const BASE_URL = `https://api.exchangeratesapi.io/`;
const REQUEST_TIMEOUT = 5000;

export const createAPI = () => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: false,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    throw err.message;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
