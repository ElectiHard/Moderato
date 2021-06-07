import { Link } from 'react-router-dom'
import { GiMagnifyingGlass } from "react-icons/gi";
import CustomizedMenus from "./ProfileMenu"
import '../App.css';

export default function navBar() {
    return (
        <div className="header">

            <Link to="/" className="logo">
                Moderato
            </Link>
            <input
                className="searchbar"
                placeholder="Type to search for products"
                type="search"
            >
            </input>
            <div className="icons">
                <div classname="login">
                    <CustomizedMenus />
                </div>
            </div>
        </div>
    )
}