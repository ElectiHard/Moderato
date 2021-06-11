import navBar from "../navbar.js";
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
