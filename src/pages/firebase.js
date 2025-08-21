import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4lsIKa-b51x6CXu4v0CTkIbFkO76ApUo",
  authDomain: "studi-rad-webinar.firebaseapp.com",
  projectId: "studi-rad-webinar",
  storageBucket: "studi-rad-webinar.firebasestorage.app",
  messagingSenderId: "925521313915",
  appId: "1:925521313915:web:527a72e06eb0d1539f22de",
  measurementId: "G-3Z6QFNN3MK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore
export const db = getFirestore(app);
