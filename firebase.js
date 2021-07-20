import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCSeGbAm7E98dR_P12zAIdjv5528TkJhPw",
  authDomain: "docs-f46ba.firebaseapp.com",
  projectId: "docs-f46ba",
  storageBucket: "docs-f46ba.appspot.com",
  messagingSenderId: "695062901211",
  appId: "1:695062901211:web:8df084c460e9ff8ac077fe",
  measurementId: "G-GD4B22KVCC",
};
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
