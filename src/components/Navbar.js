import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../Redux/Actions/AuthActionCreators";
import UploadModal from "./UploadModal";
import { AnimatePresence } from "framer-motion";
import AddIcon from "@material-ui/icons/Add";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar } from "@material-ui/core";

const Navbar = ({ currentUser, logout }) => {
  const [menu, setMenu] = useState("");
  const [modal, setModal] = useState(false);

  const history = useHistory();

  const handleLogout = (e) => {
    e.preventDefault();
    logout(() => history.push("/login"));
  };

  const handleModal = (e) => {
    e.preventDefault();

    setMenu(false);
    setModal(true);
  };

  const toggleHamMenu = (e) => {
    e.preventDefault();
    setMenu(!menu);
  };

  return (
    <nav className="w-screen shadow-sm border border-gray-200">
      <div className="container">
        <div className="heading">
          <h2 className="font-bold text-3xl text-indigo-700">Art Gallery</h2>
        </div>
        <ul className={`${menu ? "visible" : ""}`}>
          <li>
            <Link to="/" onClick={handleModal}>
              <AddIcon /> Upload
            </Link>
          </li>
          <li>
            <Link to="/" onClick={handleLogout}>
              <ExitToAppIcon /> Logout
            </Link>
          </li>
        </ul>
        <Avatar className="mx-4" src={currentUser?.photoURL} alt={currentUser?.displayName} />
        <a href="#!" className="hamburger" onClick={toggleHamMenu}>
          <MenuIcon />
        </a>
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
