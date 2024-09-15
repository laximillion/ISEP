// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWaE3IRqnl3q-DXZLIn9FWZmiYDFs-hes",
  authDomain: "fir-auth-5abfd.firebaseapp.com",
  projectId: "fir-auth-5abfd",
  storageBucket: "fir-auth-5abfd.appspot.com",
  messagingSenderId: "879315870941",
  appId: "1:879315870941:web:c00223bc5d3bc3ee3b2734"
};

let app;

if (firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig);
} else{
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };