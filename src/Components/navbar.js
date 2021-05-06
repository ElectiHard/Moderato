import { Link } from 'react-router-dom'
import { FaDollarSign, FaUser } from "react-icons/fa";
import profileBox from './ProfileBox'
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
            <div></div>
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
            <Link to="/Creator" className="header-icon">
                <FaDollarSign />
            </Link>
            <div classname="login">
                <LoggedIn isLoggedIn={false} />
                {profileBox}
            </div>
        </div>
    )
}

export default navBar();