import navBar from '../navbar.js'
import footer from '../footer.js'
import { Link } from 'react-router-dom'
import { FaLaptop, FaCouch, FaTshirt, FaFirstAid, FaBasketballBall, FaBabyCarriage, FaSprayCan, FaCar } from "react-icons/fa";

export default function Landing() {
    return (
        <>
            {navBar}
            <div className="main">
                <div className="welcome">

                </div>
                <div className="category-section">
                    <Link to="/" className="category">
                        <FaLaptop />
                        <div className="tooltiptext">Electronics</div>
                    </Link>
                    <Link to="/" className="category">
                        <FaCouch />
                        <div className="tooltiptext">Furniture</div>
                    </Link>
                    <Link to="/" className="category">
                        <FaTshirt />
                        <div className="tooltiptext">Fashion</div>
                    </Link>
                    <Link to="/" className="category">
                        <FaFirstAid />
                        <div className="tooltiptext">Health</div>
                    </Link>
                    <Link to="/" className="category">
                        <FaBasketballBall />
                        <div className="tooltiptext">Sport</div>
                    </Link>
                    <Link to="/" className="category">
                        <FaBabyCarriage />
                        <div className="tooltiptext">Kids</div>
                    </Link>
                    <Link to="/" className="category">
                        <FaSprayCan />
                        <div className="tooltiptext">Beauty</div>
                    </Link>
                    <Link to="/" className="category">
                        <FaCar />
                        <div className="tooltiptext">Cars</div>
                    </Link >
                </div >
            </div >
            {footer}
        </>
    )
}