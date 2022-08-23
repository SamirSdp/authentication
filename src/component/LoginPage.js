import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import data from "../DataBase/data.json";
import { signUpErrHandle } from "../schemas";
import { Link } from "react-router-dom";
import { UserContext } from "../App";

const initialValues = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
};

const LoginPage = () => {
	const { state, dispatch } = useContext(UserContext);
	console.log(state);

	// const [saveData, setSaveData] = useState(state);
	const { handleChange, values, errors, handleSubmit, touched } = useFormik({
		initialValues: initialValues,
		validationSchema: signUpErrHandle,
		onSubmit: (values, action) => {
			console.log("sasasa");

			dispatch({
				type: "SIGNUP",
				payload: values,
			});
			action.resetForm();
			// setSaveData([...saveData, values]);

			data.push(
				values[
					{
						firstName: "",
						lastName: "",
						email: "",
						password: "",
					}
				]
			);
			console.log("value", values);
		},
	});
	// console.log("saveData", saveData);
	// const [signUp, setSignUp] = useState({
	// 	firstName: "",
	// 	lastName: "",
	// 	emailId: "",
	// 	passWord: "",
	// });
	// const [signUpData, setSignUpData] = useState([]);

	// const handleInput = (e) => {
	// 	const name = e.target.name;
	// 	const value = e.target.value;
	// 	setSignUp({ ...signUp, [name]: value });
	// };

	// const handleSignUp = (e) => {
	// 	e.preventDefault();
	// 	setSignUpData([...signUpData, signUp]);
	// };
	// console.log("signUpData", signUpData);

	return (
		<div>
			<div className="container px-5 py-15 mx-auto flex flex-wrap items-center">
				<div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
					<h1 className="title-font font-medium text-3xl text-gray-900">
						programing
					</h1>
					<p className="leading-relaxed mt-4">Its a login page</p>
				</div>
				<div className="lg:w-2/6 md:w-1/2  bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
					<form onSubmit={handleSubmit}>
						<h2 className=" text-lg font-medium title-font mb-5">Sign Up</h2>
						<div className="relative mb-2">
							<label className="leading-7 text-sm  ">First Name</label>
							<input
								type="text"
								name="firstName"
								value={values.firstName}
								// autoComplete="of"
								onChange={handleChange}
								className="w-full px-3  bg-opacity-20 focus:bg-transparent focus:ring-1 focus:ring-green-600 rounded border border-green-600 focus:border-green-500 text-base outline-none  py-0.5 leading-8 transition-colors duration-200 ease-in-out"
							/>
							{errors.firstName && touched.firstName ? (
								<p className="text-red-500">{errors.firstName}</p>
							) : null}
						</div>
						<div className="relative mb-2">
							<label className="leading-7 text-sm ">Last Name</label>
							<input
								type="text"
								name="lastName"
								// autoComplete="of"
								value={values.lastName}
								onChange={handleChange}
								className="w-full px-3  bg-opacity-20 focus:bg-transparent focus:ring-1 focus:ring-green-600 rounded border border-green-600 focus:bordergreen-500 text-base outline-none  py-0.5 leading-8 transition-colors duration-200 ease-in-out"
							/>
							{errors.lastName && touched.lastName ? (
								<p className="text-red-500">{errors.lastName}</p>
							) : null}
						</div>
						<div className="relative mb-2">
							<label className="leading-7 text-sm ">Email</label>
							<input
								type="email"
								name="email"
								// autoComplete="of"
								value={values.email}
								onChange={handleChange}
								className="w-full px-3  bg-opacity-20 focus:bg-transparent focus:ring-1 focus:ring-green-600 rounded border border-green-600 focus:border-green-500 text-base outline-none  py-0.5 leading-8 transition-colors duration-200 ease-in-out"
							/>
							{errors.email && touched.email ? (
								<p className="text-red-500">{errors.email}</p>
							) : null}
						</div>
						<div className="relative mb-2">
							<label className="leading-7 text-sm ">Password</label>
							<input
								type="password"
								name="password"
								// autoComplete="of"
								placeholder="password"
								value={values.password}
								onChange={handleChange}
								className="w-full px-3 bg-opacity-20 focus:bg-transparent focus:ring-1 focus:ring-green-600 rounded border border-green-600 focus:border-green-500 text-base outline-none py-0.5 leading-8 transition-colors duration-200 ease-in-out"
							/>
							{errors.password && touched.password ? (
								<p className="text-red-500">{errors.password}</p>
							) : null}
						</div>
						<div className="flex justify-evenly mt-2">
							<div className="mb-2">
								<button
									type="submit"
									className="text-green-800 m-auto px-2 bg-white border-0 py-1  focus:outline-none hover:bg-green-600 hover:text-white rounded text-lg">
									Sign in
								</button>
							</div>
						</div>
						<a
							href="/"
							className="m-auto px-2 border-0 py-1   hover:text-red-500 rounded text-lg">
							Already account? Sign in
						</a>
					</form>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
