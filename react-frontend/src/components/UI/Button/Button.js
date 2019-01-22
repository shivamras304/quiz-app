import React from "react";
import styles from "./Button.module.css";

const button = props => (
  <button
    className={[styles.Button, styles[props.btnType], props.className].join(' ')}
    onClick={props.clicked}
    disabled={props.disabled}>
    {props.children}
  </button>
);

export default button;
