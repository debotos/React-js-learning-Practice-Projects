import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "PLACE_YOUR'S",
  authDomain: "PLACE_YOUR'S",
  databaseURL: "PLACE_YOUR'S",
  projectId: "PLACE_YOUR'S",
  storageBucket: "PLACE_YOUR'S",
  messagingSenderId: "PLACE_YOUR'S"
};

firebase.initializeApp(config);

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const database = firebase.database();

export { googleAuthProvider, firebase, database as default };
