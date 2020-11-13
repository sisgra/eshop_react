import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyD9DIVDBnJZkI_uiRraYq0BDk9ih5CjqpA",
  authDomain: "eshop-react-db.firebaseapp.com",
  databaseURL: "https://eshop-react-db.firebaseio.com",
  projectId: "eshop-react-db",
  storageBucket: "eshop-react-db.appspot.com",
  messagingSenderId: "1041025009636",
  appId: "1:1041025009636:web:de5d40807edf640338e9f1",
  measurementId: "G-MKZDQSXYC2"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;