// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9buDeJsIV5UmtJE1CsJAFpXaP5JzS5iw",
  authDomain: "karlingo-ln.firebaseapp.com",
  databaseURL: "https://karlingo-ln-default-rtdb.firebaseio.com",
  projectId: "karlingo-ln",
  storageBucket: "karlingo-ln.appspot.com",
  messagingSenderId: "410860326084",
  appId: "1:410860326084:web:a09bcfe5a933bac15d8d91",
  measurementId: "G-NLXMNL4LR3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
export default app;
