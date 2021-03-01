import React from "react";

const Search = () => {
  const handleChange = (e) => {
    console.log("mira el evento");
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex"
      style={{ maxWidth: "25em", margin: "16px auto" }}
    >
      <input
        className="form-control me-2"
        type="search"
        placeholder="Buscar por"
        name="word"
        onChange={handleChange}
      />
      <button className="btn btn-outline-success" type="submit">
        Buscar
      </button>
    </form>
  );
};

export default Search;
