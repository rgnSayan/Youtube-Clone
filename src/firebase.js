import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBGoSa59gBIzdOC5CtGBcJATNqzHFPsE_s",
    authDomain: "react-d02a4.firebaseapp.com",
    projectId: "react-d02a4",
    storageBucket: "react-d02a4.appspot.com",
    messagingSenderId: "34984858265",
    appId: "1:34984858265:web:b1cad5cbafd0199a469e08"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
console.log(firebaseApp);
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };