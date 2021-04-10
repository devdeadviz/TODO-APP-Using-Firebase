import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";
import "firebase/functions";

firebase.initializeApp({
  apiKey: "AIzaSyDU58Kp0qsd3-eu59KGDYD8WdtOvtGKpQI",
  authDomain: "todo-app-e309f.firebaseapp.com",
  projectId: "todo-app-e309f",
  storageBucket: "todo-app-e309f.appspot.com",
  messagingSenderId: "212198015422",
  appId: "1:212198015422:web:44c0b5ff61ef71a776b9ef",
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const functions = firebase.functions();

export default firebase;
