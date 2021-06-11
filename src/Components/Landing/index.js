import navBar from '../navbar.js'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import "./styles.css";

export default function Landing() {
    const [categoriesList, setCategoriesList] = useState([]);

    useEffect(() => {
        fetch('https://moderato-backend.herokuapp.com/api/v1/categories')
            .then(response => response.json())
            .then(data => setCategoriesList(data.categories));
    }, [])

    function category() {
        return (
            categoriesList.map(element => {
                return (
                    <Link to={`/Category/${element.categoryId}`} className="category"
                        dangerouslySetInnerHTML={{
                            __html: element.icon +
                                `<div class="tooltiptext">${element.categoryName}</div>`
                        }}>
                    </Link>
                )
            })
        )
    }

    return (
        <>
            {navBar()}
            <div className="main">
                <div className="welcome">
                    <img src="https://i.imgur.com/lNyBCNl.png"></img>
                </div>
                <div className="category-section">
                    {category()}
                </div>
            </div>
        </>
    )
}