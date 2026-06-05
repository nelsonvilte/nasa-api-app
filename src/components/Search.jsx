import React, { useState } from "react";

const Search = ({ onCallToApi }) => {
  const [word, setWord] = useState("");

  const handleChange = (e) => {
    setWord(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCallToApi(word);
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
