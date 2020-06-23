import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC96OOqXiCahRUjkKRPNG2Nc1TFU9AgHas",
  authDomain: "crown-db-4d8e0.firebaseapp.com",
  databaseURL: "https://crown-db-4d8e0.firebaseio.com",
  projectId: "crown-db-4d8e0",
  storageBucket: "crown-db-4d8e0.appspot.com",
  messagingSenderId: "461462099332",
  appId: "1:461462099332:web:a08702fa720c82590af9d1",
  measurementId: "G-R5NHBFLQRT",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ pormpt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
