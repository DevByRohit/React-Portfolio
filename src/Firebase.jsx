// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0NxtIwnW15fUMt-9bBg8Gik1Pn-yIbWE",
  authDomain: "portfolio-07-07.firebaseapp.com",
  projectId: "portfolio-07-07",
  storageBucket: "portfolio-07-07.appspot.com",
  messagingSenderId: "77328730133",
  appId: "1:77328730133:web:1c9fcc0eeb0e56cccc261c",
  measurementId: "G-BPXCPRZ3L2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);