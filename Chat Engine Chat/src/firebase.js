import firebase from "firebase/app";
import "firebase/auth";
// Firebase account details 
export const auth = firebase.initializeApp({
  apiKey: "AIzaSyDxAe7yBXy_HWDgcjUm0-1z-i--9TETuJU",
  authDomain: "connect-34028.firebaseapp.com",
  projectId: "connect-34028",
  storageBucket: "connect-34028.appspot.com",
  messagingSenderId: "96051184276",
  appId: "1:96051184276:web:5265d2a1a8f3d52f5e6a81",
  measurementId: "G-KTK91LP7BY"
  }).auth();