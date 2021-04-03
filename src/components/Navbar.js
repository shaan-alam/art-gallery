import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../Redux/Actions/AuthActionCreators";
import UploadModal from "./UploadModal";
import { AnimatePresence } from "framer-motion";
import AddIcon from "@material-ui/icons/Add";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MenuIcon from "@material-ui/icons/Menu";
import "../assets/css/navbar.css";

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
            <Link to="/" activeClass="text-black" onClick={handleModal}>
              <AddIcon /> Upload
            </Link>
          </li>
          <li>
            <Link to="/" activeClass="text-black" onClick={handleLogout}>
              <ExitToAppIcon /> Logout
            </Link>
          </li>
        </ul>
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

// <nav>
// <header className="nav-heading">
//   <a
//     href="#!"
//     className="navbar-toggler"
//     onClick={() => setNavMenu(!navMenu)}
//   >
//     <i className="fa fa-bars"></i>
//   </a>
//   <h3>Art gallery</h3>
// </header>
// <div className={`nav-menu ${navMenu ? "active" : ""}`}>
//   <ul className="nav-menu-list">
//     <li>
//       <Link to="/">
//         <i className="fa fa-home"></i> Home
//       </Link>
//     </li>
//     <li>
//       <a href="#!" onClick={() => setModal(true)}>
//         <i className="fa fa-plus"></i> Upload
//       </a>
//     </li>
//     <li className="user-dropdown">
//       <div className="user-avatar">
//         <h3>{currentUser.displayName}</h3>
//         <img
//           src={currentUser.photoURL}
//           alt={currentUser.displayName}
//           tilte={currentUser.displayName}
//         />
//         <a
//           href="#!"
//           className="submenu-toggler"
//           onClick={() => setNavSubMenu(!navSubMenu)}
//         >
//           <i className="fa fa-chevron-down"></i>
//         </a>
//       </div>
//       <ul
//         className={`user-info-submenu ${
//           navSubMenu ? "active-submenu" : ""
//         }`}
//       >
//         <Link to="profile">
//           <li>View Profile</li>
//         </Link>
//         <Link to="/login" onClick={handleLogout}>
//           <li> Logout</li>
//         </Link>
//       </ul>
//     </li>
//   </ul>
// </div>
// <AnimatePresence>
//   {modal && <UploadModal setModal={setModal} />}
// </AnimatePresence>
// </nav>
