import React from "react";
import "./HeroSection.css";
import { Link } from "react-router-dom";

import "antd/dist/antd.min.css";
import { Carousel } from "antd";
// import Typewriter from "typewriter-effect";

function HeroSection() {
  return (
    <>
      <Carousel autoplay>
        <section className="hero-section d-flex align-items-center " >
          <div className="row align-items-center d-none d-sm-block container mx-auto">
            <div className="col-12 col-lg" style={{ height: "100%" }}>
              <h1 className="fw-bold" style={{ color: "#039d4f" }}>
                AGRO ALLIED LIMITED
              </h1>
              <p className="fs-5 d-none d-sm-block">
                <i>...sustaining the African dream through Agriculture.</i>
              </p>
              <p className="d-sm-none">
                <i>...sustaining the African dream through Agriculture.</i>
              </p>
              <button
                className="btn btn-lg rounded-3 d-none d-sm-block btn-primary text-white"
                style={{ background: "#039d4f", border: "none" }}
              >
                <Link to="sign-up">Do it with us</Link>
              </button>
              <button
                className="btn btn-sm d-block d-sm-none rounded-3 btn-primary text-white"
                style={{ background: "#039d4f", border: "none" }}
              >
                <Link to="sign-up">Do it with us</Link>
              </button>
            </div>
            <div className="col"></div>
          </div>
          <div className="row align-items-start d-sm-none container mx-auto">
            <div className="col-12 col-lg" style={{ height: "100%" }}>
              <h1 className="fw-bold" style={{ color: "#039d4f" }}>
                AGRO ALLIED LIMITED
              </h1>
              <p className="fs-5 d-none d-sm-block">
                <i>...sustaining the African dream through Agriculture.</i>
              </p>
              <p className="d-sm-none">
                <i>...sustaining the African dream through Agriculture.</i>
              </p>
              <button
                className="btn btn-lg rounded-3 d-none d-sm-block btn-primary text-white"
                style={{ background: "#039d4f", border: "none" }}
              >
                <Link to="sign-up">Do it with us</Link>
              </button>
              <button
                className="btn btn-sm d-block d-sm-none rounded-3 btn-primary text-white"
                style={{ background: "#039d4f", border: "none" }}
              >
                <Link to="sign-up">Do it with us</Link>
              </button>
            </div>
            <div className="col"></div>
          </div>
        </section>
        <section className="hero-section2 d-flex align-items-center ">
          <div className="row align-items-center container mx-auto">
            <div className="col-12 col-lg" style={{ height: "100%" }}>
              <h1 className="fw-bold" style={{ color: "#039d4f" }}>
                AGRO ALLIED LIMITED
              </h1>
              <p className="fs-5 d-none d-sm-block">
                <i>...sustaining the African dream through Agriculture.</i>
              </p>
              <p className="d-sm-none">
                <i>...sustaining the African dream through Agriculture.</i>
              </p>
              <div className="d-flex">
                <button
                  className="btn btn-lg d-none d-sm-block rounded-3 btn-primary text-white me-3"
                  style={{ background: "#039d4f", border: "none" }}
                >
                  <Link to="sign-up">Buy</Link>
                </button>
                <button
                  className="btn btn-sm d-sm-none rounded-3 btn-primary text-white me-3"
                  style={{ background: "#039d4f", border: "none" }}
                >
                  <Link to="sign-up">Buy</Link>
                </button>
                <button
                  className="btn btn-lg d-none d-sm-block rounded-3 btn-primary text-white me-3"
                  style={{ background: "#039d4f", border: "none" }}
                >
                  <Link to="sign-up">Sell</Link>
                </button>
                <button
                  className="btn btn-sm d-sm-none rounded-3 btn-primary text-white me-3"
                  style={{ background: "#039d4f", border: "none" }}
                >
                  <Link to="sign-up">Sell</Link>
                </button>
                <button className="btn btn-sm d-sm-none rounded-3 btn-outline-success ">
                  <Link to="sign-up">Warehouse</Link>
                </button>
                <button className="btn btn-lg d-none d-sm-block rounded-3 btn-outline-success ">
                  <Link to="sign-up">Warehouse</Link>
                </button>
              </div>
            </div>
            <div className="col"></div>
          </div>
        </section>
        <section className="hero-section3 d-flex align-items-center ">
          <div className="row align-items-center container mx-auto">
            <div className="col-12 col-lg" style={{ height: "100%" }}>
              <h1 className="fw-bold" style={{ color: "#039d4f" }}>
                AGRO ALLIED LIMITED
              </h1>
              <p className="fs-5 d-none d-sm-block">
                <i>...sustaining the African dream through Agriculture.</i>
              </p>
              <p className="d-sm-none">
                <i>...sustaining the African dream through Agriculture.</i>
              </p>
              <div className="d-flex">
                <button
                  className="btn btn-lg d-none d-sm-block rounded-3 btn-primary text-white me-3"
                  style={{ background: "#039d4f", border: "none" }}
                >
                  <Link to="sign-up">Buy</Link>
                </button>
                <button
                  className="btn btn-sm d-sm-none rounded-3 btn-primary text-white me-3"
                  style={{ background: "#039d4f", border: "none" }}
                >
                  <Link to="sign-up">Buy</Link>
                </button>
                <button
                  className="btn btn-lg d-none d-sm-block rounded-3 btn-primary text-white me-3"
                  style={{ background: "#039d4f", border: "none" }}
                >
                  <Link to="sign-up">Sell</Link>
                </button>
                <button
                  className="btn btn-sm d-sm-none rounded-3 btn-primary text-white me-3"
                  style={{ background: "#039d4f", border: "none" }}
                >
                  <Link to="sign-up">Sell</Link>
                </button>
                <button className="btn btn-sm d-sm-none rounded-3 btn-outline-success ">
                  <Link to="sign-up">Warehouse</Link>
                </button>
                <button className="btn btn-lg d-none d-sm-block rounded-3 btn-outline-success ">
                  <Link to="sign-up">Warehouse</Link>
                </button>
              </div>
            </div>
            <div className="col"></div>
          </div>
        </section>
      </Carousel>
    </>
  );
}

export default HeroSection;
