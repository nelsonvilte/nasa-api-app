import React from "react";

const Card = ({ info }) => {
  console.log("miora el info");
  console.log(info);
  return (
    <div className="col mb-3">
      <div className="card h-100">
        <div style={{ maxHeight: "17em" }}>
          <img
            src={info.links[0].href}
            className="card-img-top img-fluid"
            alt="..."
            style={{ maxHeight: "100%" }}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{info.data[0].title}</h5>
          <p className="card-text">{info.data[0].description}</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">{info.data[0].date_created}</small>
        </div>
      </div>
    </div>
  );
};

export default Card;
