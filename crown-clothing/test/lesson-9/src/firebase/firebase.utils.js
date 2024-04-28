import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBrXalMfMpcVuIbuXI7VtIFMYELEd6WpMQ",
  authDomain: "crown-db-99b4b.firebaseapp.com",
  projectId: "crown-db-99b4b",
  storageBucket: "crown-db-99b4b.appspot.com",
  messagingSenderId: "546515365078",
  appId: "1:546515365078:web:6069b820193bdd16db2d77",
  measurementId: "G-VSYSS3L4MJ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
