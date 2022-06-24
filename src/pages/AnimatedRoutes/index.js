import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "../LandingPage";
import MeetOurTeam from "../MeetOurTeamPage";
import AboutUs from "../AboutUsPage";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation;
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="our-team" element={<MeetOurTeam />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
