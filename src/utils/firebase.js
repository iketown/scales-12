import firebase from "firebase";
import "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyAAeERyKaIH58i3HokvmIEFQNT6DTroQ40",
  authDomain: "scales-4bb3e.firebaseapp.com",
  databaseURL: "https://scales-4bb3e.firebaseio.com",
  projectId: "scales-4bb3e",
  storageBucket: "scales-4bb3e.appspot.com",
  messagingSenderId: "534107413294"
};

export const uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: "/my-latest-page",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => true
  },
  tosUrl: "/tos",
  privacyPolicyUrl: "/privacy-policy"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export default firebase;
