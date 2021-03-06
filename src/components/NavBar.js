import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const NavBar = () => {
  return (
    <header className="yellowbg">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 mr-4 textout hover:text-green-100 text-4xl font-bold cursive tracking-widest"
          >
            JabberWocky
          </NavLink>
          <NavLink
            to="/post"
            className="inlline-flex items-center py-3 px-3 my-6 rounded textout hover:text-green=800"
            activeClassName="text-red-100 bg-yellow-700"
          >
            New
          </NavLink>
          <NavLink
            to="/project"
            className="inlline-flex items-center py-3 px-3 my-6 rounded textout hover:text-green=800"
            activeClassName="text-red-100 bg-yellow-700"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className="inlline-flex items-center py-3 px-3 my-6 rounded textout hover:text-green=800"
            activeClassName="text-red-100 bg-yellow-700"
          >
            About
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://github.com/FoxCantaloupe"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{
              height: 35,
              width: 35,
            }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/jose-lopez-luckyfrog/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{
              height: 35,
              width: 35,
            }}
          />
          <SocialIcon
            url="https://twitter.com/JoseLop35491374"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{
              height: 35,
              width: 35,
            }}
          />
          <SocialIcon
            url="https://www.luckyfrog.io"
            label="Our portfolio"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{
              height: 35,
              width: 35,
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
