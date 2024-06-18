// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAvutWnvBxjwlXvTrE5y0mV0L-rPYyVMk",
  authDomain: "photofolio-636d9.firebaseapp.com",
  projectId: "photofolio-636d9",
  storageBucket: "photofolio-636d9.appspot.com",
  messagingSenderId: "710086942411",
  appId: "1:710086942411:web:0b41813a56b003bee3454e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };