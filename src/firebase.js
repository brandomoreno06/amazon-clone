import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAivHCboKCUu2po3NHx_gLIe-8tGjRspGY",
    authDomain: "clone-1078b.firebaseapp.com",
    projectId: "clone-1078b",
    storageBucket: "clone-1078b.appspot.com",
    messagingSenderId: "777461090996",
    appId: "1:777461090996:web:59ae49f973b7ca537225e1",
    measurementId: "G-VHSQ97XDP7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };