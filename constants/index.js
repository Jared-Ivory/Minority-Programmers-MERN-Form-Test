const SignUpForm = {
	type: "Sign Up",
	banner: {
		title: "Register for MPA",
		content:
			"To keep connecting with us please register with your personal info.",
	},
	formdata: {
		title: "Sign Up",
		tooltip: "Already have an account?",
		link: "Log in",
		button_text: "Register",
	},
};
const LoginForm = {
	type: "Login",
	banner: {
		title: "Welcome back",
		content:
			"To keep connecting with us please register with your personal info.",
	},
	formdata: {
		title: "Log in",
		tooltip: "Need to register?",
		link: "Sign up",
		button_text: "Login",
	},
};

const FormData = {
	SignUpForm,
	LoginForm,
};

export default FormData;
export { SignUpForm, LoginForm };
