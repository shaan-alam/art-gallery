import { useState } from "react";
import { useHistory } from "react-router-dom";
import { logout } from "../Redux/Actions/AuthActionCreators";
import { connect } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

const linkVariants = {
  initial: {
    y: "-40%",
  },
  animate: {
    y: 0,
  },
  transition: {
    delay: 1,
  },
  exit: {
    y: "-40%",
  },
};

const NavbarDropdown = ({ currentUser, logout }) => {
  const history = useHistory();
  const [dropdown, setDropdown] = useState(false);

  const handleLogout = () => {
    logout(() => history.push("/login"));
  };

  return (
    <div className="dropdown">
      <div
        className="dropdown-user-avatar"
        onClick={() => setDropdown(!dropdown)}
      >
        <img
          title={currentUser.displayName}
          src={
            currentUser.photoURL ||
            "https://st2.depositphotos.com/1502311/12020/v/600/depositphotos_120206860-stock-illustration-profile-picture-vector.jpg"
          }
          alt="User Avatar"
        />
        <a href="#!">
          <i className="fa fa-chevron-down"></i>
        </a>
      </div>
      <AnimatePresence>
        {dropdown && (
          <motion.div
            className="dropdown-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="dropdown-content-user-info">
              <h2>{currentUser.displayName}</h2>
              <small>{currentUser.email}</small>
            </div>
            <div className="divider"></div>
            <ul>
              <motion.li
                variants={linkVariants}
                initial="initial"
                animate="animate"
                transition="transition"
                exit="exit"
              >
                <a href="#!">View Profile</a>
              </motion.li>
              <motion.li
                variants={linkVariants}
                initial="initial"
                animate="animate"
                transition="transition"
                exit="exit"
              >
                <a href="#!" onClick={handleLogout}>
                  Logout
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.currentUser,
  };
};

export default connect(mapStateToProps, { logout })(NavbarDropdown);
