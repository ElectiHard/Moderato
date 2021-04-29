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
                    <Link to="/">
                        <div className="category">
                            <FaLaptop />
                            <div className="tooltiptext">Electronics</div>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="category">
                            <FaCouch />
                            <div className="tooltiptext">Furniture</div>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="category">
                            <FaTshirt />
                            <div className="tooltiptext">Fashion</div>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="category">
                            <FaFirstAid />
                            <div className="tooltiptext">Health</div>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="category">
                            <FaBasketballBall />
                            <div className="tooltiptext">Sport</div>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="category">
                            <FaBabyCarriage />
                            <div className="tooltiptext">Kids</div>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="category">
                            <FaSprayCan />
                            <div className="tooltiptext">Beauty</div>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="category">
                            <FaCar />
                            <div className="tooltiptext">Cars</div>
                        </div>
                    </Link >
                </div >
            </div >
            {footer}
        </>
    )
}