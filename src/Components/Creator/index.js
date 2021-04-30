import navBar from "../navbar.js";
import footer from "../footer.js";
import "./styles.css";

export default function Creator() {
  return (
    <>
      {navBar}
      <div className="main">
        <div className="welcome"></div>
        <div className="category-section">
            <div className="title">
                <label>Title</label>
                <input type="text" id="title" name="title" />
            </div>
            <div className="type">
            </div>
            <div className="pictures">
            </div>
            <div className="publish">
                <button type="submit" className="submit">
                Publish
                </button>
          </div>
        </div>
      </div>
      {footer}
    </>
  );
}
