 // Importando o Firebase
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";

  // Sua configuração do Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyBLkMv2N_cnG6q-9spUj01wvxRnfWSr6XY",
    authDomain: "cookie-brasil.firebaseapp.com",
    projectId: "cookie-brasil",
    storageBucket: "cookie-brasil.appspot.com",
    messagingSenderId: "202105498916",
    appId: "1:202105498916:web:d161e68c42e66c8f8997b1",
    measurementId: "G-6KZE06S4SF"
  };

  // Inicializar o Firebase
  const app = initializeApp(firebaseConfig);

  // Ativar Analytics se necessário
  const analytics = getAnalytics(app);