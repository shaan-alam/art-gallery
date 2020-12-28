import { useState } from "react";
import { Link } from "react-router-dom";
import NavbarDropdown from "./NavbarDropdown";

const Navbar = () => {
  const [navmenu, setNavmenu] = useState(false);

  return (
    <nav>
      <a
        href="#!"
        className="navbar-toggler"
        onClick={() => setNavmenu(!navmenu)}
      >
        <i className="fa fa-bars"></i>
      </a>
      <div className="container">
        <Link to="/" className="heading">
          <h2>Art Gallery</h2>
        </Link>
        <div className={`nav-menu ${navmenu ? "active" : ""}`}>
          <a href="#!">
            <i className="fa fa-plus"></i> Upload
          </a>
          <NavbarDropdown />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
