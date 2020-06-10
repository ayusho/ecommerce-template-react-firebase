import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCDq-IPSTZn-7U3gwppnjp3I_BF8h3GQGc",
  authDomain: "ps-db-6bb20.firebaseapp.com",
  databaseURL: "https://ps-db-6bb20.firebaseio.com",
  projectId: "ps-db-6bb20",
  storageBucket: "ps-db-6bb20.appspot.com",
  messagingSenderId: "662763138006",
  appId: "1:662763138006:web:e730b32b2b9f427672d277",
  measurementId: "G-FY8K3DN0JZ",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  console.log(userAuth);
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
