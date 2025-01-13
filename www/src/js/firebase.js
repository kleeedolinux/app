import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
  
const app = firebase.initializeApp({
  apiKey: "AIzaSyBLkMv2N_cnG6q-9spUj01wvxRnfWSr6XY",
  authDomain: "cookie-brasil.firebaseapp.com",
  projectId: "cookie-brasil",
  storageBucket: "cookie-brasil.appspot.com",
  messagingSenderId: "202105498916",
  appId: "1:202105498916:web:d161e68c42e66c8f8997b1",
  measurementId: "G-6KZE06S4SF"
});

const analytics = getAnalytics(app);

console.log(analytics);