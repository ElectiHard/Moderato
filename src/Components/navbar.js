import {Link} from 'react-router-dom'

function navBar(){
return(
<div className="header">
            <div></div><div></div><div>
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