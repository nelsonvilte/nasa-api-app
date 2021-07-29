import React, { useState } from "react";

const Card = ({ info }) => {
  const [infodata, setInfodata] = useState(false);

  return (
    <div className="col mb-3">
      <div className="card" style={{ height: "auto" }}>
        <img
          src={info.links[0].href}
          className="card-img-top"
          alt="..."
          style={{ width: "100%", height: "40vh" }}
        />
        <div className="card-body">
          <h5 className="card-title">{info.data[0].title}</h5>

          {infodata && <p className="card-text">{info.data[0].description}</p>}
          <button
            onClick={() => setInfodata(!infodata)}
            className="btn btn-primary"
          >
            {infodata ? "Cerrar" : "Leer más"}
          </button>
        </div>
        <div className="card-footer">
          <small className="text-muted">{info.data[0].date_created}</small>
        </div>
      </div>
    </div>
  );
};

export default Card;
