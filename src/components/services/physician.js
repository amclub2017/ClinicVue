import axios from 'axios';
import { baseURL } from './api';
export default {
    updateUser(form) {
    return axios
      .put(baseURL + `/physician/` ,form, {
         headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
      })
      .then(response => response.data);
  },
  getprofileOfficer() {
    return axios
      .get(baseURL + '/physician/profile' , {
         headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
      })
      .then(response => response.data);
  },
    updatePhysician(updateForm) {
    return axios
      .put(baseURL + `/physician/`  , updateForm, {
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
      .post(baseURL + `/physician/createmember`  ,memberForm, {
         headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
      })
      .then(response => response.data);
  },
    getallmember() {
    return axios
      .get(baseURL + `/physician/memberAll` , {
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
      .get(baseURL + `/physician/member/${uuid}` , {
         headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
      })
      .then(response => response.data);
  },
    searchMember(searchform) {
    return axios
      .get(baseURL + `/physician/searchmember/?first_name=${searchform.first_name}&last_name=${searchform.last_name}` , {
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
      .post(baseURL + `/physician/createequipment`  ,equipmentForm, {
         headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
      })
      .then(response => response.data);
  },
    getEquipment() {
    return axios
      .get(baseURL + `/physician/equipment`  , {
         headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
      })
      .then(response => response.data);
  },
  editEquipment(uuid) {
    return axios
      .get(baseURL + `/physician/getequipment/${uuid}`  , {
         headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
      })
      .then(response => response.data);
  },
    updateEquipment(uuid_equipment,equipmentOfficerForm) {
    return axios
      .put(baseURL + `/physician/equipment/${uuid_equipment}`  , equipmentOfficerForm, {
         headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
      })
      .then(response => response.data);
  },
    deleteEquipment(uuid) {
    return axios
      .delete(baseURL + `/physician/equipment/${uuid}`  , {
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
      .post(baseURL + `/physician/createnews`  ,newsForm, {
         headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
      })
      .then(response => response.data);
  },
    getallNews() {
    return axios
      .get(baseURL + `/physician/news` , {
         headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
      })
      .then(response => response.data);
  },
    editNews(uuid) {
    return axios
      .get(baseURL + `/physician/getnews/${uuid}` , {
         headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
      })
      .then(response => response.data);
  },
    updateNews(uuid,newsForm) {
    return axios
      .put(baseURL + `/physician/news/${uuid}`  , newsForm, {
         headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
      })
      .then(response => response.data);
  },
    deleteNews(uuid) {
    return axios
      .delete(baseURL + `/physician/news/${uuid}`  , {
         headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
      })
      .then(response => response.data);
  },
};





