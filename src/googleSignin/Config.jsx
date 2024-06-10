import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,GithubAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBbMi7-_80LBoQG-gV0Sr2s9CIydwSXvGM",
  authDomain: "login-425614.firebaseapp.com",
  projectId: "login-425614",
  storageBucket: "login-425614.appspot.com",
  messagingSenderId: "247729907959",
  appId: "1:247729907959:web:74a7b8d8db94003f698bf2",
  measurementId: "G-530S0XDXS9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app) 
const provider = new GoogleAuthProvider()
const gitprovider = new GithubAuthProvider()


export {auth,provider,gitprovider}