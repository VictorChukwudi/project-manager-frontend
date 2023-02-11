import React from "react";
import { useState } from "react";
import useFetch from "../hooks/useFetch";

const Card = ({ forwardClick, project, backClick }) => {
  const { name, desc, tags } = project;
  // console.log(project);
  // console.log(tags);
  // const [details, setDetails] = useState(null);
  const [count, setCount] = useState(0);
  const { data } = useFetch("http://localhost:5000/");

  return (
    <div className="card me-3 ">
      {/* {Object.keys(project).length === 0 ? (
        <p>not available</p>
      ) : (
        <p>available</p>
      )} */}
      <h3 className="mt-3 ms-4">{name}</h3>
      <p className="card--desc mt-0 ms-4 mb-1">{desc}</p>
      <span className="card--tags d-flex justify-content-start ms-4 mt-3">
        <p className="tag-name">tags:</p>
        {/* {tags.map((tag) => (
          <p>{tag}</p>
        ))} */}
        <p>consectetur</p>
        <p>augue</p>
        <p>ante</p>
        <p>Mauris</p>
      </span>

      <span className="card--span">
        <span onClick={backClick}>
          <i class="fa-solid fa-chevron-left"></i>
        </span>
        <span onClick={forwardClick}>
          <i class="fa-solid fa-chevron-right"></i>
        </span>
      </span>
    </div>
  );
};

export default Card;
