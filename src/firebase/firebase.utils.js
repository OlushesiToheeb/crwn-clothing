import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyCqRw_diEmh-OpybBsiuSAde-Nt-xS5vZ0',
  authDomain: 'crwn-clothing-db-88696.firebaseapp.com',
  databaseURL: 'https://crwn-clothing-db-88696.firebaseio.com',
  projectId: 'crwn-clothing-db-88696',
  storageBucket: 'crwn-clothing-db-88696.appspot.com',
  messagingSenderId: '204435299150',
  appId: '1:204435299150:web:fa34b136c97825ef671c1f',
  measurementId: 'G-PFRB1236H5',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
