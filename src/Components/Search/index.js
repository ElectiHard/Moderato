import navBar from "../navbar.js";
<<<<<<< Updated upstream
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
=======
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { AuthContext } from "../../Context/authContext";
import "./styles.css";

export default function Category() {
    const [search, setSearch] = useState([]);
    const { query } = useParams();

    function searchResult() {
        return search.map((element) => {
            return (
                <Link to={`../Listing/${element.listingId}`} className="search-result-module">
                    {element.name}
                </Link>
            );
        });
    }

    useEffect(() => {
        fetch(
            `https://moderato-backend.herokuapp.com/api/v1/listings/search/${query}`
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setSearch(data);
            });
    }, []);

    return (
        <>
            {navBar()}
            <div className="search-main">
                <labe>Searched listings:</labe>
                {searchResult()}
            </div>
        </>
    );
}
>>>>>>> Stashed changes
