import firebase from "firebase";

const config = {
    apiKey: "AIzaSyAHJrkT2gqArJaz9O49QUhOZmAGa9VMlpA",
    authDomain: "air-cnc-test.firebaseapp.com",
    databaseURL: "https://air-cnc-test.firebaseio.com",
    projectId: "air-cnc-test",
    storageBucket: "air-cnc-test.appspot.com",
    messagingSenderId: "150197566871",
    appId: "1:150197566871:web:9c0035ef589c7e471798d2",
    measurementId: "G-ZJY5MS41D6"
  };

  firebase.initializeApp(config);
  export default firebase;