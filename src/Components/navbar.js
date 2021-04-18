import {Link} from 'react-router-dom'
import img from './logo.jpg'

function navBar(){
return(
<div className="header">
            <div>
                <Link to = "/">
                    <img className="logoImage" alt="logo" src={img}></img> 
                </Link>
            </div><div></div><div>
                <input 
                className = "searchbar"
                placeholder = "type to search for products"
                type = "search">
                </input>
            </div>
            <div>
                account balance:
            </div>
            <div>
                <Link className = "profile-btn" to = "/SignUp">profile</Link>
            </div>
            <div>
                
            </div>
        </div>)
}

export default navBar();