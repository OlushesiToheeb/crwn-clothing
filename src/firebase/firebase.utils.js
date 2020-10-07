import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyBRlPR2JjE0boawVriPytSsXlh9JDZs2so',
  authDomain: 'crwn-clothing-db-634dd.firebaseapp.com',
  databaseURL: 'https://crwn-clothing-db-634dd.firebaseio.com',
  projectId: 'crwn-clothing-db-634dd',
  storageBucket: 'crwn-clothing-db-634dd.appspot.com',
  messagingSenderId: '337161300559',
  appId: '1:337161300559:web:151aaf1469e28cb4e0583a',
  measurementId: 'G-4PZZQ5NV29',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, addData) => {
  if (!userAuth) return;

  const userRef = await firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...addData,
      });
    } catch (err) {
      console.log('error creating user', err.message);
    }
  }

  return userRef;
};

export default firebase;
