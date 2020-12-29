import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../Redux/Actions/AuthActionCreators";
import UploadModal from "./UploadModal";
import { AnimatePresence } from "framer-motion";

const Navbar = ({ currentUser, logout }) => {
  const [navMenu, setNavMenu] = useState(false);
  const [navSubMenu, setNavSubMenu] = useState(false);
  const [modal, setModal] = useState(false);

  const history = useHistory();

  const handleLogout = () => {
    logout(() => history.push("/login"));
  };

  return (
    <nav>
      <header className="nav-heading">
        <a
          href="#!"
          className="navbar-toggler"
          onClick={() => setNavMenu(!navMenu)}
        >
          <i className="fa fa-bars"></i>
        </a>
        <h3>Art gallery</h3>
      </header>
      <div className={`nav-menu ${navMenu ? "active" : ""}`}>
        <ul className="nav-menu-list">
          <li>
            <Link to="/">
              <i className="fa fa-home"></i> Home
            </Link>
          </li>
          <li>
            <a href="#!" onClick={() => setModal(true)}>
              <i className="fa fa-plus"></i> Upload
            </a>
          </li>
          <li className="user-dropdown">
            <div className="user-avatar">
              <h3>{currentUser.displayName}</h3>
              <img
                src={currentUser.photoURL}
                alt={currentUser.displayName}
                tilte={currentUser.displayName}
              />
              <a
                href="#!"
                className="submenu-toggler"
                onClick={() => setNavSubMenu(!navSubMenu)}
              >
                <i className="fa fa-chevron-down"></i>
              </a>
            </div>
            <ul
              className={`user-info-submenu ${
                navSubMenu ? "active-submenu" : ""
              }`}
            >
              <Link to="profile">
                <li>View Profile</li>
              </Link>
              <Link to="/login" onClick={handleLogout}>
                <li> Logout</li>
              </Link>
            </ul>
          </li>
        </ul>
      </div>
      <AnimatePresence>
        {modal && <UploadModal setModal={setModal} />}
      </AnimatePresence>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.currentUser,
  };
};

export default connect(mapStateToProps, { logout })(Navbar);
