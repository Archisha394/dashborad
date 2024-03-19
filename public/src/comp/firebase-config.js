
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC4CyfqiMXjJTH129BntTT1-R8Xh06EZnU",
  authDomain: "agritech-d2e13.firebaseapp.com",
  projectId: "agritech-d2e13",
  storageBucket: "agritech-d2e13.appspot.com",
  messagingSenderId: "1041624664999",
  appId: "1:1041624664999:web:dc08544e329d6938cb8482",
  measurementId: "G-900X986B9J"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

