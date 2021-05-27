import navBar from "../navbar.js";
import footer from "../footer.js";
import { FaPlus } from "react-icons/fa";
import "./styles.css";
import React from "react";
import ImageUploading from "react-images-uploading";
import Button from '@material-ui/core/Button';

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
                  style={isDragging ? { color: "red" } : undefined}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  <FaPlus />
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
              type="text"
              id="phone-location"
              name="phone-location"
              placeholder="phone number"
            />
            <Button className="submit-sign-up-button">
              <div>Publish</div>
            </Button>
          </div>
        </div>
      </div>
      { footer}
    </>
  );
}
