import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBQ_udtkUjoM0RtYSTw3TRhXal0SOikiLc",
    authDomain: "clone-533d5.firebaseapp.com",
    projectId: "clone-533d5",
    storageBucket: "clone-533d5.appspot.com",
    messagingSenderId: "179707820209",
    appId: "1:179707820209:web:637505e324517d36174a90",
    measurementId: "G-GNX14SH4DJ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider}