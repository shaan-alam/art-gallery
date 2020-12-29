import { useEffect } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import ImageGrid from "./ImageGrid";
import { getArts } from "../Redux/Actions/ArtActionCreator";

const Home = () => {
  useEffect(() => {
    getArts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <Header />
        {/* <ImageGrid /> */}
      </div>
    </>
  );
};

export default Home;
