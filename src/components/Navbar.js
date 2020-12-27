import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Navbar = ({ currentUser }) => {
  return (
    <nav>
      <div className="container">
        <Link to="/">
          <h3>Art Gallery</h3>
        </Link>
        <div className="nav-menu">
          <a href="#!">Upload</a>
          <div className="dropdown">
            <img src={currentUser.photoURL} alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.currentUser,
  };
};

export default connect(mapStateToProps)(Navbar);
