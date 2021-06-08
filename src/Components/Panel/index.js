import navBar from "../navbar.js";
import footer from "../footer.js";
import "./styles.css";
import React from "react";

export default function Panel() {
  return (
    <>
      {navBar()}
      <div className="panel">
        <div className="panel-listings">
          <div className="panel-text">Active listings:</div>
          <div className="listings-list">Tu docelowo będą aktywne listingi</div>
        </div>
        <div className="panel-info">
          <div className="panel-text">Profile info:</div>
        </div>
      </div>
      {footer}
    </>
  );
}
