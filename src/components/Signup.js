import { useRef, useState } from "react";
import { connect } from "react-redux";
import {
  signupWithEmailAndPassword,
  signupWithGoogle,
} from "../Redux/Actions/AuthActionCreators";
import { Link } from "react-router-dom";

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
    <section className="signup-section">
      <div className="signup-container">
        <h1>Signup</h1>
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
          <div className="form-group">
            <input
              type="password"
              ref={passwordConfirmRef}
              className="form-controls"
              placeholder="Confirm Password"
            />
          </div>
          <button
            type="submit"
            disabled={isAuthenticating}
            className="auth-btn btn-primary"
          >
            {isAuthenticating ? "Authenticating..." : "Signup"}
          </button>
        </form>
        <div className="divider"></div>
        <div className="signup-link">
          <p>
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </div>
        <div className="oauth">
          <h3>Or Sign up using</h3>
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
  signupWithEmailAndPassword,
  signupWithGoogle,
})(Signup);
