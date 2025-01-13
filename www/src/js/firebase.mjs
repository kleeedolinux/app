import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent } from 'firebase/analytics';
  
const app = initializeApp({
  apiKey: "AIzaSyBLkMv2N_cnG6q-9spUj01wvxRnfWSr6XY",
  authDomain: "cookie-brasil.firebaseapp.com",
  projectId: "cookie-brasil",
  storageBucket: "cookie-brasil.appspot.com",
  messagingSenderId: "202105498916",
  appId: "1:202105498916:web:d161e68c42e66c8f8997b1",
  measurementId: "G-6KZE06S4SF"
});
const analytics = getAnalytics(app);

logEvent(analytics, 'user_info', {
  userAgent: navigator.userAgent, 
  language: navigator.language, 
  platform: navigator.platform,  
  screenWidth: window.screen.width, 
  screenHeight: window.screen.height, 
  colorDepth: window.screen.colorDepth, 
  onlineStatus: navigator.onLine, 
  connectionType: navigator.connection ? navigator.connection.effectiveType : "unknown", 
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,  
  deviceMemory: navigator.deviceMemory || "unknown", 
  hardwareConcurrency: navigator.hardwareConcurrency || "unknown",  
  batteryLevel: navigator.getBattery ? (await navigator.getBattery()).level : "unknown"
});
