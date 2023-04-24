// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB34u2dXL11fPAVa5TCOFMcJnmoh8fLEi0",
  authDomain: "blog-auth-ed34e.firebaseapp.com",
  projectId: "blog-auth-ed34e",
  storageBucket: "blog-auth-ed34e.appspot.com",
  messagingSenderId: "343288437401",
  appId: "1:343288437401:web:9ae3e80560c6eed3873608",
  measurementId: "G-KBS8V65VFM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
