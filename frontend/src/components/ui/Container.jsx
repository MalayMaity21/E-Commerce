import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={`max-w-screen-xl mx-auto py-10 px-4 lg:px-0, ${className}`}>
      {children}
    </div>
  );
};

export default Container;
