// Import the functions you need from the SDKs you need

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAehVYZ2S9-492pMgQhV-lagTGdQY3QKhQ",
  authDomain: "my-blogs-3fad4.firebaseapp.com",
  projectId: "my-blogs-3fad4",
  storageBucket: "my-blogs-3fad4.appspot.com",
  messagingSenderId: "271413831076",
  appId: "1:271413831076:web:0081ae733b8676fe8e0d31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();