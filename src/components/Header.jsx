import React from "react";

const Header = () => {
  return (
    <div className="header container-fluid d-flex align-content-evenly mt-4">
      <p className="h3 col-md-3 ms-5">Project-M Tool</p>

      <span className="header--search col-md-9">
        {/* <i class="fa-solid fa-magnifying-glass"></i> */}
        <input type="text" placeholder=" search" className="w-5 " />
      </span>
    </div>
  );
};

export default Header;
