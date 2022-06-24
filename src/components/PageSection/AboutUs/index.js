import React from "react";
import "./AboutUs.style.css";
import AboutUsImage from "../../../assets/images/istockphoto-493324587-612x612.png";
function AboutUs() {
  return (
    <div
      className="about-us row align-items-center mx-auto container py-5 gap-4"
      style={{ color: "#00000095" }}
    >
      <div className="col-12 col-md-7   ">
        <h2 className="fw-bold fs-1">About Us</h2>
        <p>
          Rashak and Agro Allied Farms Limited is an agro processing farm
          registered with the Corporate Affairs Commission under the Company and
          Allied Matter Act of 1990 as a limited liability company.
        </p>{" "}
        <p>
          The company’s major operations involves the sourcing, processing,
          supply and sales of Palm Kernel nuts, Palm kernel Oil, Palm Kernel
          Cake, Palm Kernel Sludge to manufacturing companies in Lagos, Ibadan,
          Ogun state and other parts of the country.
        </p>
      </div>
      <div className="col-12 col-md text-end" id="aboutusImage">
        {/* <div className="d-flex"> */}
        <img src={AboutUsImage} alt="" className="rounded-3 w-75" />
        {/* </div> */}
      </div>
    </div>
  );
}

export default AboutUs;
