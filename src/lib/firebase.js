// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpu0Cak-SVH8DajyZkFujnWXwKjTg4oC0",
  authDomain: "tasteofburma-4e93e.firebaseapp.com",
  projectId: "tasteofburma-4e93e",
  storageBucket: "tasteofburma-4e93e.appspot.com",
  messagingSenderId: "150901828658",
  appId: "1:150901828658:web:7d75e08ad8d4d24d95a02b",
  measurementId: "G-PS80W479XT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;
