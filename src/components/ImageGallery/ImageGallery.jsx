import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import '../../styles.css';



export default function ImageGallery({ gallery: { hits } }) {
  return (
    <ul className="ImageGallery">
      {hits.map(hit => (
        <ImageGalleryItem key={hit.id} hits={hit} tags={hit.tags} />
      ))}
    </ul>
  );
}




