import { useState } from "react";
import { auth } from "../firebase/config";
import Modal from "./Modal";
import { motion } from "framer-motion";

const modalVariants = {
  initial: {
    opacity: 0,
    y: "30%",
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    type: "tween",
  },
  exit: {
    opacity: 0,
    y: "30%",
  },
};

const PasswordReset = ({ setModal }) => {
  const [email, setEmail] = useState("");
  const [successMsg, setSuccessMsg] = useState(null);
  const [error, setError] = useState(null);

  const handlePasswordReset = () => {
    auth
      .sendPasswordResetEmail(email)
      .then(() => setSuccessMsg("Check your inbox for further details!!"))
      .catch((err) => setError(err));
  };

  return (
    <Modal setModal={setModal}>
      <motion.div
        className="password-reset-link-container"
        variants={modalVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition="transition"
      >
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
      </motion.div>
    </Modal>
  );
};

export default PasswordReset;
