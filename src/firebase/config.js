import firebase from "firebase";

import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJ2BxY1HGpckC_Y88tUhvwnhmHiWQ1kg0",
  authDomain: "public-art-gallery.firebaseapp.com",
  projectId: "public-art-gallery",
  storageBucket: "public-art-gallery.appspot.com",
  messagingSenderId: "103453354104",
  appId: "1:103453354104:web:06dc7b381178937186258d",
  measurementId: "G-LV61XV0SRP",
};

// Initialize firebase app
firebase.initializeApp(firebaseConfig);

export const storage = firebase.storage();
export const db = firebase.firestore();
export const auth = firebase.auth();
