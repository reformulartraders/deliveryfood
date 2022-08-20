// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAy4VqaAzdBT9rVbdybefSeJPiljYKdw1g",
  authDomain: "ording-83e6b.firebaseapp.com",
  projectId: "ording-83e6b",
  storageBucket: "ording-83e6b.appspot.com",
  messagingSenderId: "597519792518",
  appId: "1:597519792518:web:3b275640d210dce05a9407",
  measurementId: "G-594DLHZ28S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
