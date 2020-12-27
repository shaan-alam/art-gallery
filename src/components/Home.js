import { connect } from "react-redux";
import { useEffect } from "react";
import { logout } from "../Redux/Actions/AuthActionCreators";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
    </>
  );
};

export default Home;
