// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6mWTmFB-s9XinjbTl2SQVCKcGjWeYLNY",
  authDomain: "gdweatherapp.firebaseapp.com",
  projectId: "gdweatherapp",
  storageBucket: "gdweatherapp.appspot.com",
  messagingSenderId: "1013116169245",
  appId: "1:1013116169245:web:8dbed6fa7c8262abae2af4",
  measurementId: "G-VL5LCXK8DR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);