import React from "react";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "https://picsum.photos/id/1018/1920/1152/",
    thumbnail: "https://picsum.photos/id/1018/1000/600/"
  },
  {
    original: "https://picsum.photos/id/1015/1920/1152/",
    thumbnail: "https://picsum.photos/id/1015/1000/600/"
  },
  {
    original: "https://picsum.photos/id/1019/1920/1152/",
    thumbnail: "https://picsum.photos/id/1019/1000/600/"
  },
  {
    original: "https://picsum.photos/id/1014/1920/1152/",
    thumbnail: "https://picsum.photos/id/1014/1000/600/"
  },
  {
    original: "https://picsum.photos/id/1009/1920/1152/",
    thumbnail: "https://picsum.photos/id/1009/1000/600/"
  },
];

export default function Images() {
  return (
    <>
      <ImageGallery showPlayButton={false} items={images} />
    </>
  );
}
