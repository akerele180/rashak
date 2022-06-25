import React from "react";
import { motion } from "framer-motion";
import contactus from "../../assets/images/consultancy.png";

const ContactUs = () => {
  return (
    <motion.div
      style={{ color: "#00000095" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="container fw-bold fs-1 mt-4">Contact Us</h2>
      <div
        className="about-us row align-items-center mx-auto container py-2 gap-5"
        style={{ color: "#00000095" }}
      >
        <div className="col-12 col-md-7">
          <h2 className="fw-bold fs-4 ">Consultancy</h2>
          <p className="text-justify" style={{ textAlign: "justify" }}>
            We consult for new entrants into the palm kernel processing
            business, there by supporting them from setting up processing
            facilities and training on the use of various equipment, provide
            relevant business support to for effective management of the
            business.
          </p>{" "}
        </div>
        <div className="col-12 col-md text-end" id="aboutusImage">
          {/* <div className="d-flex"> */}
          <img src={contactus} alt="contact-us" className="rounded-3 w-75" />
          {/* </div> */}
        </div>
      </div>
      {/* visioin-and-mission */}
    </motion.div>
  );
};

export default ContactUs;
