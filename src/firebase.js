import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
     apiKey: "AIzaSyDklLZrNA9li8PPB9935Z881IGFQSjoUpA",
     authDomain: "facebookclone-8160a.firebaseapp.com",
     projectId: "facebookclone-8160a",
     storageBucket: "facebookclone-8160a.appspot.com",
     messagingSenderId: "654096785734",
     appId: "1:654096785734:web:9a2f8c01ba34118153c547"
   };

   const firebaseApp = firebase.initializeApp (firebaseConfig);
   const db = firebaseApp.firestore();
   const auth = firebase.auth();
   const provider = new firebase.auth.GoogleAuthProvider();

   export {auth, provider};
   export default db;