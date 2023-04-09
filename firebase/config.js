// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABzWtJNyInRsJwJUOJa13uspumVEAyNs8",
  authDomain: "blog-vue-e73fa.firebaseapp.com",
  projectId: "blog-vue-e73fa",
  storageBucket: "blog-vue-e73fa.appspot.com",
  messagingSenderId: "531121837989",
  appId: "1:531121837989:web:c8be9076553786103a7a4c"
};

// Initialize Firebase
const fb = initializeApp(firebaseConfig);

export {fb}