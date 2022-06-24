import React from "react";
import { Outlet } from "react-router-dom";
import MobNavBar from "../../components/mobnav";
import ContactUs from "../../components/PageSection/ContactUs";
import "aos/dist/aos.css";

const Layout = () => {
  return (
    <div>
      <MobNavBar />
      {<Outlet />}
      <ContactUs />
    </div>
  );
};

export default Layout;
