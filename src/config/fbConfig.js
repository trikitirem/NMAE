import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyAkGkTrvE4FArjSG5XUSN2sn-3lJ4jnXjo",
    authDomain: "nmae-ecce5.firebaseapp.com",
    projectId: "nmae-ecce5",
    storageBucket: "nmae-ecce5.appspot.com",
    messagingSenderId: "588386190864",
    appId: "1:588386190864:web:95bd625434f970c1f0ac95"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timeStampsInSnapshots: true});

  export default firebase;