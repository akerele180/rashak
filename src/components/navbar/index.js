import React  from "react";
// import "./navbar.style.css";
import Logo from "../../assets/logo/cropped-cropped-Rashak_1-removebg-preview.png";
import { NavLink, Link } from "react-router-dom";
// import { MdMenu, MdClose } from "react-icons/md";

function Navbar() {
  // let [menu, setMenu] = useState(false);
  let activeStyle = {
    color: "#039D4F",
  };
  let activeClassName = "underline";

  return (
    // <nav className="container-fluid d-flex align-items-center justify-content-between position-relative">
    //   <div className="logo">
    //     <Link to="/">
    //       <img src={Logo} alt="rashak" className="w-50 d-block d-sm-none"/>
    //       <img src={Logo} alt="rashak" className="d-none d-sm-block"/>
    //     </Link>
    //   </div>
    //   <ul className="d-flex align-items-center" id="web-nav">
    //     {/* <ul className="d-flex align-items-center"> */}
    //     <li>
    //       <NavLink
    //         to="home"
    //         style={({ isActive }) => (isActive ? activeStyle : undefined)}
    //       >
    //         Home
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink
    //         to="about-us"
    //         style={({ isActive }) => (isActive ? activeStyle : undefined)}
    //         className={({ isActive }) =>
    //           isActive ? activeClassName : undefined
    //         }
    //       >
    //         About Us
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink
    //         to="commodities"
    //         style={({ isActive }) => (isActive ? activeStyle : undefined)}
    //       >
    //         {({ isActive }) => (
    //           <span className={isActive ? activeClassName : undefined}>
    //             Commodities
    //           </span>
    //         )}
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink
    //         to="careers"
    //         style={({ isActive }) => (isActive ? activeStyle : undefined)}
    //       >
    //         {({ isActive }) => (
    //           <span className={isActive ? activeClassName : undefined}>
    //             Careers
    //           </span>
    //         )}
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink
    //         to="contact-us"
    //         style={({ isActive }) => (isActive ? activeStyle : undefined)}
    //       >
    //         {({ isActive }) => (
    //           <span className={isActive ? activeClassName : undefined}>
    //             Contact Us
    //           </span>
    //         )}
    //       </NavLink>
    //     </li>
    //     <li>
    //       <button
    //         className="btn btn-sm text-white"
    //         style={{ background: "#039d4f", border: "none" }}
    //       >
    //         <Link to="sign-up">Sign Up</Link>
    //       </button>
    //     </li>
    //   </ul>
    //   <div id="hamburger">
    //     {!menu ? (
    //       <MdMenu
    //         size={30}
    //         cursor="pointer"
    //         style={{ color: "#039d4f" }}
    //         onClick={() => setMenu(!menu)}
    //       />
    //     ) : (
    //       <MdClose
    //         size={30}
    //         cursor="pointer"
    //         style={{ color: "#039d4f" }}
    //         onClick={() => setMenu(!menu)}
    //       />
    //     )}
    //   </div>
    //   {/* mobile nav */}
    //   <ul
    //     className={
    //       menu
    //         ? "position-absolute bg-success text-white start-0  end-0 top-50 text-center"
    //         : "d-none"
    //     }
    //     id="mobile-nav"
    //   >
    //     {/* <ul className="d-flex align-items-center"> */}
    //     <li className="my-3">
    //       <NavLink
    //         to="home"
    //         style={({ isActive }) => (isActive ? activeStyle : undefined)}
    //       >
    //         Home
    //       </NavLink>
    //     </li>
    //     <li className="my-3">
    //       <NavLink
    //         to="about-us"
    //         style={({ isActive }) => (isActive ? activeStyle : undefined)}
    //         className={({ isActive }) =>
    //           isActive ? activeClassName : undefined
    //         }
    //       >
    //         About Us
    //       </NavLink>
    //     </li>
    //     <li className="my-3">
    //       <NavLink
    //         to="commodities"
    //         style={({ isActive }) => (isActive ? activeStyle : undefined)}
    //       >
    //         {({ isActive }) => (
    //           <span className={isActive ? activeClassName : undefined}>
    //             Commodities
    //           </span>
    //         )}
    //       </NavLink>
    //     </li>
    //     <li className="my-3">
    //       <NavLink
    //         to="careers"
    //         style={({ isActive }) => (isActive ? activeStyle : undefined)}
    //       >
    //         {({ isActive }) => (
    //           <span className={isActive ? activeClassName : undefined}>
    //             Careers
    //           </span>
    //         )}
    //       </NavLink>
    //     </li>
    //     <li className="my-3">
    //       <NavLink
    //         to="contact-us"
    //         style={({ isActive }) => (isActive ? activeStyle : undefined)}
    //       >
    //         {({ isActive }) => (
    //           <span className={isActive ? activeClassName : undefined}>
    //             Contact Us
    //           </span>
    //         )}
    //       </NavLink>
    //     </li>
    //     <li className="my-3">
    //       <button
    //         className="btn btn-sm text-white"
    //         style={{ background: "#039d4f", border: "none" }}
    //       >
    //         <Link to="sign-up">Sign Up</Link>
    //       </button>
    //     </li>
    //   </ul>
    // </nav>

    <nav class="navbar navbar-expand-lg navbar-light bg-light py-0">
      <div class="container-fluid">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="rashak" className="w-50 d-block d-sm-none" />
            <img src={Logo} alt="rashak" className="d-none d-sm-block" />
          </Link>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div class="navbar-nav">
            <ul className="d-flex align-items-center mb-0" id="web-nav">
              {/* <ul className="d-flex align-items-center"> */}
              <li className="mx-3">
                <NavLink
                  to="home"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Home
                </NavLink>
              </li>
              <li className="mx-3">
                <NavLink
                  to="about-us"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li className="mx-3">
                <NavLink
                  to="commodities"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  {({ isActive }) => (
                    <span className={isActive ? activeClassName : undefined}>
                      Commodities
                    </span>
                  )}
                </NavLink>
              </li>
              <li className="mx-3">
                <NavLink
                  to="careers"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  {({ isActive }) => (
                    <span className={isActive ? activeClassName : undefined}>
                      Careers
                    </span>
                  )}
                </NavLink>
              </li>
              <li className="mx-3">
                <NavLink
                  to="/contact-us"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  {({ isActive }) => (
                    <span className={isActive ? activeClassName : undefined}>
                      Contact Us
                    </span>
                  )}
                </NavLink>
              </li>
              <li className="mx-3">
                <button
                  className="btn btn-sm text-white"
                  style={{ background: "#039d4f", border: "none" }}
                >
                  <Link to="sign-up">Sign Up</Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
