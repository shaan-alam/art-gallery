import { connect } from "react-redux";
import { useEffect } from "react";
import { logout } from "../Redux/Actions/AuthActionCreators";
import { setUser } from "../Redux/Actions/AuthActionCreators";
import Navbar from "./Navbar";

const Home = ({ history, logout }) => {
  const handleLogout = () => {
    logout(() => history.push("/login"));
  };

  return (
    <>
      <Navbar />

      <button className="primary-btn" onClick={handleLogout}>
        Logout
      </button>
    </>
  );
};

export default connect(null, { logout, setUser })(Home);
