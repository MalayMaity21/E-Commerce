import React from "react";
import HomeBanner from "../components/ui/HomeBanner";
import Categories from "../components/ui/Categories";
import Recommendations from "../components/ui/Recommendation";
const HomePage = () => {
  return (
    <>
      <HomeBanner />
      <Categories />
      <Recommendations />
    </>
  );
};

export default HomePage;
