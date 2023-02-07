import React from "react";
import Cardbody from "./Cardbody";

const Body = (props) => {
  return (
    <div className="contentbody container-fluid d-flex justify-content-start">
      <div className="m-1 p-2 sidebar mb-3 col-md-4">
        <ul className="nav flex-column ms-4">
          <li className="nav-item">
            <a className="" href="#">
              dashboard
            </a>
          </li>
          <li className="nav-item">
            <a className="" href="#">
              recent
            </a>
          </li>
          <li className="nav-item">
            <a className="" href="#">
              projects
            </a>
          </li>
          <li className="nav-item">
            <a className="" href="#">
              categories
            </a>
          </li>
        </ul>
      </div>
      <Cardbody />
    </div>
  );
};

export default Body;
