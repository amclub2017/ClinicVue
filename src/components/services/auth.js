import axios from 'axios';
import { baseURL } from './api';
export default {
  loginAdmin(credentials) {
    console.log(credentials);
    return axios
      .post(baseURL + '/user/loginofficer', credentials)
      .then(response => response.data);
  },
  getToken(){
    return localStorage.getItem('token')
  },

};