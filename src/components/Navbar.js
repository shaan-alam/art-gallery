import { Link } from "react-router-dom";
import NavbarDropdown from "./NavbarDropdown";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <Link to="/" className="heading">
          <h2>Art Gallery</h2>
        </Link>
        <div className="nav-menu">
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
