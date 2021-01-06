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
      .post(baseURL + '/user/createphysician' ,createPhysicianForm, {
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
    console.log(localStorage.getItem('access_token'));
    return axios
      .get(baseURL + `/user/searchphysician?first_name=${searchform.first_name}&last_name=${searchform.last_name}`, {
     headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
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
    updateEquipment(uuid_equipment,equipmentOfficerForm) {
    return axios
      .put(baseURL + `/ecuipment/${uuid_equipment}`  , equipmentOfficerForm, {
         headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
      })
      .then(response => response.data);
  },
    deleteEquipment(uuid) {
    return axios
      .delete(baseURL + `/ecuipment/${uuid}`  , {
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
      .get(baseURL + `/user` , {
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
      .get(baseURL + `/user/member/${uuid}` , {
         headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
      })
      .then(response => response.data);
  },
    searchMember(searchform) {
    return axios
      .get(baseURL + `/user/searchmember/?first_name=${searchform.first_name}&last_name=${searchform.last_name}` , {
         headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
      })
      .then(response => response.data);
  },
    
    
    //newsManage
    
    addNews(newsForm) {
    return axios
      .post(baseURL + `/news/createnews`  ,newsForm, {
         headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
      })
      .then(response => response.data);
  },
    getallNews() {
    return axios
      .get(baseURL + `/news` , {
         headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
      })
      .then(response => response.data);
  },
    editNews(uuid) {
    return axios
      .get(baseURL + `/news/${uuid}` , {
         headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
      })
      .then(response => response.data);
  },
    updateNews(uuid,newsForm) {
    return axios
      .put(baseURL + `/news/${uuid}`  , newsForm, {
         headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
      })
      .then(response => response.data);
  },
    deleteNews(uuid) {
    return axios
      .delete(baseURL + `/news/${uuid}`  , {
         headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
      })
      .then(response => response.data);
  },
};





