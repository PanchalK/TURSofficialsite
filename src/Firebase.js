import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyB_voLL6aItpgDB-DZ31Iu7vXtCpkFRIRA",
  authDomain: "turs-6cdef.firebaseapp.com",
  databaseURL: "https://turs-6cdef-default-rtdb.firebaseio.com",
  projectId: "turs-6cdef",
  storageBucket: "turs-6cdef.appspot.com",
  messagingSenderId: "756156051616",
  appId: "1:756156051616:web:1f712fd9cb970ce58159c5"
};

const app = initializeApp(firebaseConfig);
export const storage =  getStorage(app);
