import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";

export default function Images(id) {
  const [photos, setPhotos] = useState([]);
  const [state, setState] = useState(false);

  useEffect(() => {
    fetch(`https://moderato-backend.herokuapp.com/api/v1/photos/${id}`)
      .then(response => response.json())
      .then(data => data.photos.map(
        photo => {
          setPhotos(photos => [...photos, {
            original: photo.photoUrl,
            thumbnail: photo.photoUrl
          }])
        }))
      .then(setState(true));
  }, [])
  if (state === true) {
    return (
      <>
        <ImageGallery showPlayButton={false} items={photos} />
      </>
    );
  }
  else {
    return null;
  }
}
