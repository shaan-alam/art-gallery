import { useRef, useState } from "react";
import { connect } from "react-redux";
import {
  signupWithEmailAndPassword,
  signupWithGoogle,
} from "../Redux/Actions/AuthActionCreators";
import { Link } from "react-router-dom";
import { GoogleLoginButton } from "react-social-login-buttons";

const Signup = ({
  signupWithEmailAndPassword,
  error,
  history,
  signupWithGoogle,
}) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const handleFormVerification = (e) => {
    e.preventDefault();

    setIsAuthenticating(true);

    signupWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value,
      () => history.push("/")
    );

    setIsAuthenticating(false);
  };

  const handleGoogleLogin = (e) => {
    e.preventDefault();

    signupWithGoogle(() => history.push("/"));
  };

  return (
    <section className="h-screen w-screen flex justify-center items-center">
      <div className="w-1/4 py-8 px-12 text-center rounded-md shadow-md border border-gray-200">
        <h1 className="text-indigo-700 text-4xl font-bold my-8">Signup</h1>
        {error && <div className="alert-error">{error.message}</div>}
        <form onSubmit={handleFormVerification}>
          <div className="form-group">
            <input
              type="email"
              ref={emailRef}
              className="focus:outline-none bg-gray-200 focus:ring-inset focus:ring-4 focus:ring-indigo-400 px-2 py-3 w-full my-2 rounded-md transition-all"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              ref={passwordRef}
              className="focus:outline-none bg-gray-200 focus:ring-inset focus:ring-4 focus:ring-indigo-400 px-2 py-3 w-full my-2 rounded-md transition-all"
              placeholder="Choose a Password"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              ref={passwordConfirmRef}
              className="focus:outline-none bg-gray-200 focus:ring-inset focus:ring-4 focus:ring-indigo-400 px-2 py-3 w-full my-2 rounded-md transition-all"
              placeholder="Confirm Password"
            />
          </div>
          <button
            type="submit"
            disabled={isAuthenticating}
            className="my-2 bg-indigo-700 py-4 text-white font-bold w-100 rounded-md w-full transition:all duration-500 hover:bg-indigo-600"
          >
            {isAuthenticating ? "Authenticating..." : "Signup"}
          </button>
        </form>
        <div className="mt-10">
          <p className="my-2 text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="ml-1 hover:text-indigo-700">
              Login here
            </Link>
          </p>
        </div>
        <div className="mt-2">
          <h3 className="text-gray-400 my-3 text-2xl">OR</h3>
          <div className="my-3">
            <GoogleLoginButton
              onClick={handleGoogleLogin}
              className="login__google"
            />
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
