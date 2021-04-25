import { Link } from 'react-router-dom'

function LoggedIn(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return(
          <div>pfp and name given in signup</div>
      );
    }
    return(
        <div>
            <Link className="profile-btn" to="/SignUp">SignUp</Link><br/>
            <Link className="profile-btn" to="/LogIn">Log In</Link>
        </div>
    );
  }

function navBar() {
    return (
        <div className="header">
            <div className="header-center">
                <div></div>
                <div className="logo">
                    <Link to="/">
                        Moderato
                    </Link>
                </div>
                <div>
                    <input
                        className="searchbar"
                        placeholder="type to search for products"
                        type="search">
                    </input>
                </div>
                <div>
                    account balance:
                </div>
                <div>
                    <LoggedIn isLoggedIn={false}/>
                </div>
            </div>
        </div>
    )
}

export default navBar();