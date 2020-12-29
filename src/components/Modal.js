import { useEffect } from "react";
import { motion } from "framer-motion";

const Modal = ({ children, setModal }) => {
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

  return (
    <motion.div
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Modal;
