// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJX2yNuUWWNArXJvSIwBvE75tMhK36_LA",
  authDomain: "clase-deploy.firebaseapp.com",
  projectId: "clase-deploy",
  storageBucket: "clase-deploy.appspot.com",
  messagingSenderId: "427368795486",
  appId: "1:427368795486:web:8689c33a27ce08f059d3cf",
  measurementId: "G-4S992KV3H0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);