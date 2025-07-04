import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAB-i4mmzkGCvHj38yfdn6CxdlPZ1DPKW4",
  authDomain: "algoarena-2b787.firebaseapp.com",
  projectId: "algoarena-2b787",
  storageBucket: "algoarena-2b787.appspot.com",
  messagingSenderId: "814504358442",
  appId: "1:814504358442:web:faecf8a56ed0ad75040953",
  measurementId: "G-C2J7Q24F0Q"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
