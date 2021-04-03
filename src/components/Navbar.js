import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../Redux/Actions/AuthActionCreators";
import UploadModal from "./UploadModal";
import { AnimatePresence } from "framer-motion";
import Avatar from "@material-ui/core/Avatar";
import AddIcon from "@material-ui/icons/Add";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const Navbar = ({ currentUser, logout }) => {
  const [navMenu, setNavMenu] = useState(false);
  const [navSubMenu, setNavSubMenu] = useState(false);
  const [modal, setModal] = useState(false);

  const history = useHistory();

  const handleLogout = (e) => {
    e.preventDefault();
    logout(() => history.push("/login"));
  };

  const handleModal = (e) => {
    e.preventDefault();
    setModal(true);
  };

  return (
    <nav>
      <div className="w-full flex justify-between items-center m-auto bg-white shadow-sm py-4 border border-gray-200">
        <div className="flex-2 text-center  w-1/2">
          <h1 className="font-bold text-3xl text-indigo-700">Art Gallery</h1>
        </div>
        <ul className="flex-1 w-1/4 flex justify-around">
          <li className="py-2 px-3 text-md text-indigo-700 rounded-md bg-indigo-100 transition-all hover:bg-indigo-700 hover:text-white">
            <Link to="/" activeClass="text-black" onClick={handleModal}>
              <AddIcon /> Upload
            </Link>
          </li>
          <li className="py-2 px-3 text-md text-indigo-700 rounded-md bg-indigo-100 transition-all hover:bg-indigo-700 hover:text-white">
            <Link to="/" activeClass="text-black" onClick={handleLogout}>
              <ExitToAppIcon /> Logout
            </Link>
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
