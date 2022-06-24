import React from "react";

function CoreValues() {
  return (
    <section className="pb-5" style={{ background: "" }}>
      <h4
        className="fw-bolder display-6 text-center pt-5"
        style={{ color: "#4b4b4b" }}
      >
        Our Core Values
      </h4>
      <p className="text-center">What differentiates us from others</p>
      <div className="d-flex align-items-center justify-content-center container mx-auto flex-wrap">
        <div className="text-center">
          <p className="bg-success text-white p-2 px-4 mx-3 rounded-pill">Quality</p>
        </div>
        <div className="text-center">
          <p className="border p-2 px-4 mx-3 rounded-pill">Consistency</p>
        </div>

        <div className="text-center">
          <p className="border p-2 px-4 mx-3 rounded-pill">Inovation</p>
        </div>
        <div className="text-center">
          <p className="border p-2 px-4 mx-3 rounded-pill">Nature</p>
        </div>
        <div className="text-center">
          <p className="border p-2 px-4 mx-3 rounded-pill">Integrity</p>
        </div>
      </div>
    </section>
  );
}

export default CoreValues;
