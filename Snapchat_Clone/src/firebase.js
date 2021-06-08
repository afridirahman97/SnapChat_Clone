import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDl1x8AObGV9CZmO2_wTjVXYkJrERCFVbM",
  authDomain: "snapchat-clone-d6caa.firebaseapp.com",
  projectId: "snapchat-clone-d6caa",
  storageBucket: "snapchat-clone-d6caa.appspot.com",
  messagingSenderId: "359239296075",
  appId: "1:359239296075:web:bd79ef9597b3b436b199ce"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
