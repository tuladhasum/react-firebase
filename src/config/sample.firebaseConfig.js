// /app just base app and core functionality
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "APIKEY",
  authDomain: "AUTHDOMAIN",
  databaseURL: "URL",
  projectId: "PROJECT_ID",
  storageBucket: "STORAGE_BUCKER",
  messagingSenderId: "SENDER",
  appId: "APP_ID"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;