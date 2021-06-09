import navBar from '../navbar.js'
import footer from '../footer.js'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import "./styles.css";
import ScrollContainer from 'react-indiana-drag-scroll';


export default function Landing() {
    const [categoriesList, setCategoriesList] = useState([]);
    const colorArray = ['#0050e6', '#0affeb', '#00e092', '#00cc44', '#4fff38', '#b0ff1f', '#ffda1f', '#ff9633', '#ff481f', '#ff1f26'];

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
                <div className="drag-list">
                    <div className="drag-title">Electronics</div>
                    <ScrollContainer className="drag-container">
                        <Link to="/Creator" className="drag-listing"></Link><Link to="/Creator" className="drag-listing"></Link>
                        <Link to="/Creator" className="drag-listing"></Link><Link to="/Creator" className="drag-listing"></Link>
                        <Link to="/Creator" className="drag-listing"></Link><Link to="/Creator" className="drag-listing"></Link>
                    </ScrollContainer>
                </div>
                <div className="drag-list">
                    <div className="drag-title">Furniture</div>
                    <ScrollContainer className="drag-container">
                        <Link to="/Creator" className="drag-listing"></Link><Link to="/Creator" className="drag-listing"></Link>
                        <Link to="/Creator" className="drag-listing"></Link><Link to="/Creator" className="drag-listing"></Link>
                        <Link to="/Creator" className="drag-listing"></Link><Link to="/Creator" className="drag-listing"></Link>
                    </ScrollContainer>
                </div>
                <div className="drag-list">
                    <div className="drag-title">Fashion</div>
                    <ScrollContainer className="drag-container">
                        <Link to="/Creator" className="drag-listing"></Link><Link to="/Creator" className="drag-listing"></Link>
                        <Link to="/Creator" className="drag-listing"></Link><Link to="/Creator" className="drag-listing"></Link>
                        <Link to="/Creator" className="drag-listing"></Link><Link to="/Creator" className="drag-listing"></Link>
                    </ScrollContainer>
                </div>
                <div className="drag-list">
                    <div className="drag-title">Health</div>
                    <ScrollContainer className="drag-container">
                        <Link to="/Creator" className="drag-listing"></Link><Link to="/Creator" className="drag-listing"></Link>
                        <Link to="/Creator" className="drag-listing"></Link><Link to="/Creator" className="drag-listing"></Link>
                        <Link to="/Creator" className="drag-listing"></Link><Link to="/Creator" className="drag-listing"></Link>
                    </ScrollContainer>
                </div>
            </div>
            {footer}
        </>
    )
}