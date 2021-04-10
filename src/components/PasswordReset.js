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
        className="bg-white px-4 py-8 rounded-md relative"
        variants={modalVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition="transition"
      >
        <a
          href="#!"
          onClick={() => setModal(false)}
          className="absolute top-5 right-5"
        >
          <i className="fa fa-times"></i>
        </a>
        <h3 className="my-4 text-blue-700 font-bold text-xl">Password Reset</h3>
        {error && <div className="alert-error">{error.message}</div>}
        {successMsg && <div className="alert-success">{successMsg}</div>}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="focus:outline-none bg-gray-200 focus:ring-inset focus:ring-4 focus:ring-blue-400 px-2 py-3 w-full my-2 rounded-md transition-all block"
          placeholder="Your Email"
        />
        <button
          onClick={handlePasswordReset}
          className="my-2 bg-blue-700 py-4 px-8 text-white font-bold w-100 rounded-md w-full transition:all duration-500 hover:bg-blue-600"
        >
          Send Password Reset Link
        </button>
      </motion.div>
    </Modal>
  );
};

export default PasswordReset;
