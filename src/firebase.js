import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBvjfVuYxHEo0D3SwdO_E1UHa9zjjLGp54",
    authDomain: "clone-94a08.firebaseapp.com",
    databaseURL: "https://clone-94a08-default-rtdb.firebaseio.com",
    projectId: "clone-94a08",
    storageBucket: "clone-94a08.appspot.com",
    messagingSenderId: "174545971407",
    appId: "1:174545971407:web:3ca566226e0311136aafba"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export  {db, auth};