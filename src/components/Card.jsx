import React from "react";
import { useState } from "react";
import useFetch from "../hooks/useFetch";

const Card = ({ forwardClick, project, backClick, isLoading }) => {
  const { name, desc, tags } = project;
  // console.log(project);
  // console.log(tags);
  // const [details, setDetails] = useState(null);
  const [count, setCount] = useState(0);
  const { data } = useFetch("https://api-projectmanager.onrender.com");
  // console.log(data);
  let display;
  if (isLoading) {
    display = (
      <h1 className="no-proj d-flex justify-content-center m-5 ">Loading...</h1>
    );
  } else {
    if (Object.keys(project).length == 0) {
      display = (
        <h1 className="no-proj d-flex justify-content-center m-5 ">
          No project
        </h1>
      );
    } else {
      display = (
        <div>
          <h3 className="mt-3 ms-4">{name}</h3>
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
            <span onClick={backClick} className="arrow ">
              <i class="fa-solid fa-chevron-left"></i>
            </span>
            <span onClick={forwardClick} className="arrow ">
              <i class="fa-solid fa-chevron-right"></i>
            </span>
          </span>
        </div>
      );
    }
  }
  return <div className="card me-3 ">{display}</div>;
};

export default Card;
