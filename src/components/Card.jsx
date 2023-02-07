import React from "react";

const Card = () => {
  return (
    <div className="card me-3 ">
      <h3 className="mt-3 ms-4">Donec nec pulvinar</h3>
      <p className="card--desc mt-0 ms-4 mb-1">
        Suspendisse ante odio, aliquet a risus non, suscipit consectetur nisl.
      </p>
      <span className="card--tags d-flex justify-content-start ms-4 mt-0">
        <p className="tag-name">tags:</p>
        <p>consectetur</p>
        <p>augue</p>
        <p>ante</p>
        <p>Mauris</p>
      </span>
      <span className="card--span">
        <i class="fa-lg fa-solid fa-arrow-right arrow"></i>
      </span>
    </div>
  );
};

export default Card;
