
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBzDpKIBww3oK5aBRKmURZZGM6p5QEFTtA",
  authDomain: "social-development-3792f.firebaseapp.com",
  projectId: "social-development-3792f",
  storageBucket: "social-development-3792f.firebasestorage.app",
  messagingSenderId: "506037053769",
  appId: "1:506037053769:web:58dcfe530cbe72eb97d298"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);