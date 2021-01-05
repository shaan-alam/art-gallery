import { useRef, useState } from "react";
import { connect } from "react-redux";
import {
  signInWithEmailAndPassword,
  signupWithGoogle,
} from "../Redux/Actions/AuthActionCreators";
import { Link } from "react-router-dom";
import PasswordReset from "./PasswordReset";
import { AnimatePresence } from "framer-motion";

const Login = ({
  signInWithEmailAndPassword,
  error,
  history,
  signupWithGoogle,
}) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [modal, setModal] = useState(false);

  const handleFormVerification = (e) => {
    e.preventDefault();

    setIsAuthenticating(true);

    signInWithEmailAndPassword(
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
    <section className="login-section">
      <div className="login-container">
        <h1>Login</h1>
        {error && <div className="alert-error">{error.message}</div>}
        <form onSubmit={handleFormVerification}>
          <div className="form-group">
            <input
              type="email"
              ref={emailRef}
              className="form-controls"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              ref={passwordRef}
              className="form-controls"
              placeholder="Choose a Password"
            />
          </div>
          <button
            type="submit"
            disabled={isAuthenticating}
            className="auth-btn btn-primary"
          >
            {isAuthenticating ? "Authenticating..." : "Login"}
          </button>
        </form>
        <div className="forgot-pass-link-container">
          <a
            href="#!"
            className="forgot-pass-link"
            onClick={() => setModal(true)}
          >
            Forgot Password
          </a>
          <AnimatePresence>
            {modal && <PasswordReset setModal={setModal} />}
          </AnimatePresence> 
        </div>
        <div className="divider"></div>
        <div className="signup-link">
          <p>
            Not a member yet? <Link to="/signup">Signup here</Link>
          </p>
        </div>
        <div className="oauth">
          <h3>Or Login using</h3>
          <div className="oauth-links">
            <a href="#!" onClick={handleGoogleLogin}>
              <img
                src="https://img.icons8.com/color/452/google-logo.png"
                alt="Google"
              />{" "}
              <span>Google</span>
            </a>
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
  signInWithEmailAndPassword,
  signupWithGoogle,
})(Login);
