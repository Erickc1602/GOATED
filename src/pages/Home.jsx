import React from "react";
import Announcement from "../components/Announcement";
import NavBar from "../components/NavBar";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <>
      <div>
        <Announcement />

        <NavBar />
        <Slider />
        <Products />
      </div>
    </>
  );
};

export default Home;
