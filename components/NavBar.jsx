import React from "react";
import Links from "./Links/Links";
import Logout from "./Links/Logout";
import User from "./User";

const NavBar = () => {
  return (
    <div className="flex flex-col w-1/4 nav-height ml-5 my-5 px-5 py-5 pass-through rounded-3xl">
      <User />
      <Links />
      <div className="flex flex-grow px-5 items-stretch">
        <Logout />
      </div>
    </div>
  );
};

export default NavBar;
