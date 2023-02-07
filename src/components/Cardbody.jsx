import React from "react";
import Card from "./Card";

const Cardbody = () => {
  return (
    <div className="testbody col-md-7 container-fluid">
      <div className="testbody--details">
        <h6>working...</h6>
        <Card />
      </div>
      <div className="testbody--details">
        <h6>in-progress...</h6>
        <Card />
      </div>
      <div className="testbody--details">
        <h6>completed...</h6>
        <Card />
      </div>
    </div>
  );
};

export default Cardbody;
