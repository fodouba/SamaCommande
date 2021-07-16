import firebaseConfig from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAmhqz5UAUBadTsuz8n2UUiBAvHNLgExos",
    authDomain: "samacommande-ba2fc.firebaseapp.com",
    databaseURL: "https://samacommande-ba2fc-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "samacommande-ba2fc",
    storageBucket: "samacommande-ba2fc.appspot.com",
    messagingSenderId: "205868274127",
    appId: "1:205868274127:web:2743bb3ca46fd4f9b0c2ba"
  };
  // Initialize Firebase
  const firebase = firebase.initializeApp(firebaseConfig);
  export default firebase;