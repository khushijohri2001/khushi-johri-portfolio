
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAsfnMSmYMd0px3-U8uXT241FCOJV5E5iU",
  authDomain: "khushi-johri-portfolio.firebaseapp.com",
  projectId: "khushi-johri-portfolio",
  storageBucket: "khushi-johri-portfolio.appspot.com",
  messagingSenderId: "602908969418",
  appId: "1:602908969418:web:28c8ed282e170e3a976733",
  measurementId: "G-W9JL98KJXV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);