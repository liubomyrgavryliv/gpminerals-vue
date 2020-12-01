import Vue from 'vue'
import axios from 'axios'
import ApiService from '../boot/api.service';

Vue.prototype.$axios = axios
ApiService.init();