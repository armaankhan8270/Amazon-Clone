import { initializeApp } from "firebase/app";
import firebase from 'firebase/app';
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyBVWhwGpW-d651JMQUaCoXoRvvM-7-d45Q",
    authDomain: "amzonclone-c9d62.firebaseapp.com",
    projectId: "amzonclone-c9d62",
    storageBucket: "amzonclone-c9d62.appspot.com",
    messagingSenderId: "829878036903",
    appId: "1:829878036903:web:cb4fa300ca6d53fb62ee82",
    measurementId: "G-MJ3DCTS2WR"
  };
 export const app = initializeApp(firebaseConfig );
 export const auth=getAuth(app)