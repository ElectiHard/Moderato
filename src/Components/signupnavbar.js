import { Link } from 'react-router-dom'
import '../App.css';


function signUpNavBar() {
    return (
        <Link to="/" className="logo" style={{ paddingLeft: "30px" }}>
            Moderato
        </Link>
    )
}

export default signUpNavBar();