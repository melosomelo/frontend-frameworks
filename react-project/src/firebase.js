import * as firebase from "firebase/app";

import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkGOT9qTy73w9d0JgaXN3iZJFo41d3cvI",
  authDomain: "frontend-frameworks.firebaseapp.com",
  databaseURL: "https://frontend-frameworks.firebaseio.com",
  projectId: "frontend-frameworks",
  storageBucket: "frontend-frameworks.appspot.com",
  messagingSenderId: "300698978033",
  appId: "1:300698978033:web:4c8050f8e4d88023080b50",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
