import React, { useContext, useState, useEffect, createContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { getIdToken, onAuthStateChanged } from "firebase/auth";
import auth from "./FirebaseAuth/firebase.config";

const APIContext = createContext();

export function APIContextProvider({ children }) {
	const [token, setToken] = useState("");
	const [user, loading] = useAuthState(auth);
	useEffect(() => {
		const unSubscribed = onAuthStateChanged(auth, (user) => {
			if (user) {
				getIdToken(user).then((idToken) => setToken(idToken));
			}
		});
		return () => unSubscribed;
	}, []);
	return (
		<APIContext.Provider
			value={{
				user: user,
				loading: loading,
				token: token,
			}}>
			{children}
		</APIContext.Provider>
	);
}

export function useAPI() {
	const context = useContext(APIContext);
	if (context === undefined) {
		throw new Error("Context must be used within a Provider");
	}
	return context;
}
