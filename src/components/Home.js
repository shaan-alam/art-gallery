import { connect } from "react-redux";
import { useEffect } from "react";
import { logout } from "../Redux/Actions/AuthActionCreators";
import { auth } from "../firebase/config";
import { setUser } from "../Redux/Actions/AuthActionCreators";

const Home = ({ history, logout, setUser }) => {
  useEffect(() => {
    // If the user is logged in, redirect him to home route
    auth.onAuthStateChanged((user) => {
      if (user !== null) {
        setUser(user);
      } else {
        history.push("/login");
      }
    });
  }, []);

  const handleLogout = () => {
    logout(() => history.push("/"));
  };

  return (
    <button className="primary-btn" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default connect(null, { logout, setUser })(Home);
