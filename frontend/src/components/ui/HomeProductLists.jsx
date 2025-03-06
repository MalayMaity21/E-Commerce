import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProductCard from "./ProductCard";
const SampleNextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 right-[-35px] transform -translate-y-1/2 bg-black text-white rounded-full p-3 cursor-pointer hover:bg-gray-800 transition z-10"
      onClick={onClick}
    >
      <FaChevronRight size={20} />
    </div>
  );
};

const SamplePrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 left-[-35px] transform -translate-y-1/2 bg-black text-white rounded-full p-3 cursor-pointer hover:bg-gray-800 transition z-10"
      onClick={onClick}
    >
      <FaChevronLeft size={20} />
    </div>
  );
};
const HomeProductLists = ({ SectionName, ProductData }) => {
  console.log(ProductData);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-12 mx-auto">
        <h1 className="text-3xl font-medium text-gray-900 text-center mb-8">
          {SectionName}
        </h1>
        <div className="relative">
          <Slider {...settings} className="flex flex-wrap">
            {ProductData.map(
              (
                {
                  title,
                  topLevelCategory,
                  price,
                  imageUrl,
                  thirdLevelCategory,
                },
                index
              ) => (
                <ProductCard
                  key={index}
                  title={title}
                  topLevelCategory={topLevelCategory}
                  price={price}
                  imageUrl={imageUrl}
                  thirdLevelCategory={thirdLevelCategory}
                />
              )
            )}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default HomeProductLists;
