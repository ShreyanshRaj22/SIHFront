// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcmfRdAcFWQiPeR7eSWQDtFtROhhRRotI",
  authDomain: "react-firebase-testing-5f11f.firebaseapp.com",
  projectId: "react-firebase-testing-5f11f",
  storageBucket: "react-firebase-testing-5f11f.appspot.com",
  messagingSenderId: "399805137166",
  appId: "1:399805137166:web:e45cedd114be28dcac575f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth } ;   