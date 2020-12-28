import { useEffect } from "react";

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

  return <div className="modal-backdrop">{children}</div>;
};

export default Modal;
