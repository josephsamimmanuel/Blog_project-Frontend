// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyB6pAB8Yv-1VuxfyirltuRO0WzqRp1qY4U",
  authDomain: "blogdb-bde4f.firebaseapp.com",
  projectId: "blogdb-bde4f",
  storageBucket: "blogdb-bde4f.appspot.com",
  messagingSenderId: "266998224871",
  appId: "1:266998224871:web:6836e14c8bc42accc60f42",
  measurementId: "G-WP2P8V4C1Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth