import firebase from "firebase/app";
import "firebase/firestore";

// Initialize Firebase

// const firebaseApp = firebase.initializeApp({
//   apiKey: "AIzaSyCXTLkYc-K7x2wdU81g8c_aK1LezqnRWAU",
//   authDomain: "keep-next-tailwind.firebaseapp.com",
//   databaseURL: "https://keep-next-tailwind-default-rtdb.firebaseio.com",
//   projectId: "keep-next-tailwind",
//   storageBucket: "keep-next-tailwind.appspot.com",
//   messagingSenderId: "318071216631",
//   appId: "1:318071216631:web:e235550f574e898b6eb6f2",
// });

const firebaseConfig = {
  apiKey: "AIzaSyCXTLkYc-K7x2wdU81g8c_aK1LezqnRWAU",
  authDomain: "keep-next-tailwind.firebaseapp.com",
  databaseURL: "https://keep-next-tailwind-default-rtdb.firebaseio.com",
  projectId: "keep-next-tailwind",
  storageBucket: "keep-next-tailwind.appspot.com",
  messagingSenderId: "318071216631",
  appId: "1:318071216631:web:e235550f574e898b6eb6f2",
};
// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export default db;
