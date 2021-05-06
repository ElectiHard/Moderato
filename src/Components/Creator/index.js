import navBar from "../navbar.js";
import footer from "../footer.js";
import { FaArrowCircleUp, FaFolderPlus } from "react-icons/fa";
import "./styles.css";
import React from "react";
import ImageUploading from "react-images-uploading";

export default function Creator() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 5;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <>
      {navBar}
      <div className="main">
        <div className="welcome"></div>
        <div className="category-section">
          <div className="title">
            <input type="text" id="title" name="title" placeholder="Title" />
          </div>
          <div className="type">
            <div className="dropdown">
              <button className="dropdown-button">Dropdown</button>
              <div className="dropdown-content">
                <button>Electronics</button>
                <button>Furniture</button>
                <button>Fashion</button>
                <button>Health</button>
                <button>Sport</button>
                <button>Kids</button>
                <button>Beauty</button>
                <button>Cars</button>
              </div>
            </div>
          </div>
          <div className="pictures">
            <div className="App">
              <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
              >
                {({
                  imageList,
                  onImageUpload,
                  onImageRemove,
                  isDragging,
                  dragProps,
                }) => (
                  // write your building UI
                  <div className="upload__image-wrapper">
                    <button
                      style={isDragging ? { color: "red" } : undefined}
                      onClick={onImageUpload}
                      {...dragProps}
                    >
                      <FaFolderPlus />
                    </button>
                    {imageList.map((image, index) => (
                      <div key={index} className="image-item">
                        <img src={image["data_url"]} alt="" width="100" />
                        <div className="image-item__btn-wrapper">
                          <button onClick={() => onImageRemove(index)}>
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </ImageUploading>
            </div>
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
