import { Link } from 'react-router-dom'
import { FaDollarSign, FaUser } from "react-icons/fa";
import CustomizedMenus from "./ProfileMenu"
import '../App.css';

function LoggedIn(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return (
            <div>pfp and name given in signup</div>
        );
    }
    return (
        <Link to="/SignUp" className="header-icon">
            <FaUser />
        </Link>
    );
}

function navBar() {
    return (
        <div className="header">

            <div className="logo">
                <Link to="/">
                    Moderato
                </Link>
            </div>
            <input
                className="searchbar"
                placeholder="Type to search for products"
                type="search"
            >
            </input>
            <div className="icons">
                <div>
                    <Link to="/Creator" className="header-icon">
                        <FaDollarSign />
                    </Link>
                </div>
                <div classname="login">
                    <CustomizedMenus />
                </div>
            </div>
        </div>
    )
}

export default navBar();