import firebase from "firebase/app";
import "firebase/firestore";

if (firebase.apps.length === 0) {
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
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export default db;

// apiKey: process.env.NEXT_APP_FIREBASE_API_KEY,
// authDomain: process.env.NEXT_APP_FIREBASE_AUTH_DOMAIN,
// databaseURL: process.env.NEXT_APP_FIREBASE_DATABASE_URL,
// projectId: process.env.NEXT_APP_FIREBASE_PROJECT_ID,
// storageBucket: process.env.NEXT_APP_FIREBASE_STORAGE_BUCKET,
// messagingSenderId: process.env.NEXT_APP_FIREBASE_MESSAGING_SENDER_ID,
// appId: process.env.NEXT_APP_FIREBASE_APP_ID,
