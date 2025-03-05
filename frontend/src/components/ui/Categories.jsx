import React, { useState } from "react";
import Container from "./Container";
import { Link } from "react-router-dom";

const Categories = () => {
  const categoriesList = [
    {
      id: 1,
      name: "Electronics",
      image:
        "https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg",
    },
    {
      id: 2,
      name: "Fashion",
      image: "https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg",
    },
    {
      id: 3,
      name: "Home & Furniture",
      image:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    },
    {
      id: 4,
      name: "Sports & Fitness",
      image:
        "https://images.pexels.com/photos/6455592/pexels-photo-6455592.jpeg",
    },
    {
      id: 5,
      name: "Beauty & Personal Care",
      image:
        "https://images.pexels.com/photos/5938561/pexels-photo-5938561.jpeg",
    },
    {
      id: 6,
      name: "Toys & Baby Products",
      image:
        "https://images.pexels.com/photos/8474029/pexels-photo-8474029.jpeg",
    },
  ];
  const [categories, setCategories] = useState([]);
  return (
    <Container>
      <div className="mb-10">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold">Popular categories</h1>
          <Link
            to={"/category/tvAndAudio"}
            className="font-medium relative group overflow-hidden"
          >
            View All Categories{" "}
            <span className="absolute bottom-0 left-0 w-full block h-[1px] bg-gray-600 -translate-x-[100%] group-hover:translate-x-0 duration-300" />
          </Link>
        </div>
        <div className="w-full h-[1px] bg-gray-200 mt-3" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 p-4">
        {categoriesList.map((category) => (
          <Link
            to={`/categories/${category?.link}`}
            key={category.id}
            className="text-center"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-24 h-24 object-cover rounded mx-auto"
            />
            <p className="mt-2 text-sm font-semibold">{category.name}</p>
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default Categories;
