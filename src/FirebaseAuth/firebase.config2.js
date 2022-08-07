import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
	apiKey: "AIzaSyDrhuoWk-jsS3jtq5GKhXtc4UTVn8Na-VI",
	authDomain: "alijahan-international.firebaseapp.com",
	projectId: "alijahan-international",
	storageBucket: "alijahan-international.appspot.com",
	messagingSenderId: "102072832708",
	appId: "1:102072832708:web:5cce0edc6bb16aaaf86f91",
	measurementId: "G-07PDY15579",
};
const app2 = initializeApp(firebaseConfig, "app2");
const auth2 = getAuth(app2);
export default auth2;
