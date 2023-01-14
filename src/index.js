import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAgPSaoQ_EID1k53cAU8HIcxpPKIOHrTI",
  authDomain: "outerwilds-43625.firebaseapp.com",
  projectId: "outerwilds-43625",
  storageBucket: "outerwilds-43625.appspot.com",
  messagingSenderId: "207941456829",
  appId: "1:207941456829:web:169e2b21854235ca27f8d4"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);