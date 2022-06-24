import React from "react";
import AboutUsImage from "../../assets/images/istockphoto-493324587-612x612.png";
import visonandmission from "../../assets/images/vision-mission.png";

// import { Link } from "react-router-dom";
import first from "../../assets/svg/credit.png";
import second from "../../assets/svg/storage.png";
import third from "../../assets/svg/education.png";
import fourth from "../../assets/svg/technology.png";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <motion.div
      style={{ color: "#00000095" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="container fw-bold fs-1">About Us</h2>
      <div
        className="about-us row align-items-center mx-auto container py-5 gap-4"
        style={{ color: "#00000095" }}
      >
        <div className="col-12 col-md-7   ">
          <h2 className="fw-bold fs-4 ">Who we are</h2>
          <p>
            We are creating shared prosperity through people-led and innovative
            agricultural-sector focused approaches.
          </p>{" "}
          <p>
            We bring farmers closer to bigger opportunities where efforts are
            rewarded and prosperity sustained for greater good.
          </p>
          <p>
            We work with farmers to meet the growing demand for local and global
            agric-commodities for large scale production of consumer products.
          </p>
          <p>
            Led by women, supporting women, youths and smallholder farmers at
            large to rid the society of poverty, hunger and unemployment.
          </p>
          <p>
            <strong>
              {" "}
              We are working to alleviate poverty, empower women, improve food
              security, and more importantly, enable shared prosperity through
              agricultural innovation and sustained social impact
            </strong>
          </p>
        </div>
        <div className="col-12 col-md text-end" id="aboutusImage">
          {/* <div className="d-flex"> */}
          <img src={AboutUsImage} alt="" className="rounded-3 w-75" />
          {/* </div> */}
        </div>
      </div>

      {/* visioin-and-mission */}
      <div
        className="about-us row align-items-start mx-auto container py-5 gap-4"
        style={{ color: "#00000095" }}
      >
        <div className="col-12 col-md-7   ">
          <h2 className="fw-bold fs-4 ">Our Vision</h2>
          <p>
            Enabling shared prosperity through Agriculture, for Africa to be
            economically free
          </p>{" "}
          <h2 className="fw-bold fs-4 ">Our Mission</h2>
          <p>
            To connect African farmers and their produce to a global market
            using the most innovative methods possible
          </p>{" "}
        </div>
        <div className="col-12 col-md text-end order-first" id="aboutusImage">
          {/* <div className="d-flex"> */}
          <img src={visonandmission} alt="" className="rounded-3 w-75" />
          {/* </div> */}
        </div>
      </div>
      {/* our-approach */}

      <section style={{ background: "#039d4f20" }}>
        <h4
          className="fw-bolder display-6   text-center py-5"
          style={{ color: "#4b4b4b" }}
        >
          Our Approach
        </h4>
        <div className="row container mx-auto">
          <div className="col-12 col-md text-center mb-4">
            <div
              style={{ background: "#039d4f", height: 130, width: 130 }}
              className="rounded-circle mx-auto d-flex align-items-center justify-content-center"
            >
              <img src={third} alt="" />
            </div>
            <h6
              className="fw-bold lh-lg mb-0 mt-3"
              style={{ color: "#3e413f" }}
            >
              Education
            </h6>
            <p className="text-center">
              We work closely with farmers to support with adequate financial
              education and localized and effective agronomic best practices to
              improve their farming processes for improved crop yields and
              harvest.
            </p>
          </div>
          <div className="col-12 col-md text-center mb-4">
            <div
              style={{ background: "#039d4f", height: 130, width: 130 }}
              className="rounded-circle mx-auto d-flex align-items-center justify-content-center"
            >
              <img src={first} alt="" />
            </div>
            <h6
              className="fw-bold lh-lg mb-0 mt-3"
              style={{ color: "#3e413f" }}
            >
              Credit Support
            </h6>
            <p>
              We apply an innovative approach to de-risk small holder farmer
              groups by providing a hybrid credit facility and then support with
              adequate farm input to boost productivity.
            </p>
          </div>
          <div className="col-12 col-md text-center mb-4">
            <div
              style={{ background: "#039d4f", height: 130, width: 130 }}
              className="rounded-circle mx-auto d-flex align-items-center justify-content-center"
            >
              <img src={second} alt="" />
            </div>
            <h6
              className="fw-bold lh-lg mb-0 mt-3"
              style={{ color: "#3e413f" }}
            >
              Storage
            </h6>
            <p>
              Farmers can effortlessly access our state-of-the-art storage
              facility to store and preserve their produce, while enjoying easy
              route to global markets
            </p>
          </div>
          <div className="col-12 col-md text-center mb-4">
            <div
              style={{ background: "#039d4f", height: 130, width: 130 }}
              className="rounded-circle mx-auto d-flex align-items-center justify-content-center"
            >
              <img src={fourth} alt="" />
            </div>
            <h6
              className="fw-bold lh-lg mb-0 mt-3"
              style={{ color: "#3e413f" }}
            >
              Technology
            </h6>
            <p>
              Farmers can effortlessly access our state-of-the-art storage
              facility to store and preserve their produce, while enjoying easy
              route to global markets
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutUs;
