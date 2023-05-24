// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhpguYRIkk4A2Zt3ZypWrb3ldru6yHPA4",
  authDomain: "nested-cd.firebaseapp.com",
  projectId: "nested-cd",
  storageBucket: "nested-cd.appspot.com",
  messagingSenderId: "876259289596",
  appId: "1:876259289596:web:e11512d8942a47576daa79",
  measurementId: "G-RTPKP399SP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);