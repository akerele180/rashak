import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../Layouts/MainLayout";
import AboutUs from "../pages/AboutUsPage";
import MeetOurTeam from "../pages/MeetOurTeamPage";
import LandingPage from "../pages/LandingPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* <AnimatedRoutes /> */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/our-team" element={<MeetOurTeam />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
