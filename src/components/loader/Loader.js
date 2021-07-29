import React, { Fragment } from "react";
import styles from "./loader.module.css";
import { Container } from "react-dom";

const Loader = () => {
  return (
    <div className={styles.conteiner}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loader;
