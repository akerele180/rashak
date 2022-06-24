import React, { useRef } from "react";
import "./style.css";
import { FaTimes, FaBars } from "react-icons/fa";
import Logo from "../../assets/logo/cropped-cropped-Rashak_1-removebg-preview.png";
import { Link, NavLink } from "react-router-dom";
const MobNavBar = () => {
  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  let activeStyle = {
    color: "#039D4F !important",
  };
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="rashak-farm" />
      </div>
      <nav ref={navRef}>
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive ? { color: "#039d4f" } : undefined
          }
          className="mx-3"
        >
          Home
        </NavLink>
        <NavLink
          to="about-us"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="mx-3"
        >
          About Us
        </NavLink>
        <NavLink
          to="commodities"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="mx-3"
        >
          Commodities
        </NavLink>
        <NavLink
          to="careers"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="mx-3"
        >
          Careers
        </NavLink>
        <NavLink
          to="/contact-us"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="mx-3"
        >
          Contact Us
        </NavLink>
        <button
          className="btn btn-sm text-white"
          style={{ background: "#039d4f", border: "none" }}
        >
          <Link to="sign-up">Sign Up</Link>
        </button>
        <button className="nav_btn nav-close-btn" onClick={showNavBar}>
          <FaTimes size={30} color="#039d4f" />
        </button>
      </nav>

      {/* <nav>
        <ul className="d-flex">
          <li>
            <NavLink
              to="messages"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Messages
            </NavLink>
          </li>
          <li>
            <NavLink
              to="tasks"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Tasks
            </NavLink>
          </li>
          <li>
            <NavLink to="tasks">
              {({ isActive }) => (
                <span className={isActive ? activeClassName : undefined}>
                  Tasks
                </span>
              )}
            </NavLink>
          </li>
        </ul>
      </nav> */}

      <button className="nav_btn" onClick={showNavBar}>
        <FaBars size={30} color="#039d4f" />
      </button>
    </header>
  );
};

export default MobNavBar;
