import React from "react";
import Card from "./Card";

const Cardbody = () => {
  return (
    <div className="cardbody col-md-7 w-5 p-5 m-4 rounded container-fluid d-flex justify-content-evenly">
      <div className="col-md-4 cardbody--status">
        <h6>working ...</h6>
        <Card />
        <Card />
      </div>
      <div className="col-md-4 cardbody--status">
        <h6>in-progress ...</h6>
        <Card />
        <Card />
      </div>
      <div className="col-md-4 cardbody--status">
        <h6>completed ...</h6>
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Cardbody;
