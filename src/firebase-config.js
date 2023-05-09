import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBOXj8OGGo5EF7l0R-cdtE1asKKNh19B3Q",
  authDomain: "tadbml.firebaseapp.com",
  databaseURL: "https://tadbml-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tadbml",
  storageBucket: "tadbml.appspot.com",
  messagingSenderId: "102640250557",
  appId: "1:102640250557:web:148877dae5fdfbd95cd1d4",
  measurementId: "G-32LYDD6J5M"
};


// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
