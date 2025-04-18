// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-ZII557sRIiOPgFczyaseyL4G_S8CfWc",
  authDomain: "dragon-news-4ae9b.firebaseapp.com",
  projectId: "dragon-news-4ae9b",
  storageBucket: "dragon-news-4ae9b.firebasestorage.app",
  messagingSenderId: "1082792476688",
  appId: "1:1082792476688:web:565957b8b78ade50dfca95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;


// npm install -g firebase-tools
// firebase login
// firebase init
// firebase deploy