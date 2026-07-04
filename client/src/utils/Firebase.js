
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "shifra1ai.firebaseapp.com",
  projectId: "shifra1ai",
  storageBucket: "shifra1ai.firebasestorage.app",
  messagingSenderId: "556957870759",
  appId: "1:556957870759:web:600a3e9192cd958a6e4982"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth , provider}