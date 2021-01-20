// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.2.3/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.2.3/firebase-analytics.js"></script>

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBebE_zJuIjrwY018dDVStI7IN-FCzTtqY",
  authDomain: "next--keep-clone.firebaseapp.com",
  projectId: "next--keep-clone",
  storageBucket: "next--keep-clone.appspot.com",
  messagingSenderId: "930767906956",
  appId: "1:930767906956:web:a623703b603f54f2d7f3a9",
  measurementId: "G-6EGV0EYRKL",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
