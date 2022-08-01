// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestorm } from "firebase/firestorm";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "twitter-v1-c3996.firebaseapp.com",
  projectId: "twitter-v1-c3996",
  storageBucket: "twitter-v1-c3996.appspot.com",
  messagingSenderId: "1097191803448",
  appId: "1:1097191803448:web:7d1fe27b5528c61d53b4cd",
  measurementId: "G-9LHX2QSRR3",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestorm();
const storage = getStorage();

export { app, db, storage };
