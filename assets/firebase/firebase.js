

import firebase from "firebase/app";
//import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBebE_zJuIjrwY018dDVStI7IN-FCzTtqY",
  authDomain: "next--keep-clone.firebaseapp.com",
  databaseURL: "https://next--keep-clone-default-rtdb.firebaseio.com",
  projectId: "next--keep-clone",
  storageBucket: "next--keep-clone.appspot.com",
  messagingSenderId: "930767906956",
  appId: "1:930767906956:web:a623703b603f54f2d7f3a9",
  measurementId: "G-6EGV0EYRKL",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// const firebaseApp = firebase.initializeApp({
//   apiKey: "AIzaSyBebE_zJuIjrwY018dDVStI7IN-FCzTtqY",
//   authDomain: "next--keep-clone.firebaseapp.com",
//   databaseURL: "https://next--keep-clone-default-rtdb.firebaseio.com",
//   projectId: "next--keep-clone",
//   storageBucket: "next--keep-clone.appspot.com",
//   messagingSenderId: "930767906956",
//   appId: "1:930767906956:web:a623703b603f54f2d7f3a9",
//   measurementId: "G-6EGV0EYRKL",
// });
// Initialize Firebase
//firebase.analytics();

// const db = firebaseApp.firestore();
// const projectStorage = firebase.storage();

// export { db, projectStorage };

export default firebase;
