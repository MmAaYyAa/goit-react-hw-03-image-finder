import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ hits }) => {
  return (
    <>
      <ul className="gallery">
        {hits.map(hit => (
          <ImageGalleryItem hit={hit} key={hit.id} />
        ))}
      </ul>
    </>
  );
};
export default ImageGallery;
