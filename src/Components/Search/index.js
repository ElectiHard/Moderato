import navBar from "../navbar.js";
import footer from "../footer.js";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./styles.css";

export default function Category() {
  const [subCategories, setSubCategories] = useState([]);
  const { id } = useParams();

  function subCategoryList() {
    return subCategories.map((element) => {
      return (
        <Link to={`../Listing`} className="subcategory">
          {element.subCategoryName}
        </Link>
      );
    });
  }

  return (
    <>
      {navBar()}
      <div className="search">
        <div className="whatever-goes-here">stuff?</div>
        <div className="search-result">
          <div className="search-result-module">we work?</div>
          <div className="search-result-module">we work?</div>
          <div className="search-result-module">we work?</div>
        </div>
      </div>
    </>
  );
}
