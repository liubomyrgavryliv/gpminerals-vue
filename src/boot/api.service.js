import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { API_URL } from "./config.js";

const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = API_URL;
    Vue.axios.defaults.xsrfCookieName = "csrftoken";
    Vue.axios.defaults.xsrfHeaderName = "X-CSRFToken";
  },

//   setHeader() {
//     Vue.axios.defaults.headers.common["Authorization"] = `Bearer ${
//       JwtService.getToken().access
//     }`;
//   },

//   removeHeader() {
//     delete Vue.axios.defaults.headers.common["Authorization"];
//   },

  get(resource, slug = "", params) {
    return Vue.axios.get(`${resource}/${slug}`, params).catch(error => {
      throw new Error(`ApiService ${error}`);
    });
  },

};

export default ApiService;
