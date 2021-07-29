import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark d-flex justify-content-center">
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <a className="navbar-brand" href="/" target="blank">
          <img
            src="https://images.nasa.gov/images/nasa_logo-large.ee501ef4.png"
            alt=""
          />
        </a>
        <h1 className="text-white text-center">NASA API App</h1>
      </div>
    </nav>
  );
};

export default Header;
