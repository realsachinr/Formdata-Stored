import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="mx-40 flex justify-between py-4 items-center ">
      <div className="flex  items-center">
        <img
          className="w-7"
          src="https://deeporion.com/_next/image?url=https%3A%2F%2Fdeeporion.s3.ap-south-1.amazonaws.com%2Fimages%2FFrame%2B606.png&w=1920&q=100"
          alt=""
        />
        <div className="leading-4">
          <p>DEEPORION</p>
          <p>TECHNOLOGIES</p>
        </div>
      </div>
      <nav className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to='/storedata'>Stored Data</Link>
      </nav>
    </div>
  );
}

export default Navbar;
