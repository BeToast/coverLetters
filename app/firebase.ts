// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgRqeJ2IHo6WyxPTqM-j8PsYf9mCTT1t8",
  authDomain: "blake-prestonized.firebaseapp.com",
  projectId: "blake-prestonized",
  storageBucket: "blake-prestonized.appspot.com",
  messagingSenderId: "483376652902",
  appId: "1:483376652902:web:976addc43103c73dd043a7",
  measurementId: "G-DZBJF5M388"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const getFirebaseApp = () => {
  return app;
}

// const analytics = getAnalytics(app);
