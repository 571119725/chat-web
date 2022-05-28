import axios from 'axios';
const Axios = axios.create({
  baseURL:'http://49.232.174.87:9090/api/v0',
  timeout: 10000,
  header:{'Content-Type': 'application/json'},
  withCredentials: false
});
Axios.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    Promise.reject(err);
  }
);
Axios.interceptors.response.use(
  res => {
    const response = res?.data;
    const errorCode = response?.code;
    switch (errorCode) {
      default :
      return response;
    }
  },
  err => {
    return Promise.reject(err);
  }
);
export default Axios;