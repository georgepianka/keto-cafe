import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCYd_ogCTMz6h2I05GaKlBP0GFSt92y6f0",
    authDomain: "keto-cafe.firebaseapp.com",
    databaseURL: "https://keto-cafe.firebaseio.com",
    projectId: "keto-cafe",
    storageBucket: "keto-cafe.appspot.com",
    messagingSenderId: "390867169540",
    appId: "1:390867169540:web:0a1f1630390b1e2504a051",
    measurementId: "G-PRNTD8X6DY"
  };


firebase.initializeApp(config);


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snap = await userRef.get();

  if (!snap.exists) {
    const { userName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        userName,
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
export const logInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
