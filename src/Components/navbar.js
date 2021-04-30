import { Link } from 'react-router-dom'
import { FaDollarSign, FaUser } from "react-icons/fa";

function LoggedIn(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return (
            <div>pfp and name given in signup</div>
        );
    }
    return (
        <Link to="/SignUp">
            <div className="header-icon">
                <FaUser />
            </div>
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
                type="search">
            </input>
            <Link to="/">
                <div className="header-icon">
                    <FaDollarSign />
                </div>
            </Link>
            <div>
                <LoggedIn isLoggedIn={false} />
            </div>
        </div>
    )
}

export default navBar();