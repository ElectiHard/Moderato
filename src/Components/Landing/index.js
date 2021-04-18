import {Link} from "react-router-dom";
import navBar from '../navbar.js'

export default function Landing() {
    return (
    <div className = "main-page">
        {navBar}
        <div className="body">
            <div className = "left-column">
                <div className="category-menu">
                <ul><b>Categories</b>
                    <li>Electronics</li>
                    <li>Furniture</li>
                    <li>Fashion</li>
                    <li>Health</li>
                    <li>Sport</li>
                    <li>Kids</li>
                    <li>Beauty</li>
                    <li>Cars</li>
                </ul>
                </div>
            </div>
            <div className = "center">
                <div className="main"><b>Welcome</b></div>
                <div className="main"><b>Electronics</b></div>
                <div className="main"><b>Furniture</b></div>
                <div className="main"><b>Fashion</b></div>
                <div className="main"><b>Health</b></div>
            </div>
            <div className = "right-column">
                <div className="local-offer"></div>
                <div className="local-offer"></div>
                <div className="local-offer"></div>
                <div className="local-offer"></div>
            </div>
        </div>
    </div>)
}