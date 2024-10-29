// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQdI_H5k76taHmXOtm-xN57cCKUsOgZJI",
  authDomain: "xmes-75c10.firebaseapp.com",
  projectId: "xmes-75c10",
  storageBucket: "xmes-75c10.appspot.com",
  messagingSenderId: "714310629277",
  appId: "1:714310629277:web:f34f907c9c166dee95a174",
  measurementId: "G-Z9J0Y0SK30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);