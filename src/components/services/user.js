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
  //physician
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
      .get(baseURL + '/user/profilephysician' , {
         headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
      })
      .then(response => response.data);
  },
  editUser(uuid) {
    console.log(uuid);
    return axios
      .get(baseURL + `/user/${uuid}` , {
         headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
      })
      .then(response => response.data);
  },
  updateUser(form) {
    return axios
      .post(baseURL + `/user/update/` ,form, {
         headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
      })
      .then(response => response.data);
  },
    deleteUser(uuid) {
    return axios
      .delete(baseURL + `/user/${uuid}`  , {
         headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
      })
      .then(response => response.data);
  },
    
    //ติด
  searchPhysician(searchform) {

    return axios
      .get(baseURL + `/user/searchphysician/` ,searchform, {
         headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
      })
      .then(response => response.data);
  },
    //equipments
    addEquipment(equipmentForm) {
    return axios
      .post(baseURL + `/ecuipment/createquipment`  ,equipmentForm, {
         headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
      })
      .then(response => response.data);
  },
    getEquipment() {
    return axios
      .get(baseURL + `/ecuipment/`  , {
         headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
      })
      .then(response => response.data);
  },
  editEquipment(uuid) {
      console.log(uuid+'sad');
    return axios
      .get(baseURL + `/ecuipment/${uuid}`  , {
         headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
      })
      .then(response => response.data);
  },
    updateEquipment(equipmentOfficerForm) {
    return axios
      .put(baseURL + `/user/equipment/`  , equipmentOfficerForm, {
         headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
      })
      .then(response => response.data);
  },
    deleteEquipment(uuid) {
    return axios
      .delete(baseURL + `/user/equipment/${uuid}`  , {
         headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
      })
      .then(response => response.data);
  },
    
    //member 
  addMember(memberForm) {
    return axios
      .post(baseURL + `/user/createmember`  ,memberForm, {
         headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
      })
      .then(response => response.data);
  },
    getallmember() {
    return axios
      .get(baseURL + `/user/getallmember` , {
         headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
      })
      .then(response => response.data);
  },
    editMember(uuid) {
    console.log(uuid);
    return axios
      .get(baseURL + `/user/getmember/${uuid}` , {
         headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
      })
      .then(response => response.data);
  },
    searchMember(searchform) {
    return axios
      .get(baseURL + `/user/searchmember/` ,searchform, {
         headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
      })
      .then(response => response.data);
  },
};