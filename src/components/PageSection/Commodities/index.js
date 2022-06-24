import React from "react";
import './commodities.style.css'
import { Link } from "react-router-dom";
import first from "../../../assets/images/Ears-corn.png";
import second from "../../../assets/images/Ears-corn2.png";
import third from "../../../assets/images/Ears-corn3.png";
import fourth from "../../../assets/images/Ears-corn4.png";
import fifth from "../../../assets/images/Ears-corn5.png";

function OurCommodities() {
  return (
    <section className="our-commodities">
      <h4
        className="fw-bolder display-6   text-center py-5"
        style={{ color: "#4b4b4b" }}
      >
        Commodities
      </h4>
      <div className="row container mx-auto">
        <div className="col-12 col-md text-center mb-5">
          <div
            className="rounded-circle mx-auto d-flex align-items-center justify-content-center img-container"
            // style={{ width: "200px", height: "150px" }}
          >
            <img
              style={{ borderRadius: "20px" }}
              className="w-100 maize"
              src={first}
              alt=""
            />
          </div>
          <h6 className="fw-bold lh-lg mb-0 mt-3" style={{ color: "#3e413f" }}>
            Maize
          </h6>
          <button className="btn btn btn-sm btn-outline-success">
            Trade Now
          </button>
        </div>
        <div className="col-12 col-md text-center mb-5">
          <div
            className="rounded-circle mx-auto d-flex align-items-center justify-content-center img-container"
            // style={{ width: "200px", height: "150px" }}
          >
            <img
              style={{ borderRadius: "20px" }}
              className="w-100 soya-beans"
              src={second}
              alt=""
            />
          </div>
          <h6 className="fw-bold lh-lg mb-0 mt-3" style={{ color: "#3e413f" }}>
            Soya Beans
          </h6>
          <button className="btn btn btn-sm btn-outline-success">
            Trade Now
          </button>
        </div>
        <div className="col-12 col-md text-center mb-5">
          <div
            className="rounded-circle mx-auto d-flex align-items-center justify-content-center img-container"
            // style={{ width: "200px", height: "150px" }}
          >
            <img
              style={{ borderRadius: "20px" }}
              className="w-100 kernel-nut"
              src={third}
              alt=""
            />
          </div>
          <h6 className="fw-bold lh-lg mb-0 mt-3" style={{ color: "#3e413f" }}>
            Palm Kernel Nut
          </h6>
          <button className="btn btn btn-sm btn-outline-success">
            Trade Now
          </button>
        </div>
        <div className="col-12 col-md text-center mb-5">
          <div
            className="rounded-circle mx-auto d-flex align-items-center justify-content-center img-container"
            // style={{ width: "200px", height: "150px" }}
          >
            <img
              style={{ borderRadius: "20px" }}
              className="w-100 kernel-oil"
              src={fourth}
              alt=""
            />
          </div>
          <h6 className="fw-bold lh-lg mb-0 mt-3" style={{ color: "#3e413f" }}>
            Palm Kernel Oil
          </h6>
          <button className="btn btn btn-sm btn-outline-success">
            Trade Now
          </button>
        </div>
        <div className="col-12 col-md text-center mb-5">
          <div
            className="rounded-circle mx-auto d-flex align-items-center justify-content-center img-container"
            // style={{ width: "200px", height: "150px" }}
          >
            <img
              style={{ borderRadius: "20px" }}
              className="w-100 cashew"
              src={fifth}
              alt=""
            />
          </div>
          <h6 className="fw-bold lh-lg mb-0 mt-3" style={{ color: "#3e413f" }}>
            Cashew Nut
          </h6>
          <button className="btn btn btn-sm btn-outline-success">
            Trade Now
          </button>
        </div>
      </div>

      <p className="text-center py-5" style={{ color: "#039d4f" }}>
        <Link to="#"> View more products</Link>
      </p>
    </section>
  );
}

export default OurCommodities;
