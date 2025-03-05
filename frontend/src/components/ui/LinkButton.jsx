import React from "react";
import { Link } from "react-router-dom";

const LinkButton = () => {
  return (
    <Link className=' "bg-darkText/80 hover:bg-darkText text-whiteText py-2.5 px-6 rounded-full flex items-center gap-2 duration-200",'>
      start shopping
    </Link>
  );
};

export default LinkButton;
