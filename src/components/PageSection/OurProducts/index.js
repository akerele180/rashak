import React from "react";
import { Link } from "react-router-dom";
import first from "../../../assets/svg/Vector.png";
import second from "../../../assets/svg/Vector-1.png";
import third from "../../../assets/svg/Vector-2.png";
import fourth from "../../../assets/svg/Vector-3.png";

function OurProducts() {
  return (
    <section
      style={{ background: "#039d4f20" }}
      // data-aos="fade-up"
      // data-aos-offset="200"
      // data-aos-delay="50"
      // data-aos-duration="1000"
      // data-aos-easing="ease-in-out"
      // data-aos-mirror="true"
      // data-aos-once="false"
      // data-aos-anchor-placement="top-center"
    >
      <h4
        className="fw-bolder display-6   text-center py-5"
        style={{ color: "#4b4b4b" }}
      >
        Our Products
      </h4>
      <div className="row container mx-auto">
        <div className="col-12 col-md text-center mb-4">
          <div
            style={{ background: "#039d4f", height: 130, width: 130 }}
            className="rounded-circle mx-auto d-flex align-items-center justify-content-center"
          >
            <img src={first} alt="" />
          </div>
          <h6 className="fw-bold lh-lg mb-0 mt-3" style={{ color: "#3e413f" }}>
            Palm Kernel
          </h6>
          <p className="text-center">
            Palm kernel nuts are cracked under controlled moisture content using
            machine
          </p>
        </div>
        <div className="col-12 col-md text-center mb-4">
          <div
            style={{ background: "#039d4f", height: 130, width: 130 }}
            className="rounded-circle mx-auto d-flex align-items-center justify-content-center"
          >
            <img src={second} alt="" />
          </div>
          <h6 className="fw-bold lh-lg mb-0 mt-3" style={{ color: "#3e413f" }}>
            Palm Kernel Oil
          </h6>
          <p>
            Palm kernel oil is an edible plant oil derived from the kernel of
            the oil palm Elaeis guineensis
          </p>
        </div>
        <div className="col-12 col-md text-center mb-4">
          <div
            style={{ background: "#039d4f", height: 130, width: 130 }}
            className="rounded-circle mx-auto d-flex align-items-center justify-content-center"
          >
            <img src={third} alt="" />
          </div>
          <h6 className="fw-bold lh-lg mb-0 mt-3" style={{ color: "#3e413f" }}>
            Palm Kernel Cake
          </h6>
          <p>
            Palm kernel cake is the solid residue left behind after the
            extraction of oil from the kernels{" "}
          </p>
        </div>
        <div className="col-12 col-md text-center mb-4">
          <div
            style={{ background: "#039d4f", height: 130, width: 130 }}
            className="rounded-circle mx-auto d-flex align-items-center justify-content-center"
          >
            <img src={fourth} alt="" />
          </div>
          <h6 className="fw-bold lh-lg mb-0 mt-3" style={{ color: "#3e413f" }}>
            Palm Kernel Sludge
          </h6>
          <p>
            Palm kernel cake is the solid residue left behind after the
            extraction of oil from the kernels{" "}
          </p>
        </div>
      </div>

      <p className="text-center py-5 mb-0" style={{ color: "#039d4f" }}>
        <Link to="#"> View more products</Link>
      </p>
    </section>
  );
}

export default OurProducts;
