import React from "react";
import Card from "./Card";

const CardList = ({ listItems }) => {
  console.log(listItems);
  return (
    <div className="row row-cols-1 row-cols-md-3 mt-4 g-4">
      {listItems.map((item, index) => (
        <Card key={index} info={item} />
      ))}
    </div>
  );
};

export default CardList;
