// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { firestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnhEnwV7GWij-GK2pKFy0BX1bOyvtLRSo",
  authDomain: "zycare-8317a.firebaseapp.com",
  projectId: "zycare-8317a",
  storageBucket: "zycare-8317a.appspot.com",
  messagingSenderId: "373265535192",
  appId: "1:373265535192:web:2b266538f92daff2f607ad",
  measurementId: "G-XY17W97JSV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const AUTH = getAuth(app)

// const db = firestore(app)


