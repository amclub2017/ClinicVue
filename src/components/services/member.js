import axios from 'axios';
import { baseURL } from './api';
export default {
  getprofileMember() {
    return axios
      .get(baseURL + '/member/profile' , {
         headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
      })
      .then(response => response.data);
  },
};





