import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Products } from "../../Data/Recommendation";
import { Link } from "react-router-dom";

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

const Recommendation = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const productCategories = [
    "electronics",
    "fashion",
    "watches",
    "shoes",
    "laptops",
    "headphones",
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-12 mx-auto">
        <h1 className="text-3xl font-medium text-gray-900 text-center mb-8">
          Recommended Products
        </h1>
        <div className="relative">
          <Slider {...settings} className="flex flex-wrap">
            {Products.map(
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
                <Link to={"/"}>
                  <div key={index} className="p-4">
                    <div className="bg-white p-2 rounded-lg shadow-lg relative z-0 w-68">
                      <img
                        className="h-72 w-full rounded object-cover object-center mb-2"
                        src={imageUrl}
                        alt={`Product in ${topLevelCategory}`}
                        loading="lazy"
                      />
                      <div className="px-2">
                        <h3 className="text-indigo-500 text-xs font-medium uppercase">
                          {topLevelCategory}
                        </h3>
                        <h2 className="text-lg text-gray-900 font-medium ">
                          {title.length > 20
                            ? title.slice(0, 20) + "..."
                            : title}
                        </h2>
                        <p>₹{price}</p>
                        <p className="text-base">{thirdLevelCategory}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            )}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Recommendation;
