import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaGooglePlusSquare,
} from "react-icons/fa";
import { BsFillGeoAltFill, BsGlobe, BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { createRef } from "react";

const ContactUs = () => {
  const [verified, setVerified] = useState(false);
  const getRecaptcha = createRef().current?.getValue();
  const onChange = (value) => {
    if (value !== null) {
      setVerified(true);
    }
    return value;
  };
  const onErrored = (onChange) => {
    if (onChange !== null) {
      setVerified(true);
    } else setVerified(false);
  };

  return (
    <section
      className="text-white pb-5 mx-auto"
      style={{ background: "#6f6f6f" }}
      id="contact-us"
      // data-aos="fade-up"
      // data-aos-offset="200"
      // data-aos-delay="50"
      // data-aos-duration="5000"
      // data-aos-easing="ease-in-out"
      // data-aos-mirror="true"
      // data-aos-once="false"
      // data-aos-anchor-placement="top-center"
    >
      <h4 className="fw-bolder display-6 text-center pt-5">Contact Us</h4>
      <p className="text-center container w-50 mx-auto">
        We would love to hear from you
      </p>
      <div className="row gap-4 container mx-auto justify-content-between align-items-center">
        <form className="col-12 col-md-6">
          <label htmlFor="name" className="lh-lg">
            Your Name <span className="text-danger fw-bold">*</span>
          </label>
          <br />
          <input
            type="text"
            name=""
            id=""
            className="border border-2 border-white rounded-3 py-2  px-3 w-100 text-black"
            placeholder="Type your name..."
          />
          <br />
          <label htmlFor="email" className="mt-2 lh-lg">
            Your Email <span className="text-danger fw-bold">*</span>
          </label>
          <br />
          <input
            type="email"
            name=""
            id=""
            className="border border-2 border-white rounded-3 py-2  px-3 w-100 text-black"
            placeholder="Type your name..."
          />
          <br />
          <label htmlFor="subject" className="mt-2 lh-lg">
            Subject <span className="text-danger fw-bold">*</span>
          </label>
          <br />
          <input
            type="text"
            name=""
            id=""
            className="border border-2 border-white rounded-3 py-2 w-100 px-3  text-black"
            placeholder="Type your name..."
          />
          <br />
          <label htmlFor="name" className="mt-2 lh-lg">
            Your Message
          </label>
          <br />
          <textarea
            id="subject"
            name="subject"
            cols={30}
            placeholder="What's on your mind?..."
            className="py-2 px-3 w-100 rounded-3 text-black"
          ></textarea>
          <br />
          <ReCAPTCHA
            ref={getRecaptcha}
            sitekey="6LdsYo0gAAAAANpYJ-33pZykCpHUGuy56ueCHq8k"
            onChange={onChange}
            onClick={() => console.log(getRecaptcha)}
            onErrored={onErrored}
          />
          <button
            className="btn btn-outline-light text-transparent w-100 mt-4"
            disabled={!verified ? true : false}
          >
            Send
          </button>
        </form>
        <div className="footer col-12 col-md-5">
          <p className="mb-1">Contact us on the details given below:</p>
          <ul className="list-unstyled">
            <li>
              <BsFillGeoAltFill /> Address:
              <br />
              <span style={{ color: "#ffffff80" }}>
                Aba Keji Town, right in the neighbourhood of Cocoa Research
                Institute of Nigeria (CRIN), Idi-Ayunre, Oluyole LGA, Ibadan,
                Oyo State.
              </span>
            </li>
            <li className="mt-3">
              <BsTelephoneFill style={{ marginRight: "5px" }} />
              Phone:
              <br />
              <span style={{ color: "#ffffff80" }}>+234 9056938414</span>
            </li>
            <li className="mt-3">
              <GrMail style={{ marginRight: "5px" }} /> Email:
              <br />
              <span style={{ color: "#ffffff80" }}>
                support@rashakagro.com.ng
              </span>
            </li>
            <li className="mt-3 ">
              <BsGlobe style={{ marginRight: "5px" }} />
              Website:
              <br />
              <span style={{ color: "#ffffff80" }}>
                https://rashakagro.com.ng
              </span>
            </li>
          </ul>
          <ul className="list-unstyled d-flex align-items-center">
            <li className="me-2">
              <FaTwitter
                size={28}
                style={{
                  color: "#6f6f6f",
                  padding: "5px",
                  background: "#ffffff",
                  borderRadius: "5px",
                }}
              />
            </li>
            <li className="mx-2">
              <FaFacebookF
                size={28}
                style={{
                  color: "#6f6f6f",
                  padding: "5px",
                  background: "#ffffff",
                  borderRadius: "5px",
                }}
              />
            </li>
            <li className="mx-2">
              <FaLinkedinIn
                size={28}
                style={{
                  color: "#6f6f6f",
                  padding: "5px",
                  background: "#ffffff",
                  borderRadius: "5px",
                }}
              />
            </li>
            <li className="mx-2">
              <FaGooglePlusSquare size={30} />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
