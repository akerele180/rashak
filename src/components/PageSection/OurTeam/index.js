import React from "react";
import { Link } from "react-router-dom";
import "./Ourteam.style.css";
import rashidat from "../../../assets/images/Ellipse1.png";
import shakirat from "../../../assets/images/Shakirat-1-400x400.jpg";
import rahman from "../../../assets/images/Rahmah-400x400.jpg";

function OurTeam() {
  return (
    <section className="pb-5 meet-our-team">
      <h4
        className="fw-bolder display-6 text-center pt-5"
        style={{ color: "#4b4b4b" }}
      >
        Meet Our Team
      </h4>
      <p className="text-center container d-none d-sm-block w-50 mx-auto">
        We are a team of dedicatted, selfless and goal-oriented people working
        towards our vision of fostering shared prosperity among African farmers
        for improved quality well-being and standard of living.
      </p>
      <p className="text-center container d-block d-sm-none mx-auto">
        We are a team of dedicatted, selfless and goal-oriented people working
        towards our vision of fostering shared prosperity among African farmers
        for improved quality well-being and standard of living.
      </p>
      <div className="row container mx-auto mt-5">
        <div className="col-12 col-md text-center mb-4">
          <div>
            <img src={rahman} alt="" className="w-50 rounded-circle" />
          </div>
          <h6
            className="fw-bold mb-0 mt-3 text-uppercase"
            style={{ color: "#3e413f" }}
          >
            rahman aderinoye
          </h6>
          <p style={{ color: "#747576" }}>Managing Director/Founder</p>
        </div>
        <div className="col-12 col-md text-center mb-4">
          <div>
            <img src={shakirat} alt="" className="w-50 rounded-circle" />
          </div>
          <h6
            className="fw-bold mb-0 mt-3 text-uppercase"
            style={{ color: "#3e413f" }}
          >
            shakirat adekola
          </h6>
          <p style={{ color: "#747576" }}>Co-Founder </p>
        </div>

        <div className="col-12 col-md text-center mb-4">
          <div>
            <img src={rashidat} alt="" className="w-50 rounded-circle" />
          </div>
          <h6
            className="fw-bold mb-0 mt-3 text-uppercase"
            style={{ color: "#3e413f" }}
          >
            rashidat aderinola a.
          </h6>
          <p style={{ color: "#747576" }}>Entrepreneur</p>
        </div>
      </div>
      <p
        className="text-center text-success fw-bold"
        style={{ color: "#149e26 !important" }}
      >
        <Link to="our-team">Click here to see more &rarr;</Link>
      </p>
    </section>
  );
}

export default OurTeam;
