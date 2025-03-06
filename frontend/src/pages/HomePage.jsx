import React from "react";
import HomeBanner from "../components/ui/HomeBanner";
import Categories from "../components/ui/Categories";
import Recommendations from "../components/ui/Recommendation";
import HomeProductLists from "../components/ui/HomeProductLists";
import { Products } from "../Data/Recommendation";
const HomePage = () => {
  return (
    <>
      <HomeBanner />
      <Categories />
      <HomeProductLists SectionName={"Trending"} ProductData={Products} />
      <Recommendations />
    </>
  );
};

export default HomePage;
