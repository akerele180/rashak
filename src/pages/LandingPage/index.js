import React from "react";
import "aos/dist/aos.css";
import HeroSection from "../../components/PageSection/HeroSection";
import AboutUs from "../../components/PageSection/AboutUs";
import OurProducts from "../../components/PageSection/OurProducts";
import OurTeam from "../../components/PageSection/OurTeam";
import OurCommodities from "../../components/PageSection/Commodities";
import CoreValues from "../../components/PageSection/CoreValues";
import Milestones from "../../components/PageSection/OurMilestones";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
      <HeroSection />
      <AboutUs />
      <OurProducts />
      <OurCommodities />
      <CoreValues />
      <Milestones />
      <OurTeam />
    </motion.div>
  );
};

export default LandingPage;
