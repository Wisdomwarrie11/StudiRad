// src/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1ohcDmEayFGq1kH6GuuNczvJt8oY27WM",
  authDomain: "studirad-platform-new.firebaseapp.com",
  projectId: "studirad-platform-new",
  storageBucket: "studirad-platform-new.firebasestorage.app",
  messagingSenderId: "245412794093",
  appId: "1:245412794093:web:5986d5b30e4976701786e4"
};

// Initialize Firebase safely (prevents duplicate app error)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Export Firestore and Auth
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
