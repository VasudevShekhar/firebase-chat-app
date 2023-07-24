// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTQg7Qn2O4ziQQMODgbFeMgE5Cx7Q7K8w",
  authDomain: "chat-app-6a5fc.firebaseapp.com",
  projectId: "chat-app-6a5fc",
  storageBucket: "chat-app-6a5fc.appspot.com",
  messagingSenderId: "69982379854",
  appId: "1:69982379854:web:2c6423bbdc0cd5ed43481f",
  measurementId: "G-1BTJ9DPJH2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
