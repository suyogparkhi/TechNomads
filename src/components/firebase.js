import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADswLgeNXip_dYVnilj_LY97CQR6uNOUM",
  authDomain: "login-auth-1136f.firebaseapp.com",
  projectId: "login-auth-1136f",
  storageBucket: "login-auth-1136f.appspot.com",
  messagingSenderId: "337900283698",
  appId: "1:337900283698:web:7815e54d57b871ccb0192b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export the auth object
export const auth = getAuth(app);
export default app;
