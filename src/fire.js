import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyCI1Yai18dM-OiVP7oyLINTl3u82DWNHMc",
  authDomain: "to-do-d8450.firebaseapp.com",
  projectId: "to-do-d8450",
  storageBucket: "to-do-d8450.appspot.com",
  messagingSenderId: "213133493159",
  appId: "1:213133493159:web:1b9ce103676b73cdaeac82"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;