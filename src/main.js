import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as firebase from 'firebase';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyB0yl77pgstxI38jKt0_fPHOzLcrulI5Gc",
  authDomain: "rogervuelogin.firebaseapp.com",
  databaseURL: "https://rogervuelogin-default-rtdb.firebaseio.com",
  projectId: "rogervuelogin",
  storageBucket: "rogervuelogin.appspot.com",
  messagingSenderId: "493736565225",
  appId: "1:493736565225:web:4cfc8bea8b446105931378",
  measurementId: "G-FEWXG32CYD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
