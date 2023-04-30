import axios from 'axios';

var authData = JSON.parse(localStorage.getItem('auth'));
const instance = axios.create({
  baseURL: 'https://retailxpress.herokuapp.com/api/v1',
});

instance.interceptors.request.use(
  config => {
    const data = JSON.parse(localStorage.getItem('auth'));
    if (data.token) {
      config.headers['x-auth-token'] = data.token;
    }
    return config;
  },
  error => Promise.reject(error)
);

instance.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401 && error.response.statusText === 'Unauthorized') {
      localStorage.clear();
      if(authData.merchant_type) {
        // window.location.href='/login'
        
      }else {
        // window.location.href='/auth'

      }
      return;
    }
    return Promise.reject(error);
  }
);

export default instance
