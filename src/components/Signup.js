import { useRef, useState } from "react";
import { connect } from "react-redux";
import {
  signupWithEmailAndPassword,
  signupWithGoogle,
} from "../Redux/Actions/AuthActionCreators";
import { Link } from "react-router-dom";
import { GoogleLoginButton } from "react-social-login-buttons";
import LoadingPage from "./LoadingPage";
import { CircularProgress } from "@material-ui/core";

const Signup = ({
  signupWithEmailAndPassword,
  error,
  history,
  signupWithGoogle,
  isAuthenticating,
}) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  const [authenticatingForm, setAuthenticatingForm] = useState(false);

  const handleFormVerification = (e) => {
    e.preventDefault();

    setAuthenticatingForm(true);

    signupWithEmailAndPassword(
      emailRef.current.value,
      usernameRef.current.value,
      passwordRef.current.value,
      () => history.push("/"),
      () => setAuthenticatingForm(false)
    );
  };

  const handleGoogleLogin = () => signupWithGoogle(() => history.push("/"));

  if (isAuthenticating) {
    return <LoadingPage />;
  }

  return (
    <section className="h-screen w-screen flex justify-center items-center">
      <div className="py-8 px-12 text-center rounded-md shadow-md border border-gray-200">
        <h1 className="text-blue-700 text-4xl font-bold my-8">Signup</h1>
        {error && (
          <div className="bg-red-100 text-red-700  py-2 px-4 rounded-md">
            {error}
          </div>
        )}
        <form onSubmit={handleFormVerification}>
          <div className="form-group">
            <input
              type="email"
              ref={emailRef}
              className="focus:outline-none bg-gray-200 focus:ring-inset focus:ring-4 focus:ring-blue-400 px-2 py-3 w-full my-2 rounded-md transition-all"
              placeholder="Email"
            />
          </div>
          <input
            type="text"
            ref={usernameRef}
            className="focus:outline-none bg-gray-200 focus:ring-inset focus:ring-4 focus:ring-blue-400 px-2 py-3 w-full my-2 rounded-md transition-all"
            placeholder="Username"
          />
          <div className="form-group">
            <input
              type="password"
              ref={passwordRef}
              className="focus:outline-none bg-gray-200 focus:ring-inset focus:ring-4 focus:ring-blue-400 px-2 py-3 w-full my-2 rounded-md transition-all"
              placeholder="Choose a Password"
            />
          </div>
          <button
            type="submit"
            disabled={authenticatingForm}
            className="my-2 bg-blue-700 py-4 text-white font-bold w-100 rounded-md w-full transition:all duration-500 hover:bg-blue-600"
          >
            {authenticatingForm ? (
              <CircularProgress color="inherit" size={20} />
            ) : (
              "Signup"
            )}
          </button>
        </form>
        <div className="mt-10">
          <p className="my-2 text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="ml-1 hover:text-blue-700">
              Login here
            </Link>
          </p>
        </div>
        <div className="mt-2">
          <h3 className="text-gray-400 my-3 text-2xl">OR</h3>
          <div className="my-3">
            <GoogleLoginButton onClick={handleGoogleLogin} />
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    error: state.error.error,
  };
};

export default connect(mapStateToProps, {
  signupWithEmailAndPassword,
  signupWithGoogle,
})(Signup);
