import React from "react";
import { Link } from "react-router-dom";

const SubNavbar = () => {
  const bottomNavigation = [
    { title: "Home", link: "/" },
    { title: "Shop", link: "/product" },
    { title: "Cart", link: "/cart" },
    { title: "Orders", link: "/orders" },
    { title: "My Account", link: "/profile" },
    { title: "Blog", link: "/blog" },
  ];
  return (
    <div className="flex w-full justify-center origin-top-right border border-white/5 bg-black p-1 text-sm/6 text-gray-300 [--anchor-gap:var(--spacing-1)] focus:outline-none  z-50">
      {bottomNavigation.map(({ title, link }) => (
        <Link
          to={link}
          key={title}
          className="px-6 py-3 uppercase hidden md:inline-flex text-sm font-semibold text-whiteText/90 hover:text-white duration-200 relative overflow-hidden group"
        >
          {title}
          <span className="inline-flex w-full h-[1px] bg-whiteText absolute bottom-0 left-0 transform -translate-x-[105%] group-hover:translate-x-0 duration-300" />
        </Link>
      ))}
    </div>
  );
};

export default SubNavbar;
