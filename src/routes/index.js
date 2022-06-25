import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../Layouts/MainLayout";
import AboutUs from "../pages/AboutUsPage";
import MeetOurTeam from "../pages/MeetOurTeamPage";
import LandingPage from "../pages/LandingPage";
import Commodities from "../pages/Commodities";
import ContactUs from "../pages/ContactUs";
import Careers from "../pages/Careers";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* <AnimatedRoutes /> */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/our-team" element={<MeetOurTeam />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/commodities" element={<Commodities />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/careers" element={<Careers />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
