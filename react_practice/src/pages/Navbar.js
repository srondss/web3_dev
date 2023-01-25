import { Link } from "react-router-dom";
import React from "react";

export const Navbar = () => {
  return (
    <div>
      <Link to={"/"}>Home</Link>;<Link to={"/profile"}>Profile</Link>;
      <Link to={"/contact"}>Contact</Link>;
    </div>
  );
};
