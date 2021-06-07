import navBar from "../navbar.js";
import footer from "../footer.js";
import "./styles.css";
import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { Link } from "react-router-dom";

export default function Listing() {
  return (
    <>
      {navBar()}
      <div className="listing">
        <div className="listing-top">
          <div className="listing-pictures"></div>
          <div className="listing-title">
            <ht>placeholder title</ht>
          </div>
        </div>
        <div className="listing-drag-list">
          <div className="drag-title">You may also like:</div>
          <ScrollContainer className="drag-container">
            <Link to="/Creator" className="drag-listing"></Link>
            <Link to="/Creator" className="drag-listing"></Link>
            <Link to="/Creator" className="drag-listing"></Link>
            <Link to="/Creator" className="drag-listing"></Link>
            <Link to="/Creator" className="drag-listing"></Link>
            <Link to="/Creator" className="drag-listing"></Link>
          </ScrollContainer>
        </div>
        <div className="description"></div>
      </div>
      {footer}
    </>
  );
}
