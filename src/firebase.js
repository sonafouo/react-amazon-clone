import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLJHUwYkt1zXX3xmtAvES347d9GeicJCs",
  authDomain: "challenge-6165d.firebaseapp.com",
  projectId: "challenge-6165d",
  storageBucket: "challenge-6165d.appspot.com",
  messagingSenderId: "565353480408",
  appId: "1:565353480408:web:132f646d3a44fbcb88d7ad",
  measurementId: "G-JDQDHX23Q5"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
 
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };


