// src/firebaseAdmin.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your admin Firebase configuration (already correct)
const adminFirebaseConfig = {
  apiKey: "AIzaSyBY1KiDfPSAHrxJfRQgcCpf1OkPZOrbNb0",
  authDomain: "studirad-admin-portal.firebaseapp.com",
  projectId: "studirad-admin-portal",
  storageBucket: "studirad-admin-portal.firebasestorage.app",
  messagingSenderId: "287772443459",
  appId: "1:287772443459:web:a91211f5621deb6bd965f6"
};

// ✅ Initialize the admin Firebase app separately
const adminApp = !getApps().some(app => app.name === "adminApp")
  ? initializeApp(adminFirebaseConfig, "adminApp")
  : getApp("adminApp");

// ✅ Export the admin versions of Firebase services
export const adminAuth = getAuth(adminApp);
export const adminDb = getFirestore(adminApp);
export const adminStorage = getStorage(adminApp);
