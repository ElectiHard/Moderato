import navBar from "../navbar.js";
import footer from "../footer.js";
import { FaArrowCircleUp } from "react-icons/fa";
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
            <FaArrowCircleUp />
            <div className="tooltiptext-creator">Publish</div>
          </div>
        </div>
      </div>
      {footer}
    </>
  );
}
