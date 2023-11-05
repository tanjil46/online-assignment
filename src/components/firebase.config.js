// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9ZJ_jSl2ITdPRLMZtrE_aCY88ILpMgJA",
  authDomain: "study-online-assign.firebaseapp.com",
  projectId: "study-online-assign",
  storageBucket: "study-online-assign.appspot.com",
  messagingSenderId: "446736457554",
  appId: "1:446736457554:web:6ce996bdf31d32ed1ee48b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)

export default auth