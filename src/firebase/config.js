import firebase from "firebase";

import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3JXsYT_9tTAawyqp9mcdPrFfvfcVfGzY",
  authDomain: "public-art-gallery-4a6db.firebaseapp.com",
  projectId: "public-art-gallery-4a6db",
  storageBucket: "public-art-gallery-4a6db.appspot.com",
  messagingSenderId: "604039083596",
  appId: "1:604039083596:web:75bef1f8825625a890e6e9",
  measurementId: "G-4M2R8B8PT8",
};

// Initialize firebase app
firebase.initializeApp(firebaseConfig);

export const storage = firebase.storage();
export const db = firebase.firestore();
export const auth = firebase.auth();
