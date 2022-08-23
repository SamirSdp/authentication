import React, { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./component/LoginPage";
import NavBar from "./component/NavBar";
import HomePage from "./pages/HomePage";

export const UserContext = createContext();

const initialState = {
	currentUser: null,
	user: [],
};

const reducer = (state, action) => {
	console.log("payload", action.payload);
	switch (action.type) {
		case "SIGNUP":
			return {
				...state,
				user: [...state.user, action.payload],
				currentUser: action.payload,
			};

		default:
			return state;
	}
};


function App() {
	const [state, dispatch] = React.useReducer(reducer, initialState);
	return (
		<div>
			<UserContext.Provider
				value={{
					state,
					dispatch,
				}}>
				<NavBar />
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<LoginPage />} />
						<Route path="/home" element={<HomePage />} />
					</Routes>
				</BrowserRouter>
			</UserContext.Provider>
		</div>
	);
}

export default App;
