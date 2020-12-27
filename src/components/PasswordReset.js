import { useEffect, useState } from "react";
import { auth } from "../firebase/config";
import Modal from "./Modal";

const PasswordReset = ({ setModal }) => {
  const [email, setEmail] = useState("");
  const [successMsg, setSuccessMsg] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const closeModal = (e) => {
      if (e.target.classList.contains("modal-backdrop") || e.keyCode === 27) {
        setModal(false);
      }
    };

    // Attach an event listener to window object
    // If clicked outside the modal, then close the modal
    window.addEventListener("click", closeModal);
    window.addEventListener("keydown", closeModal);

    // Unsubscribe from the event listeners
    return () => {
      window.removeEventListener("click", closeModal);
      window.removeEventListener("keydown", closeModal);
    };
  }, []);

  const handlePasswordReset = () => {
    auth
      .sendPasswordResetEmail(email)
      .then(() => setSuccessMsg("Check your inbox for further details!!"))
      .catch((err) => setError(err));
  };

  return (
    <Modal>
      <div className="password-reset-link-container">
        <a href="#!" onClick={() => setModal(false)} className="close-modal">
          <i className="fa fa-times"></i>
        </a>
        <h3>Password Reset</h3>
        {error && <div className="alert-error">{error.message}</div>}
        {successMsg && <div className="alert-success">{successMsg}</div>}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-controls"
          placeholder="Your Email"
        />
        <button onClick={handlePasswordReset} className="btn-primary">
          Send Password Reset Link
        </button>
      </div>
    </Modal>
  );
};

export default PasswordReset;
