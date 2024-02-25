

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBvrq2Rm7nSj2jdiEsmZVuNY0sfQ6gYHaE",
  authDomain: "greengold-a8000.firebaseapp.com",
  projectId: "greengold-a8000",
  storageBucket: "greengold-a8000.appspot.com",
  messagingSenderId: "709064424643",
  appId: "1:709064424643:web:61285779b2537ad8ffb676"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;