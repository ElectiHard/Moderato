import { gsap } from "gsap";
import AstronautSvg from "./astronautsvg.js"
import './styles.scss'
import { Link } from 'react-router-dom'
const nav = document.querySelector('nav');



export default function NotFound() {
    return (<div className="body-404">
        
            
    <div className="col1">
        <AstronautSvg/>
      </div>
      <div className="col2">
        <h1 className="h1-404">404</h1>
        <h2 className="h2-404">UH OH! You're lost.</h2>
        <p>The page you are looking for does not exist.
          How you got here is a mystery. But you can click the button below
          to go back to the homepage.
        </p>
        <Link to="/">
        <button className="btn-404">HOME</button>
        </Link>
      </div>
    
    
  </div>
    )
}