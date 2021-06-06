import navBar from "../navbar.js";
import footer from "../footer.js";
import { FaFolderMinus, FaFolderPlus } from "react-icons/fa";
import "./styles.css";
import React from "react";
import ImageUploading from "react-images-uploading";
import Button from "@material-ui/core/Button";

const btnChanger = (a) => {
  if (a != 5) {
    return <FaFolderPlus />;
  } else {
    return <FaFolderMinus />;
  }
};

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
      {navBar()}
      <div className="creator">
        <div className="creator-header">
          <div className="title">
            <label>Title</label>
            <input
              type="text"
              id="title-input"
              name="title-input"
              placeholder="Title e.g siodło z dyskontu"
            />
          </div>
          <div className="creator-category">
            <label>Category</label>
            <input
              type="text"
              id="title-input"
              name="title-input"
              placeholder="Title e.g siodło z dyskontu"
            />
          </div>
        </div>
        <div className="pictures">
          <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
            resolutionType="ratio"
          >
            {({
              imageList,
              onImageUpload,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              // write your building UI
              <>
                <button
                  className="photo-upload-btn"
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  {btnChanger(imageList.length)}
                </button>
                {imageList.map((image, index) => (
                  <div key={index} className="image-item">
                    <img src={image["data_url"]} alt="" width="33%" />
                    <button
                      onClick={() => onImageRemove(index)}
                      className="remove-btn"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </>
            )}
          </ImageUploading>
        </div>
        <div className="description">
          <textarea
            maxLength="250"
            autoFocus
            required
            name="description-input"
            placeholder="Sprzedam siodło z dyskontu"
          ></textarea>
          <div className="contact-location">
            <input
              type="text"
              id="email-contact"
              name="email-contact"
              placeholder="e-mail"
            />
            <input
              type="text"
              id="phone-contact"
              name="phone-contact"
              placeholder="phone number"
            />
            <input
              type="text"
              id="city-location"
              name="city-location"
              placeholder="city"
            />
            <input
              type="number"
              id="price"
              name="price"
              placeholder="price"
            />
            <Button className="submit-sign-up-button">
              <div>Publish</div>
            </Button>
          </div>
        </div>
      </div>
      {footer}
    </>
  );
}
