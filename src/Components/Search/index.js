import navBar from "../navbar.js";
import "./styles.css";

export default function Category() {
  return (
    <>
      {navBar()}
      <div className="search">
        <div className="whatever-goes-here">stuff?</div>
        <div className="search-result">
          <div className="search-result-module">img, title, price</div>
          <div className="search-result-module">img, title, price</div>
          <div className="search-result-module">img, title, price</div>
        </div>
      </div>
    </>
  );
}
