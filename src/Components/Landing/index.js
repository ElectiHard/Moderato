import navBar from '../navbar.js'
import footer from '../footer.js'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FaLaptop, FaCouch, FaTshirt, FaFirstAid, FaBasketballBall, FaBabyCarriage, FaSprayCan, FaCar } from "react-icons/fa";
import ScrollContainer from 'react-indiana-drag-scroll';


export default function Landing() {
    const [color, setColor] = useState("");
    const [colorArray, setColorArray] = useState(['#0050e6', '#0affeb', '#00e092', '#00cc44', '#4fff38', '#b0ff1f', '#ffda1f', '#ff9633', '#ff481f', '#ff1f26']);

    function category(icon, text, path = "") {
        return (
            <Link to={`/${path}`} className="category"
                onMouseEnter={e => { e.target.style.backgroundColor = colorArray[Math.floor(Math.random() * colorArray.length)] }}
                onMouseLeave={e => { e.target.style.backgroundColor = "" }}
            >
                {icon}
                <div className="tooltiptext">{text}</div>
            </Link>
        );
    }

    return (
        <>
            {navBar()}
            <div className="main">
                <div className="welcome">
                </div>
                <div className="category-section">
                    {category(FaLaptop(), 'Electronics')}
                    {category(FaCouch(), 'Furniture')}
                    {category(FaTshirt(), 'Fashion')}
                    {category(FaFirstAid(), 'Health')}
                    {category(FaBasketballBall(), 'Sport')}
                    {category(FaBabyCarriage(), 'Kids')}
                    {category(FaSprayCan(), 'Beauty')}
                    {category(FaCar(), 'Cars')}
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