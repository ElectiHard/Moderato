import navBar from '../navbar.js'

export default function SignUp() {
    return (<>
    {navBar}
    <div className="signUpContainer">
        <div>
            <h3>Sign up here:</h3>
        </div>
        <div>
        <input 
            className = "loginBar"
            placeholder = "Username:"
            type = "text">
        </input>          
        </div>
        <div>
        <input 
            className = "loginBar"
            placeholder = "Password:"
            type = "password">
        </input>          
        </div>
        <div>
        <input 
            className = "loginBar"
            placeholder = "Repeat password:"
            type = "password">
        </input>          
        </div>
        <button type="button">Sign Up</button>
    </div>
    
    </>)
}