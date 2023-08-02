import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux"

const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Account", href: "/account" },
  { title: "Login", href: "/login" },
  { title: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [currentNav, setCurrentNav] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const token = useSelector((state) => state.token)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    console.log("ye");
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <nav
        className={`fixed bg-white w-full flex flex-row justify-around h-24 items-center transition-all z-10 ${
          scrolled && "shadow-xl bg-white"
        }`}
      >
        <img src={logo} alt="404" className="sm:h-12 h-9" />

        <div className="md:flex flex-row gap-9 hidden">
          {navLinks.map((link, index) => (
            <Link
              onClick={() => setCurrentNav(link.title)}
              to={link.href}
              key={index}
              className={`group text-[rgb(46,177,170)] transition duration-300 text-[1.3rem] ${token && link.title === "Login" && "hidden"}`}
            >
              {link.title}
              <span
                className={`block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[rgb(46,177,170)] ${
                  currentNav === link.title && "max-w-full"
                }`}
              ></span>
            </Link>
          ))}
        </div>
        <div className="h-full flex items-center">
          <FontAwesomeIcon
          onClick={() => {setMobileMenu(!mobileMenu); console.log(mobileMenu)}}
            icon={faBars}
            style={{ color: "#19cc97", width: "40", height: "40" }}
            className="block md:hidden cursor-pointer"
          />
        </div>
      </nav>
      <nav className={`flex z-1 flex-grow md:hidden fixed pt-24 flex-col items-center w-full bg-white shadow-2xl ${!mobileMenu ? "translate-y-0" : "-translate-y-full"} duration-500 transition-all ease-out`}>
        {navLinks.map((link, index) => (
          <Link
            onClick={() => {setCurrentNav(link.title); setMobileMenu(!mobileMenu)}}
            to={link.href}
            key={index}
            className={`group text-[rgb(46,177,170)] transition duration-300 text-[1.3rem] m-2`}
          >
            {link.title}
            <span
              className={`block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[rgb(46,177,170)] ${
                currentNav === link.title && "max-w-full"
              }`}
            ></span>
          </Link>
        ))}
      </nav>
    </>
  );
};

export default Navbar;
