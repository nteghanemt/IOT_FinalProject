// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Database } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-aoU16El2xsvxKyctepp2lr6Yj6wmbKA",
  authDomain: "iot-final-project-7ea84.firebaseapp.com",
  projectId: "iot-final-project-7ea84",
  storageBucket: "iot-final-project-7ea84.appspot.com",
  messagingSenderId: "797217063345",
  appId: "1:797217063345:web:3795e62c18c37aa386fd90",
  measurementId: "G-73PCRLNRQJ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

export default database;


//import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
//import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


// const auth = getAuth();
// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
// });

