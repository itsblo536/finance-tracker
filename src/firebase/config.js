import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAFjcRIfW_zWKTGQPyY1_zpo7snHtP9J1s",
    authDomain: "finance-tracker-13187.firebaseapp.com",
    projectId: "finance-tracker-13187",
    storageBucket: "finance-tracker-13187.appspot.com",
    messagingSenderId: "776790825762",
    appId: "1:776790825762:web:a3b91847b808a94a85237b"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }