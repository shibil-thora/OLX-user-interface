import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBIJT8pxDT0ZeLQfD2Jq4tmvvsJ-OCUYso",
    authDomain: "fir-af7dd.firebaseapp.com",
    projectId: "fir-af7dd",
    storageBucket: "fir-af7dd.appspot.com",
    messagingSenderId: "297131455556",
    appId: "1:297131455556:web:15f60354647f55b35f3811",
    measurementId: "G-15JYFCMP7R"
  };

export default firebase.initializeApp(firebaseConfig); 
