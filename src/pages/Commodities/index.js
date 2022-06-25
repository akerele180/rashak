import React from "react";
import { motion } from "framer-motion";
import miller from "../../assets/images/miller.png";
import commodities from "../../assets/images/commo1.png";
import palmkernel from "../../assets/images/palmkernel.png";

const Commodities = () => {
  return (
    <motion.div
      style={{ color: "#00000095" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="container fw-bold fs-1 mt-4">Commodities</h2>
      <div
        className="about-us row align-items-center mx-auto container py-2 gap-5"
        style={{ color: "#00000095" }}
      >
        <div className="col-12 col-md-7">
          <h2 className="fw-bold fs-4 ">Agric Commodity Trading</h2>
          <p className="text-justify" style={{textAlign: 'justify'}}>
            In the quest to diversify, Rashak farms extended its business
            activities to include supply of Agric commodities such as Palm
            Kernel Nuts, Soya Beans, Maize, Sesame and Sorghum among others in
            2017.
          </p>{" "}
          <p className="text-justify" style={{textAlign: 'justify'}}>
            From 2017 till date. we have traded a total of 120,000 tons of
            commodities in supply to Flour Mills of Nigeria PLC, Olam, Agric
            Tech, Wacot among others. We have maintained a solid business
            relationship with our clients largely due to our corporate values
            premised on intergrity and consistency.
          </p>
          <p className="text-justify" style={{textAlign: 'justify'}}>
            We have also maintained good working relations with smallholder
            farmers and agents in major agrarian commodity markets and farm
            settlements in Nigeria (Northern and Southern Nigeria) and Benin
            Republic.
          </p>
        </div>
        <div className="col-12 col-md text-end" id="aboutusImage">
          {/* <div className="d-flex"> */}
          <img src={commodities} alt="" className="rounded-3 w-75" />
          {/* </div> */}
        </div>
      </div>
      {/* visioin-and-mission */}
      <div
        className="about-us row align-items-center mx-auto container py-2 gap-5 my-5 "
        style={{ color: "#00000095" }}
      >
        <div className="col-12 col-md-7">
          <h2 className="fw-bold fs-4 ">Food Packaging and Processing</h2>
          <p className="text-justify" style={{textAlign: 'justify'}}>
            We aim to also diversify into food processing and packaging. We have
            always been involved in the processing to a semi-finished stage, but
            we have realized that there is a huge potential in the processing
            and packaging of finished products.
          </p>{" "}
          <p className="text-justify" style={{textAlign: 'justify'}}>
            This is a milestone we aim to achieve in the next 3 years.
          </p>
        </div>
        <div className="col-12 col-md text-end order-md-first" id="aboutusImage">
          {/* <div className="d-flex"> */}
          <img src={miller} alt="" className="rounded-3 w-75" />
          {/* </div> */}
        </div>
      </div>
      {/* our-approach */}
      <div
        className="about-us row align-items-center mx-auto container py-2 gap-5 my-5"
        style={{ color: "#00000095" }}
      >
        <div className="col-12 col-md-7">
          <h2 className="fw-bold fs-4 ">Palm Kernel Processing </h2>
          <p className="text-justify" style={{textAlign: 'justify'}}>
            Palm kernel processing was the core of our business activities when
            we started off in 2015. We have a palm kernel processing plant sited
            on 2 plots of land at Aba Keji, Cocoa Research Institute Area,
            Oluyole L.G.A., Ibadan, where we mill palm kernel nuts into
            semi-refined, filtered palm kernel oil.
          </p>{" "}
          <p className="text-justify" style={{textAlign: 'justify'}}>
            The PKO is supplied in a 30,000 litres truck to cosmetics, food
            processing and other manufacturing companies in Lagos, Ogun and Oyo
            State. Whilst other bye products such as palm kernel nuts and sludge
            are sold to agro allied companies.
          </p>
          <p className="text-justify" style={{textAlign: 'justify'}}>
            Our production plant has some processing equipment such as
            expellers, dryers, filter press, storage tanks , drums and other
            equipment for processing.
          </p>
          <p className="text-justify" style={{textAlign: 'justify'}}>
            Since 2016 till date, we have supplied a total of 2,000,000 litres
            of palm kernel oil to our customers. With Flour Mills of Nigeria
            (ROM Oil) accounting for 70% of our total supply, while Tropical
            Naturals, Sudit and Alcanah are also regular buyers of our oil.
          </p>
        </div>
        <div className="col-12 col-md text-end" id="aboutusImage">
          {/* <div className="d-flex"> */}
          <img src={palmkernel} alt="palmkernel" className="rounded-3 w-75" />
          {/* </div> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Commodities;
