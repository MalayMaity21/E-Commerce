import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({
  _id,
  title,
  imageUrl,
  topLevelCategory,
  thirdLevelCategory,
  price,
}) => {
  return (
    <Link to={`/products/${_id}`}>
      <div className="p-4">
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
              {title.length > 20 ? title.slice(0, 20) + "..." : title}
            </h2>
            <p className="text-base">{thirdLevelCategory}</p>
            <p className="text-lg font-semibold mt-2">₹{price}</p>{" "}
            {/* ✅ Show price */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
