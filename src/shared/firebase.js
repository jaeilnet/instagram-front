import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBYmBxfiNk2gTei_oCY-ONpkfwgqVxKPl4",
  authDomain: "image-community-26650.firebaseapp.com",
  projectId: "image-community-26650",
  storageBucket: "image-community-26650.appspot.com",
  messagingSenderId: "584560045886",
  appId: "1:584560045886:web:ba686ba743ec2333d2866f",
  measurementId: "G-7SMHSYMC9S",
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();

export { auth, apiKey, firestore, storage };
