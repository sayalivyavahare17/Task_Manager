// src/firebase.js

// Import the necessary functions from Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // Import Firebase Authentication
import { getFirestore } from "firebase/firestore";  // Import Firestore (DB)

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJl1k7BLfcfa33Su426C1SJj4CLttfj1g",
  authDomain: "project-f12ae.firebaseapp.com",
  projectId: "project-f12ae",
  storageBucket: "project-f12ae.firebasestorage.app",
  messagingSenderId: "212462136793",
  appId: "1:212462136793:web:501fadc11e465221fefdc8",
  measurementId: "G-S97PHZFSZR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);  // Firebase Authentication
const db = getFirestore(app);  // Firestore Database

// Export Firebase services to be used in other files
export { auth, db };
