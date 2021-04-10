import { useRef, useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  setUser,
  signInWithEmailAndPassword,
  signupWithGoogle,
} from "../Redux/Actions/AuthActionCreators";
import { Link } from "react-router-dom";
import PasswordReset from "./PasswordReset";
import LoadingPage from "./LoadingPage";
import { AnimatePresence } from "framer-motion";
import { GoogleLoginButton } from "react-social-login-buttons";
import { CircularProgress } from "@material-ui/core";

const Login = ({
  signInWithEmailAndPassword,
  error,
  history,
  signupWithGoogle,
  setUser,
  isAuthenticating,
}) => {
  useEffect(() => {
    // Set user on auth state changed
    setUser(() => history.push("/"));
  }, [setUser, history]);

  const emailRef = useRef();
  const passwordRef = useRef();

  const [modal, setModal] = useState(false);
  const [authenticatingForm, setAuthenticatingForm] = useState(false);

  const handleFormVerification = (e) => {
    e.preventDefault();

    setAuthenticatingForm(true);

    // Signing in with email
    signInWithEmailAndPassword(
      emailRef.current.value,
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
        <h1 className="text-blue-700 text-4xl font-bold my-8">Login</h1>
        {error && (
          <div className="bg-red-100 text-red-700  py-2 px-4 rounded-md">
            {error.message}
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
          <div className="form-group">
            <input
              type="password"
              ref={passwordRef}
              className="focus:outline-none bg-gray-200 focus:ring-4 focus:ring-blue-400 px-2 py-3 w-full my-2 rounded-md transition-all"
              placeholder="Choose a Password"
            />
          </div>
          <button
            type="submit"
            disabled={isAuthenticating}
            className="my-2 bg-blue-700 py-4 text-white font-bold w-100 rounded-md w-full transition:all duration-500 hover:bg-blue-600"
          >
            {authenticatingForm ? (
              <CircularProgress color="inherit" size={20} />
            ) : (
              "Login"
            )}
          </button>
        </form>
        <div className="mt-10">
          <a
            href="#!"
            className="text-gray-500 transition:all hover:text-blue-500"
            onClick={() => setModal(true)}
          >
            Forgot Password
          </a>
          <p className="my-2 text-gray-500">
            Not a member yet?
            <Link to="/signup" className="ml-1 hover:text-blue-700">
              Signup here
            </Link>
          </p>
          <AnimatePresence>
            {modal && <PasswordReset setModal={setModal} />}
          </AnimatePresence>
        </div>
        <h4 className="text-gray-400 my-6 text-2xl">OR</h4>
        <div className="my-4">
          <GoogleLoginButton onClick={handleGoogleLogin} />
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    error: state.error.error,
    isAuthenticating: state.auth.isAuthenticating,
  };
};

export default connect(mapStateToProps, {
  signInWithEmailAndPassword,
  signupWithGoogle,
  setUser,
})(Login);
