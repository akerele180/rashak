import React from "react";
import sakirat from "../../assets/images/Shakirat-1-400x400.jpg";
import rahmah from "../../assets/images/Rahmah-400x400.jpg";
import tunde from "../../assets/images/tunde.png";
import yusuf from "../../assets/images/yusuf.png";

import { motion } from "framer-motion";
const MeetOurTeam = () => {
  return (
    <motion.div
      style={{ color: "#00000095" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="container fw-bold fs-1">Meet our Team</h2>
      {/* rahmah */}
      <div className="about-us row align-items-center mx-auto container py-5 gap-4">
        <div className="col-12 col-md-7   ">
          <h2 className="fw-bold fs-3 mb-0">
            Rahmah Aderinoye{" "}
            {/* <span className="fw-normal fs-6">Chief Technology Officer</span> */}
          </h2>
          <h2 className="mb-4 fs-6">Managing Director </h2>
          <p>
            Rahmah Aderinoye is a female entrepreneur with keen interest in
            Agribusiness. She believes in an environment that supports
            innovation, creativity and efficiency. She is driven by the passion
            to create opportunities for women and youths through agriculture and
            intensive capacity building.
          </p>{" "}
          <p>
            Rahmah is a Resolution Project Fellow and a United Nations Awardee.
            A dedicated,purpose-driven and visionary woman with great penchant
            for entrepreneurial excellence. She brings her international
            business experience and solid entrepreneurial orientation to bear in
            steering the leadership of the firm.
          </p>
          <p>
            Rahmah was born in Ibadan, Nigeria before she moved to the United
            States where she graduated from Langston University, Oklahoma.
          </p>
          <p>
            In the quest for entrepreneurial advancement, Rahmah also attended
            the Enterprise Development Centre, Pan Atlantic University (Lagos
            Business School) for an intensive entrepreneurial training. To this
            regard she is a World Bank WomenX scholar.
          </p>
        </div>
        <div className="col-12 col-md text-end order-first" id="aboutusImage">
          {/* <div className="d-flex"> */}
          <img src={rahmah} alt="" className="rounded-3 w-75" />
          {/* </div> */}
        </div>
      </div>
      {/* shakirah */}
      <div
        className="about-us row align-items-center mx-auto container py-5 gap-4"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="5000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        <div className="col-12 col-md-7 order-last order-md-first">
          <h2 className="fw-bold fs-3 mb-0">
            Shakirat Adekola{" "}
            {/* <span className="fw-normal fs-6">Chief Technology Officer</span> */}
          </h2>
          <h2 className="mb-4 fs-6">Director </h2>
          <p>
            Shakirat was born in Ibadan, Nigeria before she migrated to the
            United States where she graduated from Texas Southern University,
            Houston.
          </p>{" "}
          <p>
            Shakirat is a co-founder of Rashak Agro-Allied, an agricultural
            processing firm specializing in Palm kernel nuts and its
            by-products. She has always been passionate about poverty
            eradication through agricultural value chain creation for both women
            and youths.
          </p>
          <p>
            Shakirat brings a combination of leadership experience, venture
            investment spanning project management and business development in a
            start-up and global companies. She is now a member of 4H/Youth
            Livestock programming in Collin County.
          </p>
          <p>
            She also has a working relationship with major venture capital
            partners in North America.
          </p>
        </div>
        <div className="col-12 col-md text-end" id="aboutusImage">
          {/* <div className="d-flex"> */}
          <img src={sakirat} alt="" className="rounded-3 w-75" />
          {/* </div> */}
        </div>
      </div>

      {/* cto */}
      <div className="about-us row align-items-center mx-auto container py-5 gap-4">
        <div className="col-12 col-md-7   ">
          <h2 className="fw-bold fs-3 mb-0">
            Tunde Awopegba{" "}
            {/* <span className="fw-normal fs-6">Chief Technology Officer</span> */}
          </h2>
          <h2 className="mb-4 fs-6">Chief Technology Officer</h2>
          <p>
            Tunde holds a Master of Information Science from the University of
            Ibadan, Nigeria. He is a Full Stack Developer with a vast experience
            in building enterprise resource solutions and mobile applications.
          </p>{" "}
          <p>
            He provides technology and innovation directions to Rashak and work
            closely with a team of engineers to leverage technology to
            accelerate business growth and potential.
          </p>
        </div>
        <div className="col-12 col-md text-end order-first " id="aboutusImage">
          {/* <div className="d-flex"> */}
          <img src={tunde} alt="" className="rounded-3 w-75" />
          {/* </div> */}
        </div>
      </div>
      {/* yusuf */}
      <div
        className="about-us row align-items-center mx-auto container py-5 gap-4"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="5000"
        data-aos-easing="ease-in-out"
      data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        <div className="col-12 col-md-7  order-last order-md-first  ">
          <h2 className="fw-bold fs-3 mb-0">
            Yusuf Akinkunmi{" "}
            {/* <span className="fw-normal fs-6">Chief Technology Officer</span> */}
          </h2>
          <h2 className="mb-4 fs-6">
            Field Operations and Business Support Manager{" "}
          </h2>
          <p>
            Yusuf is responsible for business support and procurement processes.
            He oversees the trading and delivery of commodities supplied to our
            customers.
          </p>{" "}
          <p>
            He coordinates also, the production process and ensures that
            resources allocated are judiciously exploited to the benefit of the
            company.
          </p>
          <p>
            He is a graduate of Agric Economics from the University of Ibadan,
            Ibadan.
          </p>
          <p>
            He manages and coordinate field operations while ensuring the
            business takes the right market decisions.
          </p>
        </div>
        <div className="col-12 col-md text-end" id="aboutusImage">
          {/* <div className="d-flex"> */}
          <img src={yusuf} alt="" className="rounded-3 w-75" />
          {/* </div> */}
        </div>
      </div>
    </motion.div>
  );
};

export default MeetOurTeam;
