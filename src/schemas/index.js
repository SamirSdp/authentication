import * as Yup from "yup";

export const signUpErrHandle = Yup.object({
	firstName: Yup.string()
		.min(2)
		.max(20)
		.required("please enter your firstName"),
	lastName: Yup.string().min(4).max(20).required("please enter your lastName"),
	email: Yup.string().email().required("plz enter your email"),
	password: Yup.string().min(6).required("plz enter user password"),
});
