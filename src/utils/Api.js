import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=200&nat=us";
const APIKEY = "";

export default {
  getUsers: function() {
    return axios.get(BASEURL);
  }
};