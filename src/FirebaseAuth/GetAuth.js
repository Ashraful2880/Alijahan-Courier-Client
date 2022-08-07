import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { getIdToken, onAuthStateChanged } from "firebase/auth";
import auth from "./firebase.config";
import auth2 from "./firebase.config2";
const GetAuth = () => {
	const [token, setToken] = useState("");
	const [user, loading] = useAuthState(auth);
	const [user2, loading2] = useAuthState(auth2);
	useEffect(() => {
		const unSubscribed = onAuthStateChanged(auth, (user) => {
			if (user) {
				getIdToken(user).then((idToken) => setToken(idToken));
			}
		});
		return () => unSubscribed;
	}, []);

	return { user, loading, token, user2, loading2 };
};

export default GetAuth;
