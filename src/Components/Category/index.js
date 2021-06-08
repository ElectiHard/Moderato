import navBar from '../navbar.js'
import footer from '../footer.js'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll';
import "./styles.css";


export default function Category() {
    const [subCategories, setSubCategories] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`../api/v1/categories/subcategories/${id}`)
            .then(response => response.json())
            .then(data => setSubCategories(data.categories));
    }, [])

    useEffect(() => {
        fetch(`../api/v1/listings/category/${id}`)
            .then(response => response.json())
            .then(data => console.log(data.listings));
    }, [])

    function subCategoryList() {
        return (
            subCategories.map(element => {
                return (
                    <Link to={`../Listing`} className="subcategory">
                        {element.subCategoryName}
                    </Link>
                )
            })
        )
    }

    return (
        <>
            {navBar()}
            <div className="main">
                <div className="category-front">
                    <div className="subcategory-list">
                        {subCategoryList()}
                    </div>
                    <div className="category-image">

                    </div>
                </div>
                <div className="drag-list">
                    <div className="drag-title">Laptops</div>
                    <ScrollContainer className="drag-container">
                        <Link to="/Creator" className="drag-listing"></Link><Link to="/Creator" className="drag-listing"></Link>
                        <Link to="/Creator" className="drag-listing"></Link><Link to="/Creator" className="drag-listing"></Link>
                        <Link to="/Creator" className="drag-listing"></Link><Link to="/Creator" className="drag-listing"></Link>
                    </ScrollContainer>
                </div>
                <div className="drag-list">
                    <div className="drag-title">Cables</div>
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
            </div>
        </>
    )
}