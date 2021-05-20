import { Link } from 'react-router-dom'
import '../App.css';


function signUpNavBar() {
    return (
        <div className="logo"
            style={
                { paddingLeft: "30px" }
            }>
            <Link to="/">
                Moderato
                </Link>
        </div>
    )
}

export default signUpNavBar();