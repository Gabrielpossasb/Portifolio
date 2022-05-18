import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyD53-4JLJxmgX9fNWw_7RjTeZJxBAAWS-Q",
        authDomain: "appportifolio-43556.firebaseapp.com",
        projectId: "appportifolio-43556",
        storageBucket: "appportifolio-43556.appspot.com",
        messagingSenderId: "520472459419",
        appId: "1:520472459419:web:ebfacff7301f70ec122e3e"
    });
  
  const db = firebase.firestore();

  
  export {db};