import { initializeApp } from "firebase/app";
import { getAuth }       from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBpf1ivrSntnPMgY_9LklxCPlZR4F0pyFs",
  authDomain: "otp-project-d39f6.firebaseapp.com",
  projectId: "otp-project-d39f6",
  storageBucket: "otp-project-d39f6.appspot.com",
  messagingSenderId: "152544414609",
  appId: "1:152544414609:web:30e2ff940450f4f6e52830",
  measurementId: "G-MD4VY8RL4S"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)