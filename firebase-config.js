// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcj86YuvsQ3R32pFXPkFtGngNvj-fcy1k",
  authDomain: "foodshare-5a612.firebaseapp.com",
  projectId: "foodshare-5a612",
  storageBucket: "foodshare-5a612.appspot.com",
  messagingSenderId: "174610938270",
  appId: "1:174610938270:web:9ff892a57ba569ef133e8f",
  measurementId: "G-TC4WN601YB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);