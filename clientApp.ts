import firebase,  { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

/*const clientCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};*/
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQWSCBD6xeBKd4LesmrK89zpSS76h0bLM",
    authDomain: "react-app-cursos-5a9f4.firebaseapp.com",
    projectId: "react-app-cursos-5a9f4",
    storageBucket: "react-app-cursos-5a9f4.appspot.com",
    messagingSenderId: "486758556020",
    appId: "1:486758556020:web:9ad73f11e79847940f8c21"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebase;
