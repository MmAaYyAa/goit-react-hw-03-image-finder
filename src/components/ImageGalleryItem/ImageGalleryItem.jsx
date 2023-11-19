import React from 'react';
import {
  ImageGalleryItemImg,
  ImageGalleryItemStyled,
} from './ImageGalleryItem.styled';
const ImageGalleryItem = ({ hit: { id, webformatURL, largeImageURL } }) => {
  return (
    <>
      <ImageGalleryItemStyled className="gallery-item">
        <ImageGalleryItemImg src={webformatURL} alt="" />
      </ImageGalleryItemStyled>
    </>
  );
};
export default ImageGalleryItem;
