// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBb5LrB4btE9ZweKiLDS-_56hcWT3mxk08",
  authDomain: "foody-eac2a.firebaseapp.com",
  projectId: "foody-eac2a",
  storageBucket: "foody-eac2a.appspot.com",
  messagingSenderId: "120635649803",
  appId: "1:120635649803:web:404ddf514b78ebf38bbc0e",
  measurementId: "G-L3N0G77XQ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)

export {auth, db, storage}