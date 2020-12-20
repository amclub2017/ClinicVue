import axios from 'axios';
import { baseURL } from './api';
export default {
  getprofileUser() {
    return axios
      .get(baseURL + '/user/profile' , {
         headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
      })
      .then(response => response.data);
  },
};