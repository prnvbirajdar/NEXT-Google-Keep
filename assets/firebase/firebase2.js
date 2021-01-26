import firebase from "firebase";
//import "firebase/storage";
import "firebase/firestore";

// var firebaseConfig = {
//   apiKey: "AIzaSyBebE_zJuIjrwY018dDVStI7IN-FCzTtqY",
//   authDomain: "next--keep-clone.firebaseapp.com",
//   databaseURL: "https://next--keep-clone-default-rtdb.firebaseio.com",
//   projectId: "next--keep-clone",
//   storageBucket: "next--keep-clone.appspot.com",
//   messagingSenderId: "930767906956",
//   appId: "1:930767906956:web:a623703b603f54f2d7f3a9",
//   measurementId: "G-6EGV0EYRKL",
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBebE_zJuIjrwY018dDVStI7IN-FCzTtqY",
  authDomain: "next--keep-clone.firebaseapp.com",
  databaseURL: "https://next--keep-clone-default-rtdb.firebaseio.com",
  projectId: "next--keep-clone",
  storageBucket: "next--keep-clone.appspot.com",
  messagingSenderId: "930767906956",
  appId: "1:930767906956:web:a623703b603f54f2d7f3a9",
  measurementId: "G-6EGV0EYRKL",
});
//Initialize Firebase

const db = firebaseApp.firestore();
//const projectStorage = firebase.storage();
firebase.analytics();

export default db



// var firebaseConfig = {
//   apiKey: "AIzaSyCXTLkYc-K7x2wdU81g8c_aK1LezqnRWAU",
//   authDomain: "keep-next-tailwind.firebaseapp.com",
//   projectId: "keep-next-tailwind",
//   storageBucket: "keep-next-tailwind.appspot.com",
//   messagingSenderId: "318071216631",
//   appId: "1:318071216631:web:e235550f574e898b6eb6f2"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);