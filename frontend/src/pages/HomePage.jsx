import React from "react";
import Navbar from "../components/ui/Navbar";
import SubNavbar from "../components/ui/SubNavbar";
import HomeBanner from "../components/ui/HomeBanner";

import MainFooter from "../components/Footer/MainFooter";
import Categories from "../components/ui/Categories";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <SubNavbar />
      <HomeBanner />
      <Categories />
      <MainFooter />
    </>
  );
};

export default HomePage;
