import "./App.css";
// import HeroSection from "./components/PageSection/HeroSection";
// import AboutUs from "./components/PageSection/AboutUs";
// import OurProducts from "./components/PageSection/OurProducts";
// import OurCommodities from "./components/PageSection/Commodities";
// import Milestones from "./components/PageSection/OurMilestones";
// import CoreValues from "./components/PageSection/CoreValues";
// import OurTeam from "./components/PageSection/OurTeam";

import ScrollToTop from "react-scroll-to-top";
import "aos/dist/aos.css"; 
import AppRoutes from "./routes";
// import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="main">
      
      <ScrollToTop smooth />
      <AppRoutes/>
      
      {/* <Routes>
        <Route path="contact-us" element={<ContactUs />} />
      </Routes> */}
     
    </div>
  );
}

export default App;
