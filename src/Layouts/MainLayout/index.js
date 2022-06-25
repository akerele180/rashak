import React from "react";
import { Outlet } from "react-router-dom";
import MobNavBar from "../../components/mobnav";
import ContactUs from "../../components/PageSection/ContactUs";
import "aos/dist/aos.css";

const Layout = () => {
  return (
    <div>
      <MobNavBar />
      <div className="outlet" style={{ minHeight: "100vh" }}>
        {<Outlet />}
      </div>
      <ContactUs />
    </div>
  );
};

export default Layout;
