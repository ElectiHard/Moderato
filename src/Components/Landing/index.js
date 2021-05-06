import navBar from '../navbar.js'
import footer from '../footer.js'
import { Link } from 'react-router-dom'
import { FaLaptop, FaCouch, FaTshirt, FaFirstAid, FaBasketballBall, FaBabyCarriage, FaSprayCan, FaCar } from "react-icons/fa";

export default function Landing() {
    function category(icon, text, path = "") {
        return (
            <Link to={`/${path}`} className="category">
                {icon}
                <div className="tooltiptext">{text}</div>
            </Link>
        );
    }

    return (
        <>
            {navBar}
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
                </div >
            </div >
            {footer}
        </>
    )
}