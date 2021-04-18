export default function Landing() {
    return (
    <div className = "main-page">
        <div className="header">
            <div></div><div></div><div>
                <input 
                className = "searchbar"
                placeholder = "type to search for products"
                type = "search">
                </input>
            </div><div></div><div></div>
        </div>
        <div className="body">
            <div className = "left-column">
                <div className="category-menu">
                <ul><b>Categories</b>
                    <li>Electronics</li>
                    <li>Furniture</li>
                    <li>Fashion</li>
                    <li>Health</li>
                    <li>Sport</li>
                    <li>Kids</li>
                    <li>Beauty</li>
                    <li>Cars</li>
                </ul>
                </div>
            </div>
            <div className = "center">
                <div className="main"><b>Welcome</b></div>
                <div className="main"><b>Electronics</b></div>
                <div className="main"><b>Furniture</b></div>
                <div className="main"><b>Fashion</b></div>
                <div className="main"><b>Health</b></div>
            </div>
            <div className = "right-column">
                <div className="local-offer"></div>
                <div className="local-offer"></div>
                <div className="local-offer"></div>
                <div className="local-offer"></div>
            </div>
        </div>
    </div>)
}