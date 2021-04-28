import navBar from '../navbar.js'
import footer from '../footer.js'
import { Link } from 'react-router-dom'

export default function Landing() {
    return (
        <div className="main-page">
            {navBar}
            <div className="body">
                <div className="left-column">
                    <div className="category-menu">
                        <div className="category-menu-title"><b>Categories</b></div>
                        <Link to="/">Electronics</Link>
                        <Link to="/">Furniture</Link>
                        <Link to="/">Fashion</Link>
                        <Link to="/">Health</Link>
                        <Link to="/">Sport</Link>
                        <Link to="/">Kids</Link>
                        <Link to="/">Beauty</Link>
                        <Link to="/">Cars</Link>
                    </div>
                </div>
                <div className="center">
                    <div className="main"><div className="category-menu-title"><b>Welcome</b></div></div>
                    <div className="main"><div className="category-menu-title"><b>Electronics</b></div></div>
                    <div className="main"><div className="category-menu-title"><b>Furniture</b></div></div>
                    <div className="main"><div className="category-menu-title"><b>Fashion</b></div></div>
                    <div className="main"><div className="category-menu-title"><b>Health</b></div></div>
                </div>
                <div className="right-column">
                    <div className="category-menu-title"><b>Local offers</b></div>
                    <div className="local-offer"></div>
                    <div className="local-offer"></div>
                    <div className="local-offer"></div>
                    <div className="local-offer"></div>
                    <div className="local-offer"></div>
                    <div className="local-offer"></div>
                </div>
            </div>
            {footer}
        </div>)
}