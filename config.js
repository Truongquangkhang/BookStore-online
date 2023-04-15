const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyA0egiLpV1d2lGNqLGVu8SYxg2-jVyfEk0",
  authDomain: "pbl5-679eb.firebaseapp.com",
  projectId: "pbl5-679eb",
  storageBucket: "pbl5-679eb.appspot.com",
  messagingSenderId: "450674434601",
  appId: "1:450674434601:web:0d40034d15e1152f79b238",
  measurementId: "G-KX8B01CZQV"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("Users");
module.exports = User;