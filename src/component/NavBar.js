import React, { useContext } from "react";
import { UserContext } from "../App";

const NavBar = () => {
	const userList = useContext(UserContext);
	console.log("userList",userList);
	return (
		<div className="sticky top-0">
			<header className="text-gray-600 body-font">
				<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
					<a
						className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
						href="/">
						<span className="ml-3 text-xl">{`Welcome to `}</span>
					</a>
					<nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"></nav>
				</div>
			</header>
		</div>
	);
};

export default NavBar;
