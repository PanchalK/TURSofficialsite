import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAYR4nDuUCPtfl_mAiJni37jc4o0C6ydog",
  authDomain: "turs-details.firebaseapp.com",
  databaseURL: "https://turs-details-default-rtdb.firebaseio.com",
  projectId: "turs-details",
  storageBucket: "turs-details.appspot.com",
  messagingSenderId: "134851523992",
  appId: "1:134851523992:web:831c363c3a672d65f567ed"
};

const app = initializeApp(firebaseConfig);
export const storage =  getStorage(app);
