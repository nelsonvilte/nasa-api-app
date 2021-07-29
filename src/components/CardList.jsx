import React from "react";
import Card from "./Card";

const CardList = ({ listItems }) => {
  if (listItems.length > 0) {
    var items = listItems.map((item) =>
      listItems.map((item, index) => <Card key={index} info={item} />)
    );
  } else {
    items = (
      <div> No se encontraron resultados relacionados con la búsqueda</div>
    );
  }

  return (
    <div className="row row-cols-1 row-cols-md-3 justify-content-center mt-4 g-4">
      
      {items}
    </div>
  );
};

export default CardList;
