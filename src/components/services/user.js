import axios from 'axios';
import { baseURL } from './api';
export default {
  getprofileOfficer() {
    return axios
      .get(baseURL + '/user/profileofficer' , {
         headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
      })
      .then(response => response.data);
  },
  getprofilePhysician() {
    return axios
      .get(baseURL + '/Physician/profile' , {
         headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
      })
      .then(response => response.data);
  },
  createPhysician(createPhysicianForm) {
    return axios
      .post(baseURL + '/user/officer-createphysician' ,createPhysicianForm, {
         headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
      })
      .then(response => response.data);
  },
  officerGetProfilePhysician() {
    return axios
      .get(baseURL + '/user/officer/profilephysician' , {
         headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
      })
      .then(response => response.data);
  },
  editUser() {
    return axios
      .get(baseURL + '/user/${uuid}' , {
         headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
      })
      .then(response => response.data);
  },
  updateUser() {
    return axios
      .get(baseURL + '/user/update/${uuid}' , {
         headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
      })
      .then(response => response.data);
  },
};