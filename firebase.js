import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxhXIVDhXNSisJ0v81ZtdjAZZt9vorNig",
  authDomain: "tcm-mc-173a6.firebaseapp.com",
  projectId: "tcm-mc-173a6",
  storageBucket: "tcm-mc-173a6.firebasestorage.app",
  messagingSenderId: "490709082172",
  appId: "1:490709082172:web:6ec840d278caef9112a339"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
