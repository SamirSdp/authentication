import React, { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./component/LoginPage";
import NavBar from "./component/NavBar";
import HomePage from "./pages/HomePage";

export const UserContext = createContext();

function App(props) {
	const [saveData, setSaveData] = React.useState([]);

	return (
		<div>
			<UserContext.Provider value={[saveData, setSaveData]}>
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
