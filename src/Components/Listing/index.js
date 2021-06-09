import navBar from "../navbar.js";
import footer from "../footer.js";
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import "./styles.css";
import "./stylesgallery.css";
import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import Images from "./images";

export default function Listing() {
  const [listing, setListing] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [category, setCategory] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://moderato-backend.herokuapp.com/api/v1/listings/${id}`)
      .then(response => response.json())
      .then(data => {
        setListing(data.listings);
        fetch(`https://moderato-backend.herokuapp.com/api/v1/categories/subcategories/${data.listings.subCategoryId}`)
          .then(response => response.json())
          .then(data => {
            setSubCategory(data.category);
            fetch(`https://moderato-backend.herokuapp.com/api/v1/categories/${data.category.parentCategoryId}`)
              .then(response => response.json())
              .then(data => setCategory(data.category));
          })
      });
  }, [])

  return (
    <>
      {navBar()}
      <div className="listing">
        <div className="listing-top">
          <div className="listing-pictures">{Images(id)}</div>
          <div className="listing-title">
            <div>
              {"Title" + listing.name}
            </div>
            <div>
              {"Category " + category.categoryName}</div>
            <div>
              {"Subcategory " + subCategory.subCategoryName}
            </div>
          </div>
        </div>
        <div className="listing-description">
          {listing.description}
        </div>
        <div className="drag-list">
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
      </div>
      {footer}
    </>
  );
}
