import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/analytics";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCSXSjCvLTOJoD34XR_d70UdUhyXJW5Kqc",
  authDomain: "something-f861a.firebaseapp.com",
  projectId: "something-f861a",
  storageBucket: "something-f861a.appspot.com",
  messagingSenderId: "146847633621",
  appId: "1:146847633621:web:ab0189b67819b00b4b125c",
  measurementId: "G-38MJ0KNF6Q"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
